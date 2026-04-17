"use client";

import { useActionState, useEffect, useState } from "react";
import { sendContactMessage, type ContactFormState } from "./actions";
import FormSubmitButton from "@/components/form-submit-button";

const initialState: ContactFormState = {
  success: false,
};

function ContactForm({ onSuccess }: { onSuccess: () => void }) {
  const [state, formAction] = useActionState(sendContactMessage, initialState);

  useEffect(() => {
    if (state.success) {
      onSuccess();
    }
  }, [state.success, onSuccess]);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Họ và tên
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nguyễn Văn A"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-rose-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="email@example.com"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-rose-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Tiêu đề
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          placeholder="Chủ đề bạn muốn trao đổi"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
        {state.errors?.subject && (
          <p className="mt-1 text-sm text-rose-600">
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-slate-700"
        >
          Nội dung
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Viết nội dung tin nhắn..."
          rows={5}
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-rose-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <FormSubmitButton
        idleText="Gửi tin nhắn"
        pendingText="Đang gửi..."
        className="w-full rounded-full bg-sky-700 px-6 py-3 font-semibold text-white transition-colors hover:bg-sky-800 disabled:cursor-not-allowed disabled:opacity-50"
      />
    </form>
  );
}

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Liên hệ
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Thông tin liên hệ
        </h1>

        <div className="mt-6 grid gap-4 text-slate-700">
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nguyenthianhtruc@example.com"
                className="text-sky-700 hover:underline"
              >
                nguyenthianhtruc@example.com
              </a>
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/NguyenThiAnhTruc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:underline"
              >
                github.com/NguyenThiAnhTruc
              </a>
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p>
              <strong>Địa chỉ:</strong> Trường Đại học Đà Lạt, 01 Phù Đổng Thiên
              Vương, Đà Lạt
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {showSuccess ? (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
              <h3 className="text-lg font-semibold text-emerald-700">
                Gửi thành công!
              </h3>
              <p className="mt-2 text-emerald-600">
                Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
              </p>
              <button
                type="button"
                onClick={() => setShowSuccess(false)}
                className="mt-6 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
              >
                Gửi tin nhắn khác
              </button>
            </div>
          ) : (
            <div>
              <ContactForm onSuccess={() => setShowSuccess(true)} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
