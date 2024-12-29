"use client";

import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import { Label } from "@/components/shared/ui/label";
import { Textarea } from "@/components/shared/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/shared/ui/avatar";
import { Camera } from "lucide-react";

export function PersonalInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-6">
        <Avatar className="h-24 w-24">
          <AvatarImage src="/avatars/user.png" alt="User avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Profile Picture</h3>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Camera className="mr-2 h-4 w-4" />
              Change Photo
            </Button>
            <Button variant="outline" size="sm">Remove</Button>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" placeholder="Enter first name" defaultValue="John" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" placeholder="Enter last name" defaultValue="Doe" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter email address"
          defaultValue="john.doe@example.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="Enter phone number"
          defaultValue="+1 (555) 123-4567"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input
          id="company"
          placeholder="Enter company name"
          defaultValue="Tech Solutions Inc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          placeholder="Write a short bio..."
          className="min-h-[100px]"
          defaultValue="Experienced node operator with a passion for decentralized computing. Managing multiple high-performance nodes since 2023."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website (Optional)</Label>
        <Input
          id="website"
          type="url"
          placeholder="Enter website URL"
          defaultValue="https://johndoe.dev"
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline">Cancel</Button>
        <Button>Save Changes</Button>
      </div>
    </div>
  );
} 