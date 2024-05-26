import { Chart } from "@/components/chart";
import { ProfileSetup } from "@/components/profilesetup";
import { Button } from "@/components/ui/button";
import { SideNav } from "@/components/ui/navbar";
import { NavBarMobile } from "@/components/ui/navbarMobile";

export default function Dashboard() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <SideNav />
      <div className="flex flex-col">
        <NavBarMobile />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
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
        </main>
      </div>
    </div>
  );
}
