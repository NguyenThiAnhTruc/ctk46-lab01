"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="vi">
      <body className="flex min-h-screen items-center justify-center bg-slate-50 px-4 text-slate-900">
        <main className="max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-600">
            Lỗi ứng dụng
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
            Đã xảy ra lỗi ở cấp ứng dụng
          </h1>
          <p className="mt-4 leading-8 text-slate-600">
            {error.message || "Vui lòng tải lại trang để thử lại."}
          </p>
          <button
            onClick={() => reset()}
            className="mt-6 inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
          >
            Tải lại
          </button>
        </main>
      </body>
    </html>
  );
}
