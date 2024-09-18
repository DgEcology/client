"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ru } from "date-fns/locale";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";
import { FormEvent, useState } from "react";
import { DateRange } from "react-day-picker";
import { FaCalendar } from "react-icons/fa6";

export default function CreateDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button>Создать событие</Button>
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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

		// TODO: Create event
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
              <p className="text-xl font-bold">Время проведения</p>
              <DatePicker date={date} setDate={setDate} />
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

interface DatePickerProps {
  date: DateRange | undefined;
  setDate: (date: DateRange | undefined) => void;
}

export function DatePicker({ date, setDate }: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <FaCalendar className="mr-2 h-4 w-4" />
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, "LLL dd, y", { locale: ru })} -{" "}
                {format(date.to, "LLL dd, y", { locale: ru })}
              </>
            ) : (
              format(date.from, "LLL dd, y", { locale: ru })
            )
          ) : (
            <span>Выберите время</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="range"
          defaultMonth={date?.from}
					locale={ru}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </PopoverContent>
    </Popover>
  );
}
