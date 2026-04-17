import Link from "next/link";
import { posts } from "@/data/posts";

export default function BlogPage() {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
        Blog
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        Danh sách bài viết
      </h1>

      <div className="mt-8 grid gap-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="rounded-2xl border border-slate-200 p-5 transition-colors hover:border-sky-300 hover:bg-sky-50/50"
          >
            <div className="mb-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full bg-sky-100 px-2 py-1 font-medium text-sky-700">
                {post.category}
              </span>
              <span>{post.date}</span>
            </div>
            <h2 className="text-xl font-semibold text-slate-900">
              {post.title}
            </h2>
            <p className="mt-2 text-slate-600">{post.excerpt}</p>
            <span className="mt-3 inline-block text-sm font-medium text-sky-700">
              Đọc thêm →
            </span>
          </Link>
        ))}
      </div>
    </article>
  );
}
