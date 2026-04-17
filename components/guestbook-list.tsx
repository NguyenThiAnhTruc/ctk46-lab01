"use client";

import { useEffect, useState } from "react";
import type { GuestbookEntry } from "@/data/guestbook";
import DeleteButton from "@/components/delete-button";

interface GuestbookListProps {
  entries: GuestbookEntry[];
}

const pageSize = 5;

export default function GuestbookList({ entries }: GuestbookListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(entries.length / pageSize));
  const activePage = Math.min(currentPage, totalPages);
  const startIndex = (activePage - 1) * pageSize;
  const visibleEntries = entries.slice(startIndex, startIndex + pageSize);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, totalPages));
  }, [totalPages]);

  return (
    <div className="space-y-4">
      <p className="text-sm text-slate-400">{entries.length} lời nhắn</p>

      {visibleEntries.length === 0 ? (
        <p className="py-8 text-center text-slate-400">
          Chưa có lời nhắn nào. Hãy là người đầu tiên!
        </p>
      ) : (
        visibleEntries.map((entry) => (
          <article
            key={entry.id}
            className="rounded-2xl border border-slate-200 p-5 transition-shadow hover:shadow-sm"
          >
            <div className="mb-2 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold text-slate-900">{entry.name}</h2>
                <p className="text-xs text-slate-400">
                  {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                </p>
              </div>

              <DeleteButton id={entry.id} />
            </div>

            <p className="whitespace-pre-line text-slate-600">
              {entry.message}
            </p>
          </article>
        ))
      )}

      {entries.length > pageSize && (
        <div className="flex items-center justify-between gap-3 pt-2">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={activePage === 1}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Trang trước
          </button>

          <p className="text-sm text-slate-500">
            Trang {activePage} / {totalPages}
          </p>

          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={activePage === totalPages}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Trang sau
          </button>
        </div>
      )}
    </div>
  );
}
