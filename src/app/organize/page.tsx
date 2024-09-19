import EventsList from "./eventslist";
import CreateDialog from "./createdialog";
import Header from "@/components/header/header";

export default async function Organizer() {
  return (
    <main className="z-10 box-border flex">
      <Header />
      <div className="max-w-[900px] w-full p-4 mt-[80px] mx-auto">
        <div className="flex flex-col items-start">
          <p className="text-2xl font-bold">Организатор</p>
          <p className="text-lg">Здесь вы сможете управлять своими событиями</p>
        </div>
        <CreateDialog />
        <EventsList />
      </div>
    </main>
  );
}
