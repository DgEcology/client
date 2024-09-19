import EditForm from "./editform";
import OrganizerForm from "./organizerform";

export default async function Me() {
  return (
    <main className="z-10 box-border flex">
      <div className="max-w-[900px] w-full p-4 mt-[80px] mx-auto">
        <OrganizerForm />
        <EditForm />
      </div>
    </main>
  );
}
