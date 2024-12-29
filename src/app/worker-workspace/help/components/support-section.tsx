"use client";

import { Button } from "@/components/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/shared/ui/card";
import { Input } from "@/components/shared/ui/input";
import { Textarea } from "@/components/shared/ui/textarea";
import { MessageSquare, Mail, Globe, Github } from "lucide-react";

export function SupportSection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5" />
              Live Chat
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Chat with our support team in real-time
            </p>
            <Button className="w-full">Start Chat</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Get help via email within 2 hours
            </p>
            <Button variant="outline" className="w-full">
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Community Forum
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Join discussions with other users
            </p>
            <Button variant="outline" className="w-full">
              Visit Forum
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              GitHub Issues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Report bugs and request features
            </p>
            <Button variant="outline" className="w-full">
              View Issues
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input placeholder="Enter your name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="Enter your email" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input placeholder="Enter subject" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                placeholder="Describe your issue..."
                className="min-h-[100px]"
              />
            </div>
            <div className="flex justify-end">
              <Button>Send Message</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
} 