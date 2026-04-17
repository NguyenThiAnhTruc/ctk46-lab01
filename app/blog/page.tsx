import Link from "next/link";
import type { Post } from "@/types/post";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold text-slate-900">Blog</h1>
      <p className="mb-6 text-slate-500">
        Tổng cộng {posts.length} bài viết từ API
      </p>

      <div className="space-y-6">
        {posts.slice(0, 10).map((post) => (
          <article
            key={post.id}
            className="rounded-lg border border-slate-200 bg-white p-6 transition-shadow hover:shadow-md"
          >
            <div className="mb-2 flex items-center gap-3 text-xs text-slate-500">
              <span className="rounded-full bg-sky-100 px-2 py-1 font-medium text-sky-700">
                Tác giả #{post.userId}
              </span>
              <span className="text-sm text-slate-400">Bài #{post.id}</span>
            </div>

            <Link href={`/blog/${post.id}`}>
              <h2 className="mb-2 text-xl font-semibold capitalize transition-colors hover:text-sky-700">
                {post.title}
              </h2>
            </Link>

            <p className="line-clamp-2 text-slate-600">{post.body}</p>

            <Link
              href={`/blog/${post.id}`}
              className="mt-3 inline-block text-sm text-sky-700 hover:underline"
            >
              Đọc thêm →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
