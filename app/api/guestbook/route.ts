import { NextRequest, NextResponse } from "next/server";
import { guestbookEntries } from "@/data/guestbook";

function parseLimit(searchParams: URLSearchParams) {
  const rawLimit = searchParams.get("limit");

  if (!rawLimit) {
    return null;
  }

  const limit = Number(rawLimit);

  if (!Number.isInteger(limit) || limit <= 0) {
    return null;
  }

  return limit;
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

// GET /api/guestbook — Lấy danh sách tất cả lời nhắn
export async function GET(request: NextRequest) {
  const limit = parseLimit(request.nextUrl.searchParams);
  const entries = limit ? guestbookEntries.slice(0, limit) : guestbookEntries;

  return NextResponse.json(entries);
}

// POST /api/guestbook — Thêm lời nhắn mới
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validated = validateGuestbookInput(body);

  if (typeof validated === "string") {
    return NextResponse.json({ error: validated }, { status: 400 });
  }

  const newEntry = {
    id: Date.now().toString(),
    name: validated.name,
    message: validated.message,
    createdAt: new Date().toISOString(),
  };

  guestbookEntries.unshift(newEntry);

  return NextResponse.json(newEntry, { status: 201 });
}
