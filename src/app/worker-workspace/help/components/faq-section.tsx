"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/ui/accordion";
import { Input } from "@/components/shared/ui/input";
import { Search } from "lucide-react";

const faqs = [
  {
    id: "1",
    question: "What are the minimum system requirements?",
    answer: "To run a worker node, you need at least 4 CPU cores, 8GB RAM, and 100GB storage. We recommend using SSD storage for better performance. The node should have a stable internet connection with at least 10Mbps bandwidth.",
  },
  {
    id: "2",
    question: "How do I update my worker node?",
    answer: "Worker nodes can be updated automatically or manually. For automatic updates, enable the auto-update feature in settings. For manual updates, download the latest version from the dashboard and follow the installation instructions.",
  },
  {
    id: "3",
    question: "What happens if my node goes offline?",
    answer: "If a node goes offline, tasks will be automatically redistributed to other available nodes. You'll receive notifications about the downtime. The node will automatically rejoin the network once it's back online.",
  },
  {
    id: "4",
    question: "How are tasks distributed among nodes?",
    answer: "Tasks are distributed based on several factors including node capacity, current load, performance history, and task requirements. Our smart allocation system ensures optimal resource utilization.",
  },
  {
    id: "5",
    question: "How is payment calculated?",
    answer: "Payment is calculated based on the computational resources provided (CPU, memory, storage) and actual usage time. Bonuses are awarded for high uptime and performance. Payments are made monthly in cryptocurrency.",
  },
  {
    id: "6",
    question: "What security measures are in place?",
    answer: "We implement multiple security layers including encryption, secure authentication, firewall protection, and regular security audits. All data is encrypted in transit and at rest.",
  },
  {
    id: "7",
    question: "Can I run multiple nodes?",
    answer: "Yes, you can run multiple nodes from different machines. Each node needs its own unique identifier and configuration. Make sure each node meets the minimum system requirements.",
  },
  {
    id: "8",
    question: "How do I troubleshoot common issues?",
    answer: "Check the node logs for error messages, verify network connectivity, and ensure system resources aren't exhausted. Our troubleshooting guide provides step-by-step solutions for common issues.",
  },
];

export function FaqSection() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search FAQs..." className="pl-8" />
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
} 