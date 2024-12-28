import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Icons } from "@/components/shared/icons";

const features = [
  {
    title: "Cloud Computing",
    description: "Access distributed computing power",
    icon: Icons.cloud,
  },
  {
    title: "Task Management",
    description: "Deploy and monitor your tasks",
    icon: Icons.server,
  },
  {
    title: "Analytics",
    description: "Track performance metrics",
    icon: Icons.cloud,
  },
  {
    title: "Security",
    description: "Enterprise-grade security measures",
    icon: Icons.server,
  },
];

export const WelcomeScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <div className="space-y-4 text-center">
        <Icons.cloud className="mx-auto h-16 w-16 text-primary" />
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Walnut Network</h1>
        <p className="max-w-2xl text-xl text-muted-foreground">
          Experience the power of distributed computing. Deploy tasks, monitor performance, and scale your applications
          with ease.
        </p>
      </div>

      <div className="grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card key={feature.title} className="bg-background/60">
            <CardHeader>
              <feature.icon className="h-8 w-8 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
