"use client";

import { useActionState, useEffect, useState } from "react";
import { sendContactMessage, type ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
        <Label htmlFor="name">Họ và tên</Label>
        <Input id="name" name="name" type="text" placeholder="Nguyễn Văn A" />
        {state.errors?.name && (
          <p className="mt-1 text-sm text-rose-600">{state.errors.name[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="email@example.com"
        />
        {state.errors?.email && (
          <p className="mt-1 text-sm text-rose-600">{state.errors.email[0]}</p>
        )}
      </div>

      <div>
        <Label htmlFor="subject">Tiêu đề</Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          placeholder="Chủ đề bạn muốn trao đổi"
        />
        {state.errors?.subject && (
          <p className="mt-1 text-sm text-rose-600">
            {state.errors.subject[0]}
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="message">Nội dung</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Viết nội dung tin nhắn..."
          rows={5}
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-rose-600">
            {state.errors.message[0]}
          </p>
        )}
      </div>

      <Button type="submit" className="w-full">
        Gửi tin nhắn
      </Button>
    </form>
  );
}

export default function ContactPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Card className="p-2 sm:p-3">
        <CardHeader>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
            Liên hệ
          </p>
          <CardTitle className="mt-4 text-3xl">Thông tin liên hệ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="grid gap-4 text-slate-700">
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
                <strong>Địa chỉ:</strong> Trường Đại học Đà Lạt, 01 Phù Đổng
                Thiên Vương, Đà Lạt
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            {showSuccess ? (
              <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <h3 className="text-lg font-semibold text-emerald-700">
                  Gửi thành công!
                </h3>
                <p className="mt-2 text-emerald-600">
                  Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
                </p>
                <Button
                  type="button"
                  onClick={() => setShowSuccess(false)}
                  className="mt-6 bg-emerald-600 hover:bg-emerald-700"
                >
                  Gửi tin nhắn khác
                </Button>
              </div>
            ) : (
              <div>
                <ContactForm onSuccess={() => setShowSuccess(true)} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
