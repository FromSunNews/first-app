"use client";

import { Button } from "@/components/shared/ui/button";
import { ScrollArea } from "@/components/shared/ui/scroll-area";
import { Search } from "lucide-react";
import { Input } from "@/components/shared/ui/input";

const guides = [
  {
    id: "1",
    title: "Getting Started with Worker Nodes",
    description: "Learn how to set up and configure your first worker node",
    category: "Basics",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "Optimizing Node Performance",
    description: "Best practices for maximizing your node's performance",
    category: "Performance",
    readTime: "8 min read",
  },
  {
    id: "3",
    title: "Security Best Practices",
    description: "Essential security measures for your worker nodes",
    category: "Security",
    readTime: "10 min read",
  },
  {
    id: "4",
    title: "Task Management Guide",
    description: "How to efficiently manage and monitor tasks",
    category: "Management",
    readTime: "7 min read",
  },
  {
    id: "5",
    title: "Network Configuration",
    description: "Setting up network connections and protocols",
    category: "Network",
    readTime: "6 min read",
  },
  {
    id: "6",
    title: "Storage Management",
    description: "Managing storage resources effectively",
    category: "Storage",
    readTime: "5 min read",
  },
  {
    id: "7",
    title: "Troubleshooting Guide",
    description: "Common issues and their solutions",
    category: "Support",
    readTime: "12 min read",
  },
  {
    id: "8",
    title: "API Integration",
    description: "Integrating with external services via API",
    category: "Development",
    readTime: "8 min read",
  },
];

export function GuidesSection() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search guides..." className="pl-8" />
        </div>
        <Button variant="outline">Categories</Button>
      </div>

      <ScrollArea className="h-[500px] pr-4">
        <div className="grid gap-4 md:grid-cols-2">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="rounded-lg border p-4 hover:bg-muted/50 cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="font-medium">{guide.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {guide.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>{guide.category}</span>
                <span>{guide.readTime}</span>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
} 