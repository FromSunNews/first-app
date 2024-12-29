"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Switch } from "@/components/shared/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/ui/select";
import { Settings, Save, RefreshCw } from "lucide-react";

export default function ConfigurationPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Configuration</h1>
            <p className="text-muted-foreground">
              Manage your cloud resource settings
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            <Button>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Services
              </CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Running services
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Environment Variables
              </CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                Configured variables
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                API Keys
              </CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Active keys
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Configurations
              </CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Active environments
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general" className="space-y-4">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
                <TabsTrigger value="storage">Storage</TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Environment</Label>
                    <Select defaultValue="production">
                      <SelectTrigger>
                        <SelectValue placeholder="Select environment" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="staging">Staging</SelectItem>
                        <SelectItem value="production">Production</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Region</Label>
                    <Select defaultValue="us-east">
                      <SelectTrigger>
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us-east">US East</SelectItem>
                        <SelectItem value="us-west">US West</SelectItem>
                        <SelectItem value="eu-west">EU West</SelectItem>
                        <SelectItem value="ap-south">AP South</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Instance Type</Label>
                    <Select defaultValue="standard">
                      <SelectTrigger>
                        <SelectValue placeholder="Select instance type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic</SelectItem>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="premium">Premium</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto Scaling</Label>
                      <p className="text-sm text-muted-foreground">
                        Automatically adjust resources based on demand
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>High Availability</Label>
                      <p className="text-sm text-muted-foreground">
                        Deploy across multiple availability zones
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="security" className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Access Level</Label>
                    <Select defaultValue="private">
                      <SelectTrigger>
                        <SelectValue placeholder="Select access level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="private">Private</SelectItem>
                        <SelectItem value="restricted">Restricted</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>SSL/TLS Encryption</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable HTTPS for all endpoints
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>DDoS Protection</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable advanced DDoS protection
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="network" className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Network Type</Label>
                    <Select defaultValue="vpc">
                      <SelectTrigger>
                        <SelectValue placeholder="Select network type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vpc">VPC</SelectItem>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>IP Range</Label>
                    <Input placeholder="10.0.0.0/16" defaultValue="10.0.0.0/16" />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Load Balancing</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable automatic load balancing
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="storage" className="space-y-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label>Storage Type</Label>
                    <Select defaultValue="ssd">
                      <SelectTrigger>
                        <SelectValue placeholder="Select storage type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ssd">SSD</SelectItem>
                        <SelectItem value="hdd">HDD</SelectItem>
                        <SelectItem value="nvme">NVMe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Backup Frequency</Label>
                    <Select defaultValue="daily">
                      <SelectTrigger>
                        <SelectValue placeholder="Select backup frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hourly">Hourly</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>Auto Backup</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable automatic backups
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
} 