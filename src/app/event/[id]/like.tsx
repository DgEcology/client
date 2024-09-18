"use client";

import { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

interface LikeProps {
  eventId: string;
  likes: number;
  isLiked: boolean;
}

export default function LikeButton({ eventId, likes, isLiked }: LikeProps) {
  const [liked, setLiked] = useState(isLiked);
  const [likesCount, setLikesCount] = useState(likes);

  async function like() {
    // Сделать обращение к API

    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  }

  return (
    <div className="flex items-center gap-2 text-2xl md:text-4xl">
      {liked ? (
        <FaHeart className="h-8 w-8 md:h-10 md:w-10" />
      ) : (
        <FaRegHeart className="h-8 w-8 md:h-10 md:w-10" />
      )}
      <p>{likesCount}</p>
    </div>
  );
}
