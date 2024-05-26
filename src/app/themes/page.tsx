"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "linear-gradient(#e66465, #9198e5)",
  "radial-gradient(#e66465, #9198e5)",
];

export default function ThemesPage() {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  return (
    <div className="flex justify-between">
      <div>
        {colors.map((color, index) => {
          console.log(color);
          return (
            <div
              className={cn("h-6 w-6")}
              key={index}
              style={{ background: color }}
              onClick={() => {
                setSelectedColor(color);
              }}
            ></div>
          );
        })}
      </div>
      <div
        className="w-[40vw] h-[80vh] rounded-md transition relative border "
        style={{ background: selectedColor }}
      >
        <div className="absolute top-12 right-0 bottom-0 left-12 bg-white rounded-ss-xl"></div>
      </div>
    </div>
  );
}
