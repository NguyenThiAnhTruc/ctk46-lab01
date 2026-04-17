import Link from "next/link";

export default function PostNotFound() {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
        404
      </p>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        Bài viết không tồn tại
      </h2>
      <p className="mt-4 leading-8 text-slate-600">
        Bài viết bạn đang tìm kiếm không có trong hệ thống.
      </p>
      <Link
        href="/blog"
        className="mt-6 inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-sky-800"
      >
        Quay lại Blog
      </Link>
    </article>
  );
}
