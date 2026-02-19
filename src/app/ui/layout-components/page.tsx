"use client";

import { PageHeader } from "@/components/page-header";
import { UIDemo } from "@/components/ui-demo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function LayoutComponentsPage() {
  return (
    <div>
      <PageHeader
        title="_Layout"
        description="Tabs, accordion, and separator for organizing and structuring content."
        status="ready"
      />

      <div className="space-y-12">
        <UIDemo title="Tabs" className="flex-col items-stretch">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Welcome to the project overview. Here you can see a summary
                    of your project&apos;s current state.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="analytics">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    View usage metrics, performance data, and trend analysis for
                    your project.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Settings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Configure project settings, team access, and notification
                    preferences.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </UIDemo>

        <UIDemo title="Accordion" className="flex-col items-stretch">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Phase2_?</AccordionTrigger>
              <AccordionContent>
                Phase2 is a software engineering and AI consultancy that designs
                and builds tailored software and systems to solve complex
                enterprise problems with clarity, care and reliability.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I install the theme?</AccordionTrigger>
              <AccordionContent>
                Copy the CSS variables from the Theme page into your
                globals.css file. Then run{" "}
                <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">
                  npx shadcn@latest init
                </code>{" "}
                and add the components you need.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Does it support dark mode?</AccordionTrigger>
              <AccordionContent>
                Yes. The theme includes a complete dark mode token set. Toggle by
                adding the <code className="text-xs bg-secondary px-1.5 py-0.5 rounded">dark</code> class
                to your HTML element.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Can I customize the components?</AccordionTrigger>
              <AccordionContent>
                Absolutely. shadcn/ui components are copied into your project —
                they&apos;re your code. Modify them however you need.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </UIDemo>

        <UIDemo title="Accordion — Multiple Open" className="flex-col items-stretch">
          <Accordion type="multiple" className="w-full">
            <AccordionItem value="capabilities">
              <AccordionTrigger>AI Integration & Automation</AccordionTrigger>
              <AccordionContent>
                Expertise in AI integration, automation and enterprise systems.
                Human-centered design built into the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="development">
              <AccordionTrigger>Enterprise Software Development</AccordionTrigger>
              <AccordionContent>
                Cross-functional teams that flex to project needs. Direct access
                to senior talent throughout the engagement.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="consulting">
              <AccordionTrigger>Strategic Technology Consulting</AccordionTrigger>
              <AccordionContent>
                Proven process for uncovering root problems and defining success.
                Long-term relationships with clients who stay for years.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </UIDemo>

        <UIDemo title="Separator" className="flex-col items-stretch">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-foreground">Section A</h4>
              <p className="text-xs text-muted-foreground">Content above the separator.</p>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-medium text-foreground">Section B</h4>
              <p className="text-xs text-muted-foreground">Content below the separator.</p>
            </div>
          </div>
        </UIDemo>

        <UIDemo title="Separator — Vertical">
          <div className="flex h-5 items-center gap-4 text-sm">
            <span>Phase2_</span>
            <Separator orientation="vertical" />
            <span>UI Library</span>
            <Separator orientation="vertical" />
            <span>v1.0</span>
          </div>
        </UIDemo>
      </div>
    </div>
  );
}
