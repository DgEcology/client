"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { host } from "@/lib/host";
import axios from "axios";
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

    try {
      const response = axios.post(
        `${host}/api/login`,
        {
          email: formData.get("login"),
          password: formData.get("password"),
        },
        { withCredentials: true }
      );
      console.log(response);
      if ((await response).status === 200) {
        navigate.push("/");
      }
    } catch (error) {
      toast({
        title: "Ошибка входа",
        description: "Неправильная почта или пароль.",
      });
      console.error(error);
    }
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
