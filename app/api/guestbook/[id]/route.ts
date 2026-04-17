import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

interface RouteParams {
  params: Promise<{ id: string }>;
}

function validateGuestbookInput(body: unknown) {
  if (!body || typeof body !== "object") {
    return "Dữ liệu không hợp lệ";
  }

  const data = body as Record<string, unknown>;
  const name = typeof data.name === "string" ? data.name.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (name.length < 2 || name.length > 50) {
    return "Tên phải từ 2 đến 50 ký tự";
  }

  if (message.length < 1 || message.length > 500) {
    return "Lời nhắn phải từ 1 đến 500 ký tự";
  }

  return { name, message };
}

// DELETE /api/guestbook/[id] — Xóa lời nhắn theo id
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 },
    );
  }

  const deleted = guestbookEntries.splice(index, 1)[0];
  return NextResponse.json(deleted);
}

// PUT /api/guestbook/[id] — Cập nhật lời nhắn theo id
export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const index = guestbookEntries.findIndex((entry) => entry.id === id);

  if (index === -1) {
    return NextResponse.json(
      { error: "Không tìm thấy lời nhắn" },
      { status: 404 },
    );
  }

  const body = await request.json();
  const validated = validateGuestbookInput(body);

  if (typeof validated === "string") {
    return NextResponse.json({ error: validated }, { status: 400 });
  }

  guestbookEntries[index] = {
    ...guestbookEntries[index],
    name: validated.name,
    message: validated.message,
  };

  return NextResponse.json(guestbookEntries[index]);
}
