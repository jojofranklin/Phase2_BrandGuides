"use client";

import { PageHeader } from "@/components/page-header";
import { UIDemo } from "@/components/ui-demo";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Info, Terminal } from "lucide-react";

export default function FeedbackPage() {
  return (
    <div>
      <PageHeader
        title="_Feedback"
        description="Alert, dialog, and tooltip components for communicating status and actions."
        status="ready"
      />

      <div className="space-y-12">
        <UIDemo title="Alert — Default" className="flex-col items-stretch">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the CLI.
            </AlertDescription>
          </Alert>
        </UIDemo>

        <UIDemo title="Alert — Info" className="flex-col items-stretch">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>Phase2_ Theme Applied</AlertTitle>
            <AlertDescription>
              All components are using your brand tokens. Toggle dark mode to see
              both variants.
            </AlertDescription>
          </Alert>
        </UIDemo>

        <UIDemo title="Alert — Destructive" className="flex-col items-stretch">
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Your session has expired. Please log in again.
            </AlertDescription>
          </Alert>
        </UIDemo>

        <UIDemo title="Dialog">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&apos;re
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dialog-name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="dialog-name"
                    defaultValue="JoJo Franklin"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="dialog-role" className="text-right">
                    Role
                  </Label>
                  <Input
                    id="dialog-role"
                    defaultValue="Creative Director"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button>Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="destructive">Delete Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Are you sure?</DialogTitle>
                <DialogDescription>
                  This action cannot be undone. This will permanently delete the
                  project and all associated data.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="outline">Cancel</Button>
                <Button variant="destructive">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </UIDemo>

        <UIDemo title="Tooltip">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Hover me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>More information</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </UIDemo>
      </div>
    </div>
  );
}
