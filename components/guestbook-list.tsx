"use client";

import { useEffect, useState } from "react";
import type { GuestbookEntry } from "@/data/guestbook";
import DeleteButton from "@/components/delete-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

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
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-slate-500">Danh sách lời nhắn</p>
        <Badge variant="secondary">{entries.length} lời nhắn</Badge>
      </div>

      <Separator />

      {visibleEntries.length === 0 ? (
        <p className="py-8 text-center text-slate-400">
          Chưa có lời nhắn nào. Hãy là người đầu tiên!
        </p>
      ) : (
        visibleEntries.map((entry) => (
          <Card key={entry.id} className="transition-shadow hover:shadow-md">
            <CardContent className="pt-5">
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback>{entry.name.slice(0, 1)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-semibold text-slate-900">
                      {entry.name}
                    </h2>
                    <p className="text-xs text-slate-400">
                      {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                </div>

                <DeleteButton id={entry.id} />
              </div>

              <p className="whitespace-pre-line text-slate-600">
                {entry.message}
              </p>
            </CardContent>
          </Card>
        ))
      )}

      {entries.length > pageSize && (
        <div className="flex items-center justify-between gap-3 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            disabled={activePage === 1}
          >
            Trang trước
          </Button>

          <p className="text-sm text-slate-500">
            Trang {activePage} / {totalPages}
          </p>

          <Button
            type="button"
            variant="outline"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            disabled={activePage === totalPages}
          >
            Trang sau
          </Button>
        </div>
      )}
    </div>
  );
}
