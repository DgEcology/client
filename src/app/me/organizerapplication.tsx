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

export default function OrganizerApplication() {
  return (
    <Dialog>
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
        <div>
          

        </div>
        <DialogFooter>
          <Button type="submit">Отправить</Button>
          <DialogClose asChild>
            <Button type="button">Закрыть</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
