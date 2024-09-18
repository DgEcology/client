import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";

const OrganizerApplication = dynamic(() => import("./organizerapplication"));

export default async function OrganizerForm() {
  const isOrganizer = false;
  return (
    <div className="mb-4 flex flex-col">
      <p className="text-2xl font-bold mb-2">Организатор</p>
      {isOrganizer ? (
        <Button className="w-full">Перейти к организации</Button>
      ) : (
        <OrganizerApplication />
      )}
    </div>
  );
}
