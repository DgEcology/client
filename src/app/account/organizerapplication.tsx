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
import { useToast } from "@/hooks/use-toast";
import { FormEvent, useState } from "react";

export default function OrganizerApplication() {
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (!formData.get("organization") || !formData.get("serial")) {
      toast({
        title: "Ошибка подачи заявки",
        description: "Пожалуйста, заполните все поля.",
      });
      return;
    }

    setOpen(false);

    toast({
      title: "Заявка подана",
      description: "Ваша заявка была успешно подана. Ожидайте ответа на почте.",
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full">Подать заявку</Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={onSubmit}>
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
              <p className="text-xl font-bold">Номер организации (ИНН)</p>
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
        </form>
      </DialogContent>
    </Dialog>
  );
}
