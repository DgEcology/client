import LoginForm from "./form";

export default async function SignIn() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <div className="m-auto w-[280px] flex flex-col items-center">
        <p className="text-2xl font-semibold">Войдите в свой аккаунт</p>
        <LoginForm />
      </div>
    </main>
  );
}
