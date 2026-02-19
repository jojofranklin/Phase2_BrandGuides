"use client";

import { useState, useEffect } from "react";
import { PageHeader } from "@/components/page-header";
import { UIDemo } from "@/components/ui-demo";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function DataDisplayPage() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <PageHeader
        title="_Data Display"
        description="Badge, avatar, progress, and separator components for presenting information."
        status="ready"
      />

      <div className="space-y-12">
        <UIDemo title="Badge Variants">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </UIDemo>

        <UIDemo title="Badge in Context">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Status:</span>
            <Badge>Active</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Version:</span>
            <Badge variant="outline">v2.4.1</Badge>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Priority:</span>
            <Badge variant="destructive">Critical</Badge>
          </div>
        </UIDemo>

        <UIDemo title="Avatar">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JF</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>P2</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
        </UIDemo>

        <UIDemo title="Avatar Sizes">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-14 w-14">
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
        </UIDemo>

        <UIDemo title="Progress" className="flex-col items-stretch">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Loading...</span>
                <span className="text-xs text-muted-foreground font-mono">{progress}%</span>
              </div>
              <Progress value={progress} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Upload complete</span>
                <span className="text-xs text-muted-foreground font-mono">100%</span>
              </div>
              <Progress value={100} />
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Starting...</span>
                <span className="text-xs text-muted-foreground font-mono">0%</span>
              </div>
              <Progress value={0} />
            </div>
          </div>
        </UIDemo>

        <UIDemo title="Separator" className="flex-col items-stretch">
          <div>
            <div className="space-y-1">
              <h4 className="text-sm font-medium text-foreground">Phase2_ UI Library</h4>
              <p className="text-xs text-muted-foreground">
                Themed shadcn/ui components for internal apps.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center gap-4 text-sm">
              <span className="text-foreground">Docs</span>
              <Separator orientation="vertical" />
              <span className="text-foreground">Components</span>
              <Separator orientation="vertical" />
              <span className="text-foreground">Theme</span>
            </div>
          </div>
        </UIDemo>
      </div>
    </div>
  );
}
