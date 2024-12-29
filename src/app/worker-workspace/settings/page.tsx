import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import { GeneralSettings } from "./components/general-settings";
import { NetworkSettings } from "./components/network-settings";
import { StorageSettings } from "./components/storage-settings";

export default function SettingsPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">
            Configure your worker node settings
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Worker Node Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="general" className="space-y-4">
              <TabsList>
                <TabsTrigger value="general">General</TabsTrigger>
                <TabsTrigger value="network">Network</TabsTrigger>
                <TabsTrigger value="storage">Storage</TabsTrigger>
              </TabsList>
              <TabsContent value="general">
                <GeneralSettings />
              </TabsContent>
              <TabsContent value="network">
                <NetworkSettings />
              </TabsContent>
              <TabsContent value="storage">
                <StorageSettings />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
} 