import { useState } from 'react';
import { Transaction } from '@mysten/sui/transactions';
import { useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { useNodeApi } from "@/hooks/useNodeApi";
import { getSuiClient } from '@/utils/suiClient';
import { useToast } from '@/hooks/shared/use-toast';
import { CONFIG } from '@/utils/config';

interface ExecutePythonConfig {
  processor: number;
  clusterType: number;
  rewardAmount: number;
}

interface ExecutePythonProps {
  onSuccess?: (data: any) => void;
}

export const useExecutePython = ({ onSuccess }: ExecutePythonProps) => {
  const client = getSuiClient();
  const [isExecuting, setIsExecuting] = useState(false);
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

  const handleError = async (error: any, address: string, taskId?: string) => {
    console.error('Execution error:', error);

    if (taskId) {
      try {
        await nodeApi.destroyTask(address, taskId);
        console.log('Task destroyed after failed execution');
      } catch (destroyError) {
        console.error('Error during task destruction:', destroyError);
      }
    }

    toast({
      variant: "destructive",
      title: "Error",
      description: error?.message || "Cannot execute Python code. Please try again."
    });
  };

  const executePython = async (account: any, code: string, config: ExecutePythonConfig) => {
    if (!account) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please connect your wallet first"
      });
      return;
    }

    const { processor, clusterType, rewardAmount } = config;

    if (!code.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please write some code first"
      });
      return;
    }

    setIsExecuting(true);
    let taskInstance: any = null;

    try {
      // 1. Deploy task with backend
      const backendResponse = await nodeApi.executeTask(account.address, {
        code,
        processor,
        clusterType,
        rewardAmount
      });

      if (!backendResponse.success) {
        throw new Error("Backend execution failed");
      }

      taskInstance = backendResponse.data;

      // 2. Create transaction
      const tx = new Transaction();
      tx.moveCall({
        target: `${CONFIG.PACKAGE_ID}::${CONFIG.MODULE_NAME}::execute_task`,
        arguments: [
          tx.object(CONFIG.NETWORK_ID), // network
          tx.pure.u8(clusterType), // cluster_type
          tx.pure.u8(processor), // processor
          tx.pure.string(code), // code
          tx.pure.u64(rewardAmount), // reward
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
              onSuccess?.(taskInstance);
              toast({
                variant: "default",
                title: "Success",
                description: "Python code executed successfully"
              });
            } else {
              throw new Error("Transaction failed");
            }
          },
          onError: (error) => {
            console.log("Transaction error:", error);
            handleError(error, account.address, taskInstance?.id);
          },
          onSettled: (data, error) => {
            console.log("Transaction settled", data, error);
            setIsExecuting(false);
          }
        }
      );

    } catch (error) {
      await handleError(error, account.address, taskInstance?.id);
      setIsExecuting(false);
    }
  };

  return { executePython, isExecuting };
} 