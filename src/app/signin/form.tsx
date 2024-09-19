"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { auth } from "@/lib/auth";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function LoginForm() {
  const { toast } = useToast();
  const navigate = useRouter();
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    if (!formData.get("login") || !formData.get("password")) {
      toast({
        title: "Ошибка входа",
        description: "Пожалуйста, заполните все поля.",
      });
      return;
    }

    const response = await auth(
      formData.get("login") as string,
      formData.get("password") as string
    );
    if (response) {
      navigate.push("/");
    } else {
      toast({
        title: "Ошибка входа",
        description: "Неправильная почта или пароль.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Input
        className="w-full my-1"
        placeholder="Почта"
        type="text"
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
