"use client";

import { PageHeader } from "@/components/page-header";
import { UIDemo } from "@/components/ui-demo";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Loader2, Mail, Plus } from "lucide-react";

export default function ButtonsPage() {
  return (
    <div>
      <PageHeader
        title="_Buttons"
        description="Button variants, sizes, states, and icon combinations. All themed with Phase2_ tokens."
        status="ready"
      />

      <div className="space-y-12">
        <UIDemo title="Variants">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </UIDemo>

        <UIDemo title="Sizes">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </UIDemo>

        <UIDemo title="With Icons">
          <Button>
            <Mail />
            Login with Email
          </Button>
          <Button variant="secondary">
            <Download />
            Download
          </Button>
          <Button variant="outline">
            <Plus />
            Create New
          </Button>
          <Button>
            Next Step
            <ArrowRight />
          </Button>
        </UIDemo>

        <UIDemo title="Icon Only">
          <Button variant="outline" size="icon">
            <Plus />
          </Button>
          <Button variant="outline" size="icon-sm">
            <Mail />
          </Button>
          <Button variant="ghost" size="icon">
            <Download />
          </Button>
        </UIDemo>

        <UIDemo title="States">
          <Button disabled>Disabled</Button>
          <Button variant="secondary" disabled>
            Disabled
          </Button>
          <Button variant="outline" disabled>
            Disabled
          </Button>
          <Button disabled>
            <Loader2 className="animate-spin" />
            Loading...
          </Button>
        </UIDemo>

        <UIDemo title="Combinations">
          <div className="flex gap-2">
            <Button>Save Changes</Button>
            <Button variant="outline">Cancel</Button>
          </div>
          <div className="flex gap-2">
            <Button variant="destructive">Delete</Button>
            <Button variant="ghost">Cancel</Button>
          </div>
        </UIDemo>
      </div>
    </div>
  );
}
