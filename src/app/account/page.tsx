import { cookies } from "next/headers";
import EditForm from "./editform";
import OrganizerForm from "./organizerform";
import { redirect } from "next/navigation";

export default async function Account() {
  const cookieStore = cookies();

  const cookie = cookieStore.has("SESSION");
  if (!cookie) {
    redirect("/signin");
  }

  return (
    <main className="z-10 box-border flex">
      <div className="max-w-[900px] w-full p-4 mx-auto">
        <OrganizerForm />
        <EditForm />
      </div>
    </main>
  );
}
