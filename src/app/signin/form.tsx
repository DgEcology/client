"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { FormEvent } from "react";

export default function LoginForm() {
  const { toast } = useToast();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Check if all fields are filled and not empty. If not, return an error.
    if (!formData.get("login") || !formData.get("password")) {
      toast({
        title: "Ошибка входа",
        description: "Пожалуйста, заполните все поля.",
      });
      return;
    }

    // TODO: Authentication.
  }

  return (
    <form onSubmit={onSubmit}>
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
      <Button className="w-full my-1">Войти</Button>
    </form>
  );
}
