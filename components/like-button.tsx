"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }

    setLiked(!liked);
  };

  return (
    <button
      type="button"
      onClick={handleLike}
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors ${
        liked
          ? "border-red-200 bg-red-50 text-red-600"
          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
      }`}
    >
      <span>{liked ? "❤" : "🤍"}</span>
      <span>{count} lượt thích</span>
    </button>
  );
}
