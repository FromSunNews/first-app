"use client";

import { useState } from "react";
import { cn } from "@/libs/utils/taildwind";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Input } from "@/components/shared/ui/input";
import { Button } from "@/components/shared/ui/button";
import { FaExchangeAlt } from "react-icons/fa";
import { Logo } from "@/components/shared/custom/logo";

export default function BridgeExtra() {
  const [amount, setAmount] = useState("");
  const maxAmount = 0;
  const percentages = [25, 50, 75, 100];

  const handlePercentageClick = (percentage: number) => {
    setAmount(((maxAmount * percentage) / 100).toString());
  };

  return (
    <Card>
      <CardHeader className="space-y-2 p-4 text-center">
        <CardTitle>
          <div className="flex items-center justify-center gap-2">
            <Logo />
            {/* <span className="text-2xl font-bold">Bridge</span> */}
          </div>
        </CardTitle>
        <CardDescription>Bridge EXTRA Across Chains</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Network Selector */}
        <div className="flex flex-col items-center gap-2 space-y-2">
          <Button variant="secondary" className="font-medium text-primary hover:text-primary/80">
            <FaExchangeAlt className="mr-2 h-4 w-4" />
            Switch Network
          </Button>
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-sm text-white">
              OP
            </div>
            <span className="text-muted-foreground">to</span>
            <div className="h-8 w-8 rounded-full bg-primary" />
          </div>
        </div>

        {/* Amount Input */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Available: <span className="text-foreground">0</span>
            </div>
            <div className="flex gap-3">
              {percentages.map((percentage) => (
                <button
                  key={percentage}
                  onClick={() => handlePercentageClick(percentage)}
                  className={cn(
                    "text-sm text-primary hover:text-primary/80",
                    "rounded-full px-2 transition-colors",
                    "hover:bg-primary/10",
                    "border border-primary/20"
                  )}
                >
                  {percentage}%
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <Input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="h-12 pl-16 pr-24 text-lg"
            />
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-2 top-1/2 h-7 -translate-y-1/2 px-2 text-base font-medium"
            >
              MAX
            </Button>
            <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary" />
              <span className="font-medium">EXTRA</span>
            </div>
          </div>
        </div>

        {/* Bridge Button */}
        <Button size="lg" className="w-full bg-primary font-medium text-primary-foreground">
          Bridge
        </Button>
      </CardContent>
    </Card>
  );
}
