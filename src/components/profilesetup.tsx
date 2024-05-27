"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const CustomAccordianItem = ({
  itemNumber,
  headingContent,
  desc,
  step,
  setStep,
}: any) => {
  let paddingValue = "py-4",
    colorValue = "bg-white text-black";

  if (step?.num >= itemNumber) {
    colorValue = "bg-primary text-white";
  }

  if (itemNumber == 1) {
    paddingValue = "pt-1 pb-4 rounded-t-full";
  }
  if (itemNumber == 4) {
    paddingValue = "pt-4 pb-1 rounded-b-full";
  }

  return (
    <AccordionItem
      value={`item-${itemNumber}`}
      className="flex gap-2 "
      onClick={() => {
        setStep({ num: itemNumber, desc: desc });
      }}
    >
      <div className={cn("bg-secondary w-8 flex px-1", paddingValue)}>
        <div
          className={cn(
            "rounded-full p-3 h-3 w-3  flex items-center justify-center",
            colorValue
          )}
        >
          <span className="text-sm">{itemNumber}</span>
        </div>
      </div>
      <div className="w-64 pl-4">
        <AccordionTrigger className={cn("items-start text-sm", paddingValue)}>
          {headingContent}
        </AccordionTrigger>
        <AccordionContent className="text-sm">{desc}</AccordionContent>
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
          headingContent={"Basic Details"}
          desc={"Add Public Profile Photo"}
          step={step}
          setStep={setStep}
        />
        <CustomAccordianItem
          itemNumber={2}
          headingContent={"Add Experience"}
          desc={"Describe your experiences"}
          step={step}
          setStep={setStep}
        />
        <CustomAccordianItem
          itemNumber={3}
          headingContent={"Schedule Setup"}
          desc={"Schedule your setup"}
          step={step}
          setStep={setStep}
        />

        <CustomAccordianItem
          itemNumber={4}
          headingContent={"Publish Your Profile"}
          desc={"publish profile"}
          step={step}
          setStep={setStep}
        />
      </Accordion>
      <div className="bg-muted/60 rounded-md w-[60%] border h-64 flex items-center justify-center flex-col gap-4">
        <h3 className="text-md font-semibold">
          Step {step.num}: {step.desc}
        </h3>
        <div className="flex gap-2">
          {Array(5)
            .fill(0)
            .map((item, index) => {
              return (
                <Image
                  src={"https://xsgames.co/randomusers/avatar.php?g=male"}
                  alt={"profile pic"}
                  key={index}
                  height={80}
                  width={80}
                  className="rounded-md"
                />
              );
            })}
        </div>
        <p className="text-xs">Customize your public profile</p>
        <Button className="px-8">Complete Profile</Button>
      </div>
    </div>
  );
}
