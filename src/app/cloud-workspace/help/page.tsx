"use client";

import { PageContainer } from "@/components/layout/page-container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Input } from "@/components/shared/ui/input";
import { Button } from "@/components/shared/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shared/ui/tabs";
import { Search, Book, MessageCircle, FileText, Video } from "lucide-react";

export default function HelpPage() {
  return (
    <PageContainer>
      <div className="flex flex-col gap-6">
        <div>
          <h1 className="text-3xl font-bold">Cloud Help Center</h1>
          <p className="text-muted-foreground">
            Find help and resources for Walnut Cloud
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search help articles..." className="pl-8" />
                </div>
              </div>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Documentation
              </CardTitle>
              <Book className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">85</div>
              <p className="text-xs text-muted-foreground">
                Articles available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Video Tutorials
              </CardTitle>
              <Video className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">
                Tutorials available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Support Tickets
              </CardTitle>
              <MessageCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24/7</div>
              <p className="text-xs text-muted-foreground">
                Support available
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                API Reference
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">100%</div>
              <p className="text-xs text-muted-foreground">
                API documented
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Help Resources</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="getting-started" className="space-y-4">
              <TabsList>
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              <TabsContent value="getting-started" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {gettingStartedGuides.map((guide, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-base">{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {guide.description}
                        </p>
                        <Button variant="link" className="mt-2 px-0">
                          Learn more →
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="guides" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  {guides.map((guide, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-base">{guide.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {guide.description}
                        </p>
                        <Button variant="link" className="mt-2 px-0">
                          Read guide →
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="faq" className="space-y-4">
                <div className="grid gap-4">
                  {faqs.map((faq, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-base">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="support" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Contact Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Get in touch with our cloud support team for personalized help.
                      </p>
                      <Button className="mt-4">Contact Support</Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Community Forum</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Join our cloud community forum to connect with other users.
                      </p>
                      <Button className="mt-4">Visit Forum</Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}

const gettingStartedGuides = [
  {
    title: "Cloud Platform Overview",
    description:
      "Learn about the key features and capabilities of Walnut Cloud Platform.",
  },
  {
    title: "Setting Up Your Cloud Environment",
    description:
      "Step-by-step guide to configure your cloud workspace and resources.",
  },
  {
    title: "Security Best Practices",
    description:
      "Essential security guidelines for protecting your cloud resources.",
  },
  {
    title: "Resource Management",
    description:
      "Learn how to efficiently manage and monitor your cloud resources.",
  },
];

const guides = [
  {
    title: "Advanced Cloud Configuration",
    description:
      "Deep dive into advanced cloud configuration options and optimizations.",
  },
  {
    title: "Auto-scaling Setup",
    description:
      "Configure auto-scaling for your applications and services.",
  },
  {
    title: "Monitoring and Alerts",
    description:
      "Set up comprehensive monitoring and alert systems.",
  },
  {
    title: "Deployment Strategies",
    description:
      "Learn about different deployment strategies and best practices.",
  },
];

const faqs = [
  {
    question: "What are the pricing tiers?",
    answer:
      "We offer flexible pricing tiers based on resource usage and requirements.",
  },
  {
    question: "How is data backed up?",
    answer:
      "Data is automatically backed up daily with options for custom backup schedules.",
  },
  {
    question: "What security measures are in place?",
    answer:
      "We implement industry-standard security protocols including encryption and access controls.",
  },
  {
    question: "How do I scale my resources?",
    answer:
      "Resources can be scaled manually or automatically based on defined metrics.",
  },
]; 