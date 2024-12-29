"use client";

import { Button } from "@/components/shared/ui/button";
import { Card, CardContent } from "@/components/shared/ui/card";
import { Label } from "@/components/shared/ui/label";
import { Switch } from "@/components/shared/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import { Bell, Mail, MessageSquare, Smartphone } from "lucide-react";

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notification Preferences</h3>
        <div className="grid gap-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Bell className="h-5 w-5" />
                  <div>
                    <p className="font-medium">System Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications about system events
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications via email
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Smartphone className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Mobile Notifications</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications on your mobile device
                    </p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <MessageSquare className="h-5 w-5" />
                  <div>
                    <p className="font-medium">Slack Integration</p>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications in Slack
                    </p>
                  </div>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Email Digest Settings</h3>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label>Frequency</Label>
            <Select defaultValue="daily">
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="realtime">Real-time</SelectItem>
                <SelectItem value="hourly">Hourly</SelectItem>
                <SelectItem value="daily">Daily</SelectItem>
                <SelectItem value="weekly">Weekly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Priority Level</Label>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Notifications</SelectItem>
                <SelectItem value="critical">Critical Only</SelectItem>
                <SelectItem value="important">Important & Critical</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
} 