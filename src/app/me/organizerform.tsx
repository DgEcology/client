import { Button } from "@/components/ui/button";

export default async function OrganizerForm() {
  return (
    <div className="flex flex-col w-full gap-2">
      <p className="text-lg font-semibold">Организатор</p>
      <Button className="w-full">Перейти к организации</Button>
    </div>
  );
}
