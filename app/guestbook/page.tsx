import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import GuestbookList from "@/components/guestbook-list";

export default function GuestbookPage() {
  const entries = [...guestbookEntries];

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Guestbook
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Sổ lưu bút
        </h1>
        <p className="mt-3 text-slate-600">Hãy để lại lời nhắn cho mình nhé.</p>

        <GuestbookForm />

        <div className="mt-8">
          <GuestbookList entries={entries} />
        </div>
      </div>
    </div>
  );
}
