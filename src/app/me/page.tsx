import dynamic from "next/dynamic";
import EditForm from "./editform";

const OrganizerForm = dynamic(() => import("./organizerform"));

export default async function Me() {
  const isOrganizer = false;
  return (
    <main>
      <div className="w-full h-16">
        {isOrganizer && <OrganizerForm />}
        <EditForm />
      </div>
    </main>
  );
}
