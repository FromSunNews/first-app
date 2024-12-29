import { useState } from 'react';
import { useToast } from '@/hooks/shared/use-toast';

interface NodeApiResponse<T = any> {
  data: T;
  error: any;
  success: {
    title: string;
  };
  code: number;
}

interface ExecuteTaskParams {
  code: string;
  processor: number;
  clusterType: number;
  rewardAmount: number;
}

interface RegisterNodeParams {
  name: string;
  os: string;
  deviceType: string;
}

export const useNodeApi = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleApiError = (error: any) => {
    console.error('API Error:', error);
    toast({
      variant: "destructive",
      title: "API Error",
      description: error?.message || "Something went wrong"
    });
  };

  const executeTask = async (address: string, params: ExecuteTaskParams): Promise<NodeApiResponse> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        data: {
          id: "task_" + Math.random().toString(36).substr(2, 9),
          status: "running",
          result: "Task executed successfully"
        },
        error: null,
        success: {
          title: "ok"
        },
        code: 200
      };
    } catch (error) {
      handleApiError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const destroyTask = async (address: string, taskId: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log(`Task ${taskId} destroyed`);
    } catch (error) {
      handleApiError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const registerNode = async (address: string, params: RegisterNodeParams): Promise<NodeApiResponse> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      return {
        data: {
          id: "node_" + Math.random().toString(36).substr(2, 9),
          ip: "192.168.1." + Math.floor(Math.random() * 255),
          architecture: "x86_64",
          state: { name: "running" },
          cpu: {
            core: 8,
            threadPerCore: 2
          }
        },
        error: null,
        success: {
          title: "ok"
        },
        code: 200
      };
    } catch (error) {
      handleApiError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const destroyNode = async (address: string, nodeId: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log(`Node ${nodeId} destroyed`);
    } catch (error) {
      handleApiError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    executeTask,
    destroyTask,
    registerNode,
    destroyNode,
    isLoading
  };
}; 