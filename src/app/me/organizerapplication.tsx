"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { FormEvent, useState } from "react";

export default function OrganizerApplication() {
  const [file, setFile] = useState<File | undefined>();
  const [open, setOpen] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: Create application on website
  }

  return (
    <form onSubmit={onSubmit}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="w-full">Подать заявку</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Подача заявки</DialogTitle>
            <DialogDescription>
              Заполните форму для подачи заявки на становление организатором.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Название организации</p>
              <Input placeholder="1234" type="text" name="organization" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Номер организации (ОГРН)</p>
              <Input placeholder="1234" type="text" name="serial" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Об организации</p>
              <Input placeholder="1234" type="text" name="about" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Отправить</Button>
            <DialogClose asChild>
              <Button type="button">Закрыть</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}
