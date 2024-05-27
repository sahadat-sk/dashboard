import { Chart } from "@/components/chart";
import { ProfileSetup } from "@/components/profilesetup";
import { Button } from "@/components/ui/button";
import { Edit, Eye } from "lucide-react";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center w-full h-20 bg-secondary rounded-lg border flex items-center justify-between px-8">
        <div className="flex gap-2 text-xl">
          <p className="text-black/60">
            Your profile is live at{" "}
            <span className="text-black font-semibold underline">
              yournexthire.ai/kushagra
            </span>
          </p>
          <button className="flex items-center gap-1">
            <Edit /> <p className="text-sm underline">Edit</p>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1">
            <Eye />
            <p className="underline semibold">Preview</p>
          </button>
          <Button className="px-8 ">Go Live</Button>
        </div>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg   "
        x-chunk="dashboard-02-chunk-1"
      >
        <ProfileSetup />
      </div>

      <div className="w-full flex-1 flex gap-4">
        <div className=" bg-secondary"></div>
        <div className=" bg-secondary">
          <Chart />
        </div>
      </div>
    </>
  );
}
