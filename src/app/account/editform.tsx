"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function EditForm() {
  return (
    <div>
      <p className="text-2xl font-bold mb-4">Редактирования профиля</p>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col w-full gap-1">
          <p className="text-lg font-semibold">Имя</p>
          <Input
            className="w-full"
            placeholder="Как вас зовут?"
            type="text"
            name="name"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-lg font-semibold">Почта</p>
          <Input
            className="w-full"
            placeholder="Адрес вашей электронной почты"
            type="email"
            name="name"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-lg font-semibold">Описание</p>
          <Input
            className="w-full"
            placeholder="Что вы можете рассказать о себе?"
            name="description"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <p className="text-lg font-semibold">Пароль</p>
          <Input
            className="w-full"
            type="password"
            placeholder="Новый пароль"
            name="newpassword"
          />
          <Input
            className="w-full"
            type="password"
            placeholder="Повторите новый пароль"
            name="newpasswordrepeat"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="text-lg font-semibold">Телефон</p>
          <Input
            className="w-full"
            placeholder="Ваш номер телефона"
            name="name"
            type="text"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <p className="text-lg font-semibold">Текуший пароль</p>
          <Input
            className="w-full"
            placeholder="Ваш пароль"
            name="currentpassword"
            type="password"
          />
        </div>

        <Button className="w-full" type="submit">Сохранить</Button>
      </div>
    </div>
  );
}
