import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { host } from "@/lib/host";
import IEvent from "@/types/event.interface";
import axios, { AxiosResponse } from "axios";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cookies } from "next/headers";
import Link from "next/link";
import { FaClock, FaLeaf, FaLocationPin } from "react-icons/fa6";

export const dynamic = "force-dynamic";

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  const cookieStore = cookies();
  const isRegistered = cookieStore.has("SESSION");

  const event: AxiosResponse<IEvent> = await axios.get(
    `${host}/api/events/${params.id}`
  );
  if (event.status !== 200) {
    return <p className=" w-full text-center text-4xl">Событие не найдено</p>;
  }

  return (
    <main className="mx-auto flex min-h-screen w-[100%] max-w-[900px] flex-col gap-2 p-4">
      <img src={event.data.image} className="rounded-xl shadow-lg mb-4" />

      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold md:text-4xl">{event.data.title}</p>
            <Link
              href={"/tag/" + event.data.tag!.id}
              className="text-md my-auto cursor-pointer rounded-lg bg-emerald-500 px-2 py-1 text-neutral-50"
            >
              <p className="font-bold">{event.data.tag!.name}</p>
            </Link>
          </div>
        </div>
        <p className="mt-2 text-lg text-neutral-700 md:text-xl">
          {event.data.description}
        </p>
      </div>

      <div className="flex flex-row items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <p className="text-lg font-semibold">Lorem User</p>
      </div>

      <div className="flex flex-col gap-1 text-xl text-neutral-400">
        <div className="flex gap-2">
          <FaClock />
          <p>
            Время проведения:{" "}
            {format(event.data.startTime, "DD MMM HH:mm", { locale: ru })} -{" "}
            {format(event.data.endTime, "DD MMM HH:mm", { locale: ru })}
          </p>
        </div>
        <div className="flex gap-2">
          <FaLocationPin />
          <p>{event.data.geolocation}</p>
        </div>
        {/* Временно закоментил */}
        {/* <div className="flex gap-2">
          <FaLeaf />
          <p>Экоцентр: Москва, ул. Пушкина, д. 8</p>
        </div> */}
      </div>
      <Button className="h-14 w-full text-lg" disabled={!isRegistered}>
        Участвовать
      </Button>
    </main>
  );
}
