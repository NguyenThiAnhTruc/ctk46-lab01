"use client";

export default function BlogError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
        Đã xảy ra lỗi
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        Không thể tải nội dung blog
      </h2>
      <p className="mt-4 leading-8 text-slate-600">
        {error.message || "Vui lòng thử lại sau ít phút."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-6 inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
      >
        Thử lại
      </button>
    </article>
  );
}
