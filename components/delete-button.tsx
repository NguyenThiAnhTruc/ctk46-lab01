"use client";

import { useState } from "react";
import { deleteGuestbookEntry } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";

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
    <Button
      type="button"
      variant="destructive"
      size="sm"
      onClick={() => void handleDelete()}
      disabled={pending}
    >
      {pending ? "Đang xóa..." : "Xóa"}
    </Button>
  );
}
