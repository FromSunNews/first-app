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

export function NetworkSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="ip">IP Address</Label>
        <Input
          id="ip"
          placeholder="Enter IP address"
          defaultValue="192.168.1.100"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="port">Port</Label>
        <Input
          id="port"
          placeholder="Enter port number"
          defaultValue="8080"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="protocol">Protocol</Label>
        <Select defaultValue="tcp">
          <SelectTrigger id="protocol">
            <SelectValue placeholder="Select protocol" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tcp">TCP</SelectItem>
            <SelectItem value="udp">UDP</SelectItem>
            <SelectItem value="http">HTTP</SelectItem>
            <SelectItem value="https">HTTPS</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="ssl">SSL/TLS</Label>
        <Switch id="ssl" defaultChecked />
      </div>

      <div className="flex items-center justify-between space-x-2">
        <Label htmlFor="firewall">Firewall</Label>
        <Switch id="firewall" defaultChecked />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bandwidth">Bandwidth Limit (Mbps)</Label>
        <Input
          id="bandwidth"
          type="number"
          placeholder="Enter bandwidth limit"
          defaultValue="1000"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeout">Connection Timeout (ms)</Label>
        <Input
          id="timeout"
          type="number"
          placeholder="Enter timeout"
          defaultValue="5000"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
} 