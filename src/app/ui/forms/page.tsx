"use client";

import { useState } from "react";
import { PageHeader } from "@/components/page-header";
import { UIDemo } from "@/components/ui-demo";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FormsPage() {
  const [sliderValue, setSliderValue] = useState([50]);

  return (
    <div>
      <PageHeader
        title="_Forms"
        description="Form controls — inputs, selects, checkboxes, radios, switches, and sliders. All Phase2_ themed."
        status="ready"
      />

      <div className="space-y-12">
        <UIDemo title="Text Inputs" className="flex-col items-stretch">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="jojo@phase2.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Enter password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <Input id="search" type="search" placeholder="Search components..." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="disabled">Disabled</Label>
              <Input id="disabled" disabled placeholder="Can't touch this" />
            </div>
          </div>
        </UIDemo>

        <UIDemo title="Textarea" className="flex-col items-stretch">
          <div className="space-y-2 max-w-md">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us what you're building..."
              rows={4}
            />
          </div>
        </UIDemo>

        <UIDemo title="Select" className="flex-col items-stretch">
          <div className="space-y-2 max-w-xs">
            <Label>Framework</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a framework" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="next">Next.js</SelectItem>
                <SelectItem value="remix">Remix</SelectItem>
                <SelectItem value="astro">Astro</SelectItem>
                <SelectItem value="vite">Vite</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </UIDemo>

        <UIDemo title="Checkbox" className="flex-col items-start">
          <div className="space-y-3">
            {["AI Integration", "Enterprise Software", "Strategic Consulting"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3">
                  <Checkbox id={item.toLowerCase().replace(/\s+/g, "-")} />
                  <Label
                    htmlFor={item.toLowerCase().replace(/\s+/g, "-")}
                    className="text-sm font-normal"
                  >
                    {item}
                  </Label>
                </div>
              )
            )}
          </div>
        </UIDemo>

        <UIDemo title="Radio Group" className="flex-col items-start">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className="font-normal">Default</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2" className="font-normal">Comfortable</Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3" className="font-normal">Compact</Label>
            </div>
          </RadioGroup>
        </UIDemo>

        <UIDemo title="Switch">
          <div className="flex items-center gap-3">
            <Switch id="dark-mode" />
            <Label htmlFor="dark-mode">Dark mode</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">Notifications</Label>
          </div>
        </UIDemo>

        <UIDemo title="Slider" className="flex-col items-stretch">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center justify-between">
              <Label>Volume</Label>
              <span className="text-xs text-muted-foreground font-mono">
                {sliderValue[0]}%
              </span>
            </div>
            <Slider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={100}
              step={1}
            />
          </div>
        </UIDemo>
      </div>
    </div>
  );
}
