"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

export default function RegisterForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    // Check if all fields are filled and not empty. If not, return an error.
    if (!formData.get("name") || !formData.get("login") || !formData.get("password") || !formData.get("aboutme") || !formData.get("phone")) {
      console.log("Please fill in all fields.");
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
