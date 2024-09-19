import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaClock, FaLeaf, FaLocationPin } from "react-icons/fa6";
import LikeButton from "./like";
import YandexMap from "@/components/yandexMap/yandexMap"
import EventService from "@/services/event.service"

export const dynamic = "force-dynamic";

export default async function EventPage({
  params,
}: {
  params: { id: string };
}) {
  // Заменить все здесь и делать запрос к API

  const isRegistered = false;
  const event = await EventService.getOne(+params.id)

  return (
    <main className="mx-auto flex min-h-screen w-[100%] max-w-[900px] flex-col gap-2 p-4">
      <img
        src={event.image}
        className="rounded-xl shadow-lg mb-4"
      />

      <div className="">
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold md:text-4xl">{event.title}</p>
            <div className="text-md my-auto rounded-lg bg-emerald-500 px-2 py-1 text-neutral-50">
              <p className="font-bold">Уборка</p>
            </div>
          </div>
          {/* !!! Когда ручки будут готовы, указать тут переменные вместо заглушек */}
          <LikeButton eventId={params.id} likes={0} isLiked={false} />
        </div>
        <p className="mt-2 text-lg text-neutral-700 md:text-xl">
          {event.description}
        </p>
      </div>

      <div className="flex flex-row items-center gap-2">
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://avatars.githubusercontent.com/u/89439507" />
          <AvatarFallback></AvatarFallback>
        </Avatar>
        <p className="text-lg font-semibold">User</p>
      </div>

      <div className="flex flex-col gap-1 text-xl text-neutral-400">
        <div className="flex gap-2">
          <FaClock />
          <p>Старт: {event.startTime} Конец: {event.endTime}</p>
        </div>
        <div className="flex gap-2">
          <FaLocationPin />
          <p>Москва, ул. Пушкина, д. 8</p>
        </div>
        <div className="flex gap-2">
          <FaLeaf />
          <p>Экоцентр: Москва, ул. Пушкина, д. 8</p>
        </div>
      </div>
      <YandexMap />
      {isRegistered ? (
        <Button className="w-full h-14" disabled>
          Участвует
        </Button>
      ) : (
        <Button className="h-14 w-full text-lg">Участвовать</Button>
      )}
    </main>
  );
}
