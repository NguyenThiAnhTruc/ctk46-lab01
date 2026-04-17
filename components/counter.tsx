"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center gap-4">
      <button
        type="button"
        onClick={() => setCount(count - 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-200 text-xl font-bold transition-colors hover:bg-slate-300"
      >
        -
      </button>
      <span className="w-12 text-center text-2xl font-bold">{count}</span>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-700 text-xl font-bold text-white transition-colors hover:bg-sky-800"
      >
        +
      </button>
    </div>
  );
}
