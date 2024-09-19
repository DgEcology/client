import Link from "next/link";
import RegisterForm from "./form";

export default async function SignUp() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="m-auto w-[380px] flex flex-col items-center">
        <p className="text-2xl font-semibold">Создание аккаунта</p>
        <RegisterForm />
        <Link href={"/signin"} className="cursor-pointer">Войти в аккаунт</Link>
      </div>
    </main>
  );
}
