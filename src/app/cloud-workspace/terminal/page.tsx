"use client";

import { PageContainer } from "@/components/layout/page-container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shared/ui/card";
import { Button } from "@/components/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import {
  Plus,
  Terminal as TerminalIcon,
  X,
  Maximize2,
  Copy,
  Settings,
} from "lucide-react";

export default function TerminalPage() {
  return (
    <PageContainer title="Terminal">
      <div className="flex h-[calc(100vh-10rem)] gap-4">
        {/* Main Terminal Area */}
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <Tabs defaultValue="terminal1" className="flex-1">
              <TabsList>
                <TabsTrigger value="terminal1">
                  <TerminalIcon className="h-4 w-4 mr-2" />
                  Terminal 1
                </TabsTrigger>
                <TabsTrigger value="terminal2">
                  <TerminalIcon className="h-4 w-4 mr-2" />
                  Terminal 2
                </TabsTrigger>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Plus className="h-4 w-4" />
                </Button>
              </TabsList>
            </Tabs>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Maximize2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card className="flex-1">
            <CardContent className="p-0 h-full">
              <Tabs defaultValue="terminal1" className="h-full">
                <TabsContent value="terminal1" className="h-full m-0">
                  <div className="h-full border rounded-md bg-black p-4">
                    <div className="font-mono text-green-500">
                      <div>Welcome to Walnut Cloud Terminal</div>
                      <div>$ _</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="terminal2" className="h-full m-0">
                  <div className="h-full border rounded-md bg-black p-4">
                    <div className="font-mono text-green-500">
                      <div>Terminal 2</div>
                      <div>$ _</div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Settings Panel */}
        <Card className="w-64">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Terminal Settings</CardTitle>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Appearance</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Font Size</span>
                    <span className="text-sm text-muted-foreground">14px</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Font Family</span>
                    <span className="text-sm text-muted-foreground">Monospace</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Shell</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Default Shell</span>
                    <span className="text-sm text-muted-foreground">bash</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Working Directory</span>
                    <span className="text-sm text-muted-foreground">/home/user</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-2">Keybindings</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">New Terminal</span>
                    <span className="text-sm text-muted-foreground">Ctrl+`</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Clear Terminal</span>
                    <span className="text-sm text-muted-foreground">Ctrl+K</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
} 