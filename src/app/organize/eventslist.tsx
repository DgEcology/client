"use client";

import { useState } from "react";
import QrCode from "./qrcode";
import Stats from "./stats";

enum EventStatus {
  Started = "Идет",
  Finished = "Завершено",
  Upcoming = "Запланировано",
}

interface EventEntity {
  id: string;
  name: string;
  image: string;
  status: EventStatus;
  startTime: string;
  endTime: string;
}

export default function EventsList() {
  const [events, setEvents] = useState<Array<EventEntity>>([]);

  // Получение событий организатора

  return (
    <div className="flex flex-col gap-3">
      {events.map((event, index) => (
        <Event key={index} event={event} />
      ))}
    </div>
  );
}

interface EventProps {
  event: EventEntity;
}

export function Event({ event }: EventProps) {
  return (
    <div className="flex w-full flex-col rounded-lg bg-neutral-100 shadow-md md:flex-row">
      <img
        src={event.image}
        className="h-64 rounded-t-lg object-cover md:h-full md:w-64 md:rounded-l-lg"
      />
      <div className="flex w-full flex-col justify-between p-4">
        <div className="space-between flex w-full flex-row">
          <div className="flex w-full flex-col">
            <p className="text-2xl font-bold">{event.name}</p>
            <p className="text-lg font-semibold text-emerald-500">
              {event.status}
            </p>
          </div>
          <div className="flex flex-row gap-2">
            <Stats />
            {event.status === EventStatus.Started && <QrCode data="" />}
          </div>
        </div>
        <div className="text-neutral-600">
          <p>
            {event.startTime} - {event.endTime}
          </p>
        </div>
      </div>
    </div>
  );
}
