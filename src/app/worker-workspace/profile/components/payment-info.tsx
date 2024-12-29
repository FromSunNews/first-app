"use client";

import { Button } from "@/components/shared/ui/button";
import { Card, CardContent } from "@/components/shared/ui/card";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import { CreditCard, Wallet, History } from "lucide-react";

export function PaymentInfo() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Payment Methods</h3>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <CreditCard className="h-6 w-6" />
                  <div>
                    <p className="font-medium">Credit Card</p>
                    <p className="text-sm text-muted-foreground">
                      Visa ending in 4242
                    </p>
                  </div>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Wallet className="h-6 w-6" />
                  <div>
                    <p className="font-medium">Crypto Wallet</p>
                    <p className="text-sm text-muted-foreground">
                      0x1234...5678
                    </p>
                  </div>
                </div>
                <Button variant="outline">Edit</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Add New Payment Method</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Payment Type</Label>
            <Select defaultValue="card">
              <SelectTrigger>
                <SelectValue placeholder="Select payment type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="card">Credit Card</SelectItem>
                <SelectItem value="crypto">Crypto Wallet</SelectItem>
                <SelectItem value="bank">Bank Account</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="Enter name on card" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="Enter card number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input id="expiryDate" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <Input id="cvv" placeholder="Enter CVV" />
            </div>
          </div>

          <Button>Add Payment Method</Button>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium">Payment History</h3>
          <Button variant="outline" size="sm">
            <History className="mr-2 h-4 w-4" />
            View All
          </Button>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Payment #{i}</p>
                    <p className="text-sm text-muted-foreground">
                      Jan {i * 5}, 2024
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">$249.99</p>
                    <p className="text-sm text-green-500">Completed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
} 