import EventsList from "./eventslist";
import CreateDialog from "./createdialog";

export default async function Organizer() {
  return (
    <main className="p-4 flex flex-col gap-2 w-full">
      <div className="flex flex-col items-start">
        <p className="text-2xl font-bold">Организатор</p>
        <p className="text-lg">Здесь вы сможете управлять своими событиями</p>
      </div>

      <CreateDialog />

      <EventsList />
    </main>
  );
}
