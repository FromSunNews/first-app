"use client";

import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Switch } from "@/components/shared/ui/switch";
import { Card, CardContent } from "@/components/shared/ui/card";
import { Shield, Smartphone, Key } from "lucide-react";

export function SecuritySettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Change Password</h3>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="currentPassword">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="Enter current password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="newPassword">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
            />
          </div>
          <Button>Update Password</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Smartphone className="h-6 w-6" />
                <div>
                  <p className="font-medium">Authenticator App</p>
                  <p className="text-sm text-muted-foreground">
                    Use an authenticator app to generate one-time codes
                  </p>
                </div>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Security Keys</h3>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Key className="h-6 w-6" />
                <div>
                  <p className="font-medium">Hardware Security Keys</p>
                  <p className="text-sm text-muted-foreground">
                    Use security keys for two-factor authentication
                  </p>
                </div>
              </div>
              <Button variant="outline">Manage Keys</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Login History</h3>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Shield className="h-6 w-6" />
                <div>
                  <p className="font-medium">Recent Activity</p>
                  <p className="text-sm text-muted-foreground">
                    View your recent login activity
                  </p>
                </div>
              </div>
              <Button variant="outline">View History</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 