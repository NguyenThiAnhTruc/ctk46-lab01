"use client";

import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

interface FormSubmitButtonProps {
  idleText: string;
  pendingText: string;
  className?: string;
}

export default function FormSubmitButton({
  idleText,
  pendingText,
  className,
}: FormSubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className={className}>
      {pending ? pendingText : idleText}
    </Button>
  );
}
