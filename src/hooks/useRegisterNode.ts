import { useState } from 'react';
import { Transaction } from '@mysten/sui/transactions';
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { useNodeApi } from "./useNodeApi";
import { getSuiClient } from '@/utils/suiClient';
import { useToast } from '@/hooks/shared/use-toast';
import { CONFIG } from '@/utils/config';

interface RegisterNodeConfig {
  name: string;
  os: string;
  deviceType: string;
}

interface RegisterNodeProps {
  onSuccess?: (data: any) => void;
}

export const useRegisterNode = ({ onSuccess }: RegisterNodeProps) => {
  const client = getSuiClient();
  const [isRegistering, setIsRegistering] = useState(false);
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction({
    execute: async ({ bytes, signature }) =>
      await client.executeTransactionBlock({
        transactionBlock: bytes,
        signature,
        options: {
          showEffects: true,
          showObjectChanges: true,
        },
      }),
  });
  const { toast } = useToast();
  const nodeApi = useNodeApi();

  const handleError = async (error: any, address: string, nodeId?: string) => {
    console.error('Registration error:', error);

    if (nodeId) {
      try {
        await nodeApi.destroyNode(address, nodeId);
        console.log('Node destroyed after failed registration');
      } catch (destroyError) {
        console.error('Error during node destruction:', destroyError);
      }
    }

    toast({
      variant: "destructive",
      title: "Error",
      description: error?.message || "Cannot register node. Please try again."
    });
  };

  const registerNode = async (account: any, config: RegisterNodeConfig) => {
    if (!account) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please connect your wallet first"
      });
      return;
    }

    const { name, os, deviceType } = config;

    if (!name || !os || !deviceType) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please fill in all required fields"
      });
      return;
    }

    setIsRegistering(true);
    let nodeInstance = null;

    try {
      // 1. Register node with backend
      const backendResponse = await nodeApi.registerNode(account.address, {
        name,
        os,
        deviceType
      });

      if (!backendResponse.success) {
        throw new Error("Backend registration failed");
      }

      nodeInstance = backendResponse.data;

      // 2. Create transaction
      const tx = new Transaction();
      tx.moveCall({
        target: `${CONFIG.PACKAGE_ID}::${CONFIG.MODULE_NAME}::register_node`,
        arguments: [
          tx.object(CONFIG.NETWORK_ID), // network
          tx.pure.string(name), // name
          tx.pure.string(os), // os
          tx.pure.string(deviceType), // device_type
          tx.pure.string(nodeInstance.ip), // ip
          tx.object(CONFIG.CLOCK_ID), // clock
        ],
      });

      // 3. Execute transaction with proper callbacks
      await signAndExecuteTransaction(
        {
          transaction: tx,
          chain: 'sui:testnet',
        },
        {
          onSuccess: (result) => {
            console.log("Transaction result:", result);
            if (result) {
              onSuccess?.(nodeInstance);
              toast({
                variant: "default",
                title: "Success",
                description: "Node registered successfully"
              });
            } else {
              throw new Error("Transaction failed");
            }
          },
          onError: (error) => {
            console.log("Transaction error:", error);
            handleError(error, account.address, nodeInstance?.id);
          },
          onSettled: (data, error) => {
            console.log("Transaction settled", data, error);
            setIsRegistering(false);
          }
        }
      );

    } catch (error) {
      await handleError(error, account.address, nodeInstance?.id);
      setIsRegistering(false);
    }
  };

  return { registerNode, isRegistering };
} 