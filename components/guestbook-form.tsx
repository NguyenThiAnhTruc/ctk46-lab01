"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  createGuestbookEntry,
  type ActionState,
} from "@/app/guestbook/actions";
import FormSubmitButton from "@/components/form-submit-button";

const initialState: ActionState = {
  success: false,
};

export default function GuestbookForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(
    createGuestbookEntry,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="mt-8 space-y-4 rounded-2xl bg-slate-50 p-5"
    >
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Tên của bạn
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nhập tên của bạn"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-rose-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Lời nhắn
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Viết lời nhắn của bạn..."
          rows={4}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-rose-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <FormSubmitButton
        idleText="Gửi lời nhắn"
        pendingText="Đang gửi..."
        className="rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-50"
      />

      {state.success && (
        <p className="text-sm font-medium text-emerald-600">
          Gửi lời nhắn thành công!
        </p>
      )}
    </form>
  );
}
