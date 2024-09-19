"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";
import { useToast } from "@/hooks/use-toast";

export default function RegisterForm() {
  const { toast } = useToast();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Check if all fields are filled and not empty. If not, return an error.
    if (
      !formData.get("name") ||
      !formData.get("login") ||
      !formData.get("password") ||
      !formData.get("aboutme") ||
      !formData.get("phone")
    ) {
      toast({
        title: "Ошибка регистрации",
        description: "Пожалуйста, заполните все поля.",
      });
      return;
    }

    // TODO: Registration.
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        className="w-full my-1"
        placeholder="Ваше имя"
        type="text"
        name="name"
      />
      <Input
        className="w-full my-1"
        placeholder="Почта"
        type="email"
        name="login"
      />
      <Input
        className="w-full my-1"
        placeholder="Пароль"
        type="password"
        name="password"
      />
      <Input
        className="w-full my-1"
        placeholder="Расскажите о себе"
        type="text"
        name="aboutme"
      />
      <Input
        className="w-full my-1"
        placeholder="Номер телефона"
        type="text"
        name="phone"
      />
      <Button className="w-full my-1">Войти</Button>
    </form>
  );
}
