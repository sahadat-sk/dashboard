import { Chart } from "@/components/chart";
import { ProfileSetup } from "@/components/profilesetup";

export default function Dashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
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
