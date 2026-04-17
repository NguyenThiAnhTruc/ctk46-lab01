"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  createGuestbookEntry,
  type ActionState,
} from "@/app/guestbook/actions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
    <Card className="mt-8">
      <CardHeader>
        <CardTitle>Viết lời nhắn</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={formAction} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Tên của bạn</Label>
            <Input id="name" name="name" placeholder="Nhập tên của bạn" />
            {state.errors?.name && (
              <p className="text-sm text-rose-600">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Lời nhắn</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Viết lời nhắn của bạn..."
              rows={4}
            />
            {state.errors?.message && (
              <p className="text-sm text-rose-600">{state.errors.message[0]}</p>
            )}
          </div>

          <FormSubmitButton idleText="Gửi lời nhắn" pendingText="Đang gửi..." />

          {state.success && (
            <p className="text-sm font-medium text-emerald-600">
              Gửi lời nhắn thành công!
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  );
}
