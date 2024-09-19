"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import axios from "axios";
import { host } from "@/lib/host";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "@radix-ui/react-icons";
import { ru } from "date-fns/locale";

export default function RegisterForm() {
  const { toast } = useToast();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (
      !formData.get("name") ||
      !formData.get("email") ||
      !formData.get("password") ||
      !formData.get("repeatpassword") ||
      !formData.get("aboutme") ||
      !formData.get("phone")
    ) {
      toast({
        title: "Ошибка регистрации",
        description: "Пожалуйста, заполните все поля.",
      });
      return;
    }

    if (formData.get("password") !== formData.get("repeatpassword")) {
      toast({
        title: "Ошибка регистрации",
        description: "Пароли не совпадают.",
      });
      return;
    }

    const age: number = parseInt(formData.get("age") as string); 

    console.log(age);

    if (age < 16) {
      toast({
        title: "Ошибка регистрации",
        description: "Вам должно быть больше 16 лет.",
      });
      return;
    }

    try {
      const response = axios.post(
        `${host}/api/signup`,
        {
          userName: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
          repeatPassword: formData.get("repeatpassword"),
          about: formData.get("aboutme"),
          phoneNumber: formData.get("phone"),
          age: age,
        }
      );
      console.log(response);
      if ((await response).status === 201) {
        toast({
          title: "Регистрация прошла успешно",
          description: "Теперь вы можете войти на сайт.",
        })
      } else {}
    } catch (error) {
      toast({

      })
      console.error(error);
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col w-full gap-1">
          <p className="text-md font-semibold">Ваше имя</p>
          <Input
            className="w-full my-1"
            placeholder="Ваше имя"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-md font-semibold">Почта</p>
          <Input
            className="w-full my-1"
            placeholder="Почта"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-md font-semibold">Пароль</p>
          <Input
            className="w-full my-1"
            placeholder="Пароль"
            type="password"
            name="password"
          />
          <Input
            className="w-full my-1"
            placeholder="Повторите пароль"
            type="password"
            name="repeatpassword"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-md font-semibold">Возраст</p>
          <Input
            className="w-full my-1"
            placeholder="Сколько вам лет"
            type="text"
            name="age"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-md font-semibold">Расскажите о себе</p>
          <Input
            className="w-full my-1"
            placeholder="Эко-активист из Москвы..."
            type="text"
            name="aboutme"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-md font-semibold">Номер телефона</p>
          <Input
            className="w-full my-1"
            placeholder="Номер телефона"
            type="text"
            name="phone"
          />
        </div>
      </div>
      <Button className="w-full my-1">Войти</Button>
    </form>
  );
}

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
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
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, "PPP", { locale: ru })
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          locale={ru}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
