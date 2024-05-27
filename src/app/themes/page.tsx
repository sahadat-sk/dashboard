"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const solidColors = ["#FF5733", "#33FF57", "#3357FF"];

const linearGradients = [
  "linear-gradient(to right, #fc466b, #3f5efb)",
  "linear-gradient(to right, #159957, #155799)",
  "linear-gradient(to right, #0575e6, #021b79)",
];

const radialGradients = [
  "radial-gradient(#e66465, #9198e5)",
  "radial-gradient( #0575e6, #021b79)",
];

const ColorPalette = ({
  name,
  colors,
  setSelectedColor,
}: {
  name: string;
  colors: string[];
  setSelectedColor: any;
}) => {
  return (
    <div>
      <p className="pb-2">{name}</p>
      <div className="flex gap-2">
        {colors?.map((color, index) => {
          console.log(color);
          return (
            <div
              className="h-12 w-12 border rounded-sm"
              key={index}
              style={{ background: color }}
              onClick={() => {
                setSelectedColor(color);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default function ThemesPage() {
  const [selectedColor, setSelectedColor] = useState(solidColors[0]);
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-8">
      <div className="flex flex-col gap-4">
        <ColorPalette
          name="Solids"
          colors={solidColors}
          setSelectedColor={setSelectedColor}
        />
        <ColorPalette
          name="Linear Gradients"
          colors={linearGradients}
          setSelectedColor={setSelectedColor}
        />
        <ColorPalette
          name="Radial Gradients"
          colors={radialGradients}
          setSelectedColor={setSelectedColor}
        />
      </div>
      <div
        className="lg:w-[40vw] lg:h-[80vh] w-screen h-screen rounded-md transition relative border "
        style={{ background: selectedColor }}
      >
        <div className="absolute overflow-hidden top-12 right-0 bottom-0 left-12 bg-white rounded-ss-xl px-12 py-6">
          <div className="relative h-32 w-full bg-accent mb-24 -ml-8">
            <div className="absolute bg-destructive top-0 left-0 bottom-0 -right-32 rounded-xl"></div>
            <div className="w-32 h-32 rounded-full absolute top-16 left-6 bg-black"></div>
          </div>
          <h2 className="scroll-m-20  text-2xl lg:text-4xl font-bold tracking-tight  ">
            Mason Parker
          </h2>
          <p className="scroll-m-20  pb-2 text-lg lg:text-xl font-semibold text-muted-foreground tracking-tight first:mt-0">
            Graphics & UI/UX Designer
          </p>
          <p className="scroll-m-20  pb-2 text-lg lg:text-xl font-semibold text-muted-foreground tracking-tight first:mt-0">
            Denver, United States
          </p>

          <div>
            <p className="p-4 border-dashed border-2 text-muted-foreground text-sm lg:text-md">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
              error distinctio libero soluta nobis voluptatum, atque molestias
              eius velit praesentium iste vel dignissimos laudantium minima,
              numquam nisi deleniti modi ab?
            </p>
            <p className="ml-4 text-muted-foreground font-bold">biography</p>
          </div>
        </div>
      </div>
    </div>
  );
}
