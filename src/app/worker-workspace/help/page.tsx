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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/ui/accordion";
import { Input } from "@/components/shared/ui/input";
import { Search, MessageCircle, Book, Video, FileText } from "lucide-react";

const faqs = [
  {
    question: "How do I register a new worker node?",
    answer:
      "To register a new worker node, go to the Nodes Management page and click on 'Register New Node'. Follow the setup wizard to configure your node's specifications and security settings.",
  },
  {
    question: "How are earnings calculated?",
    answer:
      "Earnings are calculated based on your node's contribution to the network, including factors like CPU time, memory usage, and task complexity. The exact formula considers market rates and network demand.",
  },
  {
    question: "What are the minimum system requirements?",
    answer:
      "The minimum requirements are: 4 CPU cores, 8GB RAM, 100GB storage, and a stable internet connection with at least 10Mbps upload/download speed.",
  },
  {
    question: "How do I withdraw my earnings?",
    answer:
      "You can withdraw your earnings from the Earnings page once you've reached the minimum withdrawal amount. We support multiple payment methods including cryptocurrency and bank transfers.",
  },
];

const resources = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of setting up and managing your worker nodes",
    icon: Book,
    href: "#",
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step guides on various platform features",
    icon: Video,
    href: "#",
  },
  {
    title: "Documentation",
    description: "Detailed technical documentation and API references",
    icon: FileText,
    href: "#",
  },
  {
    title: "Community Forum",
    description: "Connect with other users and share experiences",
    icon: MessageCircle,
    href: "#",
  },
];

export default function HelpPage() {
  return (
    <PageContainer title="Help Center">
      <div className="max-w-2xl mx-auto mb-8">
        <div className="flex items-center space-x-2">
          <Input placeholder="Search help articles..." />
          <Button>
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Card key={resource.title}>
                <CardHeader>
                  <Icon className="h-6 w-6 text-muted-foreground mb-2" />
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="px-0">
                    Learn more →
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find quick answers to common questions about the platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Still Need Help?</CardTitle>
            <CardDescription>
              Our support team is available 24/7 to assist you
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-4">
            <Button>
              <MessageCircle className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
            <Button variant="outline">
              Join Community
            </Button>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
} 