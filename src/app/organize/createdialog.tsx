"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addDays } from "date-fns";
import { FormEvent, useState } from "react";
import { DateRange } from "react-day-picker";
import { FaArrowRight } from "react-icons/fa6";
import { TimePicker } from "@/components/ui/time-picker";
import { DatePicker } from "@/components/datepicker";
import { useToast } from "@/hooks/use-toast";

export default function CreateDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Создать событие</Button>
      <DialogWindow open={open} onOpenChange={setOpen} />
    </div>
  );
}

interface DialogWindowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DialogWindow({ open, onOpenChange }: DialogWindowProps) {
  // Здесь храниться дата проведения события.
  // Ее нужно использовать когда отправляется запрос на создание события.
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2024, 7, 20),
    to: addDays(new Date(2024, 7, 20), 20),
  });
  const { toast } = useToast();
  const [startTime, setStartTime] = useState<Date | undefined>();
  const [endTime, setEndTime] = useState<Date | undefined>();
  const [file, setFile] = useState<File | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let startTimestamp = date?.from;
    startTimestamp?.setHours(
      startTime?.getHours() || 0,
      startTime?.getMinutes() || 0,
      startTime?.getSeconds() || 0
    );

    let endTimestamp = date?.to;
    endTimestamp?.setHours(
      endTime?.getHours() || 0,
      endTime?.getMinutes() || 0,
      endTime?.getSeconds() || 0
    );

    // Check if all fields are filled and not empty. If not, return an error.
    if (!startTimestamp || !endTimestamp) {
      toast({
        title: "Ошибка создания события",
        description: "Пожалуйста, заполните все поля.",
      });
      return;
    }

    if (!file) {
      toast({
        title: "Ошибка создания события",
        description: "Пожалуйста, добавьте изображение.",
      });
      return;
    }

  }

  return (
    <form onSubmit={onSubmit}>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Создать Событие</DialogTitle>
            <DialogDescription>
              Укажите всю информацию о событии
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Название</p>
              <Input placeholder="Название события" type="text" name="name" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Описание</p>
              <Input
                placeholder="Что вы будете там делать?"
                type="text"
                name="description"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Место проведения</p>
              <Input
                placeholder="Улица, район, дом"
                type="text"
                name="location"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Баннер события</p>
              <div className="flex flex-row gap-2 w-full">
                <Input
                  type="file"
                  className="cursor-pointer"
                  placeholder="Выберите изображение"
                  accept="images/*"
                  onChange={(e) => setFile(e.target.files?.[0]!)}
                />
                <Button
                  variant="destructive"
                  onClick={() => setFile(null)}
                >
                  Удалить
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Дата проведения</p>
              <DatePicker date={date} setDate={setDate} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-xl font-bold">Время проведения (от/до)</p>
              <div className="flex flex-row gap-2 items-center">
                <TimePicker date={startTime} setDate={setStartTime} />
                <FaArrowRight />
                <TimePicker date={endTime} setDate={setEndTime} />
              </div>
            </div>
          </div>

          <DialogFooter className="flex flex-row gap-2">
            <Button type="submit">Опубликовать</Button>
            <Button onClick={() => onOpenChange(false)}>Отмена</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </form>
  );
}
