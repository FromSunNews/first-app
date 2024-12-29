"use client";

import { useState } from "react";
import { PageContainer } from "@/components/layout/page-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Textarea } from "@/components/shared/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Bot,
  Code2,
  Upload,
  Settings,
  Cpu,
  HardDrive,
  Network,
  Clock,
} from "lucide-react";
import { useCurrentAccount } from "@mysten/dapp-kit";
import { useToast } from "@/hooks/shared/use-toast";
import { useExecutePython } from "@/hooks/useExecutePython";

const taskSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  type: z.string(),
  framework: z.string(),
  resources: z.object({
    cpu: z.string(),
    memory: z.string(),
    gpu: z.string().optional(),
  }),
  timeout: z.string(),
  priority: z.string(),
});

const TASK_TYPES = [
  {
    value: "training",
    label: "Model Training",
    description: "Train machine learning models on distributed nodes"
  },
  {
    value: "inference", 
    label: "Inference",
    description: "Run inference on trained models"
  },
  {
    value: "data-processing",
    label: "Data Processing",
    description: "Process and transform large datasets"
  },
  {
    value: "simulation",
    label: "Simulation",
    description: "Run complex scientific simulations"
  }
];

const FRAMEWORKS = [
  {
    value: "pytorch",
    label: "PyTorch",
    version: "2.0.1"
  },
  {
    value: "tensorflow",
    label: "TensorFlow", 
    version: "2.13.0"
  },
  {
    value: "jax",
    label: "JAX",
    version: "0.4.13" 
  },
  {
    value: "mxnet",
    label: "MXNet",
    version: "1.9.1"
  },
  {
    value: "custom",
    label: "Custom",
    version: null
  }
];

const CPU_OPTIONS = [
  { value: "2", label: "2 Cores", description: "Basic computing tasks" },
  { value: "4", label: "4 Cores", description: "Medium workloads" },
  { value: "8", label: "8 Cores", description: "Heavy computation" },
  { value: "16", label: "16 Cores", description: "Intensive processing" },
  { value: "32", label: "32 Cores", description: "High-performance computing" }
];

const MEMORY_OPTIONS = [
  { value: "4", label: "4 GB", description: "Basic tasks" },
  { value: "8", label: "8 GB", description: "Standard workloads" },
  { value: "16", label: "16 GB", description: "Memory intensive" },
  { value: "32", label: "32 GB", description: "Large datasets" },
  { value: "64", label: "64 GB", description: "Big data processing" }
];

const GPU_OPTIONS = [
  { value: "0", label: "No GPU", description: "CPU only workloads" },
  { value: "1", label: "1 GPU", description: "Basic ML training" },
  { value: "2", label: "2 GPUs", description: "Parallel training" },
  { value: "4", label: "4 GPUs", description: "Distributed learning" }
];

const TIMEOUT_OPTIONS = [
  { value: "1h", label: "1 Hour", description: "Short tasks" },
  { value: "4h", label: "4 Hours", description: "Medium duration" },
  { value: "12h", label: "12 Hours", description: "Long running" },
  { value: "24h", label: "24 Hours", description: "Day-long tasks" },
  { value: "72h", label: "72 Hours", description: "Extended processing" }
];

const PRIORITY_OPTIONS = [
  { value: "low", label: "Low", description: "Background tasks" },
  { value: "medium", label: "Medium", description: "Standard priority" },
  { value: "high", label: "High", description: "Time-sensitive tasks" }
];

export default function SubmitTaskPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { executePython, isExecuting } = useExecutePython({
    onSuccess: (data: any) => {
      console.log("onSuccess: (data) => {", data);
      setOutput(data.result || 'No output');
    }
  });
  const account = useCurrentAccount();
  const [output, setOutput] = useState('');

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      name: "",
      description: "",
      type: "training",
      framework: "pytorch",
      resources: {
        cpu: "2",
        memory: "4",
        gpu: "0",
      },
      timeout: "1h",
      priority: "medium",
    },
  });

  const onSubmit = async (data: z.infer<typeof taskSchema>) => {
    if (!account) {
      toast({
        title: "Error",
        description: "Please connect your wallet first",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await executePython(account, data.description, {
        processor: 0, // CPU
        clusterType: 1,
        rewardAmount: 100
      });

      if (result) {
        toast({
          title: "Success", 
          description: "Task submitted successfully",
          variant: "default"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit task",
        variant: "destructive"
      });
    } finally {
    setIsSubmitting(false);
    }
  };

  return (
    <PageContainer title="Submit Task">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Submit New Task
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Configure and submit your computational task to the network
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Task Information</CardTitle>
                <CardDescription>
                  Basic information about your task
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Task Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter task name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your task"
                              className="resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="type"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Task Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select task type" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {TASK_TYPES.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  <div className="flex flex-col">
                                    <span>{type.label}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {type.description}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="framework"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Framework</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select framework" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {FRAMEWORKS.map((framework) => (
                                <SelectItem key={framework.value} value={framework.value}>
                                  <div className="flex flex-col">
                                    <span>{framework.label}</span>
                                    {framework.version && (
                                      <span className="text-xs text-muted-foreground">
                                        Version {framework.version}
                                      </span>
                                    )}
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Requirements</CardTitle>
                <CardDescription>
                  Specify the computational resources needed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form className="space-y-6">
                    <FormField
                      control={form.control}
                      name="resources.cpu"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CPU Cores</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select CPU cores" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {CPU_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  <div className="flex flex-col">
                                    <span>{option.label}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {option.description}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="resources.memory"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Memory (GB)</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select memory" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {MEMORY_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  <div className="flex flex-col">
                                    <span>{option.label}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {option.description}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="resources.gpu"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>GPU Units</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select GPU units" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {GPU_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  <div className="flex flex-col">
                                    <span>{option.label}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {option.description}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Code & Dependencies</CardTitle>
                <CardDescription>
                  Upload your code and specify dependencies
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your code files here, or click to browse
                    </p>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Code2 className="mr-2 h-4 w-4" />
                    Upload requirements.txt
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Output</CardTitle>
                <CardDescription>
                  Task execution output and logs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="font-mono text-sm p-4 min-h-[200px] max-h-[400px] overflow-y-auto bg-muted rounded-md">
                  {output || 'Output will appear here...'}
                </pre>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Execution Settings</CardTitle>
                <CardDescription>
                  Configure how your task should be executed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form className="space-y-6">
                    <FormField
                      control={form.control}
                      name="timeout"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Timeout</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select timeout" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {TIMEOUT_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  <div className="flex flex-col">
                                    <span>{option.label}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {option.description}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="priority"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Priority</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select priority" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {PRIORITY_OPTIONS.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  <div className="flex flex-col">
                                    <span>{option.label}</span>
                                    <span className="text-xs text-muted-foreground">
                                      {option.description}
                                    </span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </CardContent>
            </Card>

            <Button
              className="w-full"
              onClick={form.handleSubmit(onSubmit)}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Bot className="mr-2 h-4 w-4 animate-spin" />
                  Submitting Task...
                </>
              ) : (
                <>
                  <Bot className="mr-2 h-4 w-4" />
                  Submit Task
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </PageContainer>
  );
} 