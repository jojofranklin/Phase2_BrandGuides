import { PageHeader } from "@/components/page-header";
import { UIDemo } from "@/components/ui-demo";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CardsPage() {
  return (
    <div>
      <PageHeader
        title="_Cards"
        description="Card component patterns — content containers with headers, footers, and composable layouts."
        status="ready"
      />

      <div className="space-y-12">
        <UIDemo title="Basic Card" className="items-start">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>
                A brief description of what this card contains.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Card content goes here. This is a basic card with header,
                content, and footer sections.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Action</Button>
            </CardFooter>
          </Card>
        </UIDemo>

        <UIDemo title="Card with Form" className="items-start">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>Create Project</CardTitle>
              <CardDescription>
                Deploy your new project in one click.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="My Project" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">URL</Label>
                <Input id="url" placeholder="https://example.com" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button>Deploy</Button>
            </CardFooter>
          </Card>
        </UIDemo>

        <UIDemo title="Stat Cards" className="items-stretch">
          {[
            { label: "Total Revenue", value: "$45,231", change: "+20.1%" },
            { label: "Active Users", value: "2,350", change: "+12.5%" },
            { label: "Projects", value: "47", change: "+3" },
          ].map((stat) => (
            <Card key={stat.label} className="flex-1 min-w-[160px]">
              <CardHeader className="pb-2">
                <CardDescription>{stat.label}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-heading text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-pine mt-1">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </UIDemo>

        <UIDemo title="Card with Badge" className="items-start">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>AI Integration</CardTitle>
                <Badge>Active</Badge>
              </div>
              <CardDescription>
                Enterprise-grade AI automation pipeline.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Processing 12,400 requests/day with 99.9% uptime.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button variant="outline" size="sm">
                Configure
              </Button>
              <Button size="sm">View Dashboard</Button>
            </CardFooter>
          </Card>
        </UIDemo>
      </div>
    </div>
  );
}
