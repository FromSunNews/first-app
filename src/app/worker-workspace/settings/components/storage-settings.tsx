"use client";

import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Switch } from "@/components/shared/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import { Progress } from "@/components/shared/ui/progress";

export function StorageSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label>Storage Usage</Label>
          <span className="text-sm text-muted-foreground">234.5 GB / 500 GB</span>
        </div>
        <Progress value={45} className="h-2" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="path">Storage Path</Label>
        <Input
          id="path"
          placeholder="Enter storage path"
          defaultValue="/data/worker"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="type">Storage Type</Label>
        <Select defaultValue="ssd">
          <SelectTrigger id="type">
            <SelectValue placeholder="Select storage type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ssd">SSD</SelectItem>
            <SelectItem value="hdd">HDD</SelectItem>
            <SelectItem value="nvme">NVMe</SelectItem>
            <SelectItem value="san">SAN</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="compression">Compression</Label>
        <Switch id="compression" defaultChecked />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="encryption">Encryption</Label>
        <Switch id="encryption" defaultChecked />
      </div>

      <div className="space-y-2">
        <Label htmlFor="retention">Data Retention (days)</Label>
        <Input
          id="retention"
          type="number"
          placeholder="Enter retention period"
          defaultValue="30"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="backup">Backup Location</Label>
        <Input
          id="backup"
          placeholder="Enter backup location"
          defaultValue="/backup/worker"
        />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="auto-cleanup">Automatic Cleanup</Label>
        <Switch id="auto-cleanup" defaultChecked />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
} 