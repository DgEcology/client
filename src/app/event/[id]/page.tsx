import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaClock, FaHeart, FaLeaf, FaLocationPin } from "react-icons/fa6";

export const dynamic = "force-dynamic";

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main className="mx-auto flex min-h-screen w-[100%] max-w-[900px] flex-col gap-2 p-4">
      <img
        src="https://w.wallhaven.cc/full/l8/wallhaven-l8gg1r.jpg"
        className="rounded-xl shadow-lg mb-4"
      />

      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold md:text-4xl">Уборка полей</p>
            <div className="text-md my-auto rounded-lg bg-emerald-500 px-2 py-1 text-neutral-50">
              <p className="font-bold">Уборка</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-2xl md:text-4xl">
            <FaHeart className="h-8 w-8 md:h-10 md:w-10" />
            <p>999</p>
          </div>
        </div>
        <p className="mt-2 text-xl text-neutral-700 md:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className="flex flex-row items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://avatars.githubusercontent.com/u/89439507" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <p className="text-lg font-semibold">Lorem User</p>
      </div>

      <div className="flex flex-col gap-1 text-xl text-neutral-400">
        <div className="flex gap-2">
          <FaClock />
          <p>Время события: 12:00 - 18:00</p>
        </div>
        <div className="flex gap-2">
          <FaLocationPin />
          <p>Москва, ул. Пушкина, д. 8</p>
        </div>
        <div className="flex gap-2">
          <FaLeaf/>
          <p>Экоцентр: Москва, ул. Пушкина, д. 8</p>
        </div>
      </div>
      <div className="flex h-14 w-full rounded-lg bg-emerald-400 text-xl font-semibold text-neutral-50">
        <p className="m-auto">Учавствовать</p>
      </div>
    </main>
  );
}
