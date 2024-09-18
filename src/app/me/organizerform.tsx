import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const OrganizerApplication = dynamic(() => import("./organizerform"));

export default async function OrganizerForm() {
  const isOrganizer = false;
  return (
    <div className="flex flex-col w-full gap-2">
      <p className="text-lg font-semibold">Организатор</p>
      {isOrganizer ? (
        <Button className="w-full">Перейти к организации</Button>
      ) : (
        <OrganizerApplication />
      )}
    </div>
  );
}
