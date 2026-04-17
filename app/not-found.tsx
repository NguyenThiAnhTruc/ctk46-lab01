import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6 lg:px-8">
      <div className="mb-6 text-7xl font-black tracking-tight text-slate-200 sm:text-8xl">
        404
      </div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        Trang không tồn tại
      </h1>
      <p className="mt-4 max-w-2xl leading-8 text-slate-600">
        Xin lỗi, trang bạn đang tìm kiếm không có trên website này.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
        >
          Về trang chủ
        </Link>
        <span className="inline-flex rounded-full border border-dashed border-slate-300 px-5 py-3 text-sm text-slate-500">
          Bạn có thể thử lại từ menu phía trên
        </span>
      </div>
    </div>
  );
}
