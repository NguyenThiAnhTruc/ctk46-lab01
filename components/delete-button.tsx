"use client";

import { useState } from "react";
import { deleteGuestbookEntry } from "@/app/guestbook/actions";

interface DeleteButtonProps {
  id: string;
}

export default function DeleteButton({ id }: DeleteButtonProps) {
  const [pending, setPending] = useState(false);

  async function handleDelete() {
    if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) {
      return;
    }

    setPending(true);

    try {
      const result = await deleteGuestbookEntry(id);

      if (!result.success) {
        alert(result.errors?.message?.[0] ?? "Không thể xóa lời nhắn.");
      }
    } catch {
      alert("Không thể xóa lời nhắn. Vui lòng thử lại.");
    } finally {
      setPending(false);
    }
  }

  return (
    <button
      type="button"
      onClick={() => void handleDelete()}
      disabled={pending}
      className="text-xs font-medium text-rose-500 transition-colors hover:text-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {pending ? "Đang xóa..." : "Xóa"}
    </button>
  );
}
