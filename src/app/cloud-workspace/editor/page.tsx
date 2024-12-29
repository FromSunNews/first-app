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
  FolderTree,
  Code2,
  Terminal,
  GitBranch,
  Play,
  Save,
  Settings,
} from "lucide-react";

export default function EditorPage() {
  return (
    <PageContainer title="Code Editor">
      <div className="flex h-[calc(100vh-10rem)] gap-4">
        {/* File Explorer */}
        <Card className="w-64 flex flex-col">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-sm font-medium">Files</CardTitle>
              <Button variant="ghost" size="icon">
                <FolderTree className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto">
            {/* Add file tree component here */}
          </CardContent>
        </Card>

        {/* Main Editor Area */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <Tabs defaultValue="editor" className="flex-1">
              <TabsList>
                <TabsTrigger value="editor">
                  <Code2 className="h-4 w-4 mr-2" />
                  Editor
                </TabsTrigger>
                <TabsTrigger value="terminal">
                  <Terminal className="h-4 w-4 mr-2" />
                  Terminal
                </TabsTrigger>
                <TabsTrigger value="git">
                  <GitBranch className="h-4 w-4 mr-2" />
                  Git
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button size="sm">
                <Play className="h-4 w-4 mr-2" />
                Run
              </Button>
            </div>
          </div>

          <Card className="flex-1">
            <CardContent className="p-0 h-full">
              <Tabs defaultValue="editor" className="h-full">
                <TabsContent value="editor" className="h-full m-0">
                  <div className="h-full border rounded-md">
                    {/* Add code editor component here */}
                    <div className="p-4 text-muted-foreground">
                      Code editor will be integrated here
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="terminal" className="h-full m-0">
                  <div className="h-full border rounded-md bg-black">
                    {/* Add terminal component here */}
                    <div className="p-4 text-green-500 font-mono">
                      $ Terminal will be integrated here
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="git" className="h-full m-0">
                  <div className="h-full border rounded-md">
                    {/* Add git interface component here */}
                    <div className="p-4 text-muted-foreground">
                      Git interface will be integrated here
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
              <CardTitle className="text-sm font-medium">Settings</CardTitle>
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">Editor Settings</h4>
                {/* Add editor settings controls here */}
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Theme</h4>
                {/* Add theme settings here */}
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2">Extensions</h4>
                {/* Add extensions list here */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
} 