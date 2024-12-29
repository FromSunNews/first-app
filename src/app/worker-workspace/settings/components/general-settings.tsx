"use client";

import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Switch } from "@/components/shared/ui/switch";

export function GeneralSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Node Name</Label>
        <Input id="name" placeholder="Enter node name" defaultValue="Worker Node 1" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Input
          id="description"
          placeholder="Enter node description"
          defaultValue="Primary worker node for AI computations"
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="auto-updates">Automatic Updates</Label>
        <Switch id="auto-updates" defaultChecked />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="notifications">Email Notifications</Label>
        <Switch id="notifications" defaultChecked />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="maintenance">Maintenance Mode</Label>
        <Switch id="maintenance" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="api-key">API Key</Label>
        <Input
          id="api-key"
          type="password"
          placeholder="Enter API key"
          defaultValue="sk-1234567890abcdef"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
} 