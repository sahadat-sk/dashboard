import { Chart } from "@/components/chart";
import { ProfileSetup } from "@/components/profilesetup";
import { Button } from "@/components/ui/button";
import { Edit, Eye } from "lucide-react";
import Image from "next/image";
const profiles = [
  { name: "Collen Ballesteos", link: "www.yournexthire.ai/profile" },
  { name: "Muhammad Adil", link: "www.yournexthire.ai/profile" },
  { name: "Saptarshi Prakash", link: "www.yournexthire.ai/profile" },
];

const Stat = ({ text, val }: { text: string; val: string }) => {
  return (
    <div>
      <p className="text-xs ">{text}</p>
      <p className="text-lg font-bold">{val}</p>
    </div>
  );
};

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

      <div className="flex gap-4">
        <div className="flex-1">
          <p className="text-semibold pb-2">
            Check out some most viewed YourNextHire Pages
          </p>
          <div className="bg-muted/60 border rounded-md py-2 px-4">
            {profiles.map((profile, index) => {
              return (
                <div key={index} className="flex justify-between  py-2">
                  <div className="flex gap-4 items-center">
                    <Image
                      src={"https://xsgames.co/randomusers/avatar.php?g=male"}
                      alt="profile"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div>
                      <p>{profile.name}</p>
                      <p className="text-xs underline text-black/60">
                        {profile.link}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-black/60">5.6k views</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex-1">
          <p className="pb-2">Activity</p>

          <div className="bg-muted/60 border rounded-md py-4 px-6">
            <p>Recent activity on your page</p>
            <div className="flex justify-between">
              <div className="h-44 w-64">
                <Chart />
              </div>
              <div className="flex flex-col gap-4 justify-center">
                <Stat text="Page views this week" val="124" />
                <Stat text="Page views this week" val="124" />
              </div>
            </div>
            <div className="flex gap-2 justify-between">
              <Stat text="Page views this week" val="124" />
              <Stat text="Page views this week" val="124" />
              <Stat text="Page views this week" val="124" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
