"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "./ui/button";

const CustomAccordianItem = ({ itemNumber, headingContent, desc }: any) => {
  return (
    <AccordionItem value={`item-${itemNumber}`} className="flex gap-2 ">
      <div className="bg-secondary w-6 flex py-4">
        <div className="text-white rounded-full p-3 h-4 w-4 bg-black flex items-center justify-center">
          <span>{itemNumber}</span>
        </div>
      </div>
      <div className="w-64">
        <AccordionTrigger className="items-start py-4">
          {headingContent}
        </AccordionTrigger>
        <AccordionContent>{desc}</AccordionContent>
      </div>
    </AccordionItem>
  );
};

export function ProfileSetup() {
  const [step, setStep] = useState({ num: 1, desc: "Add Basic Details" });
  return (
    <div className="flex gap-4 w-full justify-between">
      <Accordion type="single" collapsible className="w-[40%]">
        <CustomAccordianItem
          itemNumber={1}
          headingContent={"Is is accessible?"}
          desc={"Yes. It adheres to the WAI-ARIA design pattern."}
        />
        <CustomAccordianItem
          itemNumber={2}
          headingContent={"Is it styled?"}
          desc={" Yes "}
        />
        <CustomAccordianItem
          itemNumber={3}
          headingContent={"Content 3"}
          desc={"NO"}
        />

        {/* <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>
      <div className="bg-muted/60 rounded-md w-[60%] border h-64 flex items-center justify-center flex-col gap-4">
        <h3>
          Step {step.num}: {step.desc}
        </h3>
        <div>Hello this is descripnt</div>
        <Button>Complete Profile</Button>
      </div>
    </div>
  );
}
