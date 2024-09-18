"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormEvent } from "react";

export default function LoginForm() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
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
