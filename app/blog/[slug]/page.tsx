import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";
import LikeButton from "../../../components/like-button";

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm font-medium text-sky-700 hover:underline"
      >
        ← Quay lại danh sách
      </Link>
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
        Bài viết chi tiết
      </p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
        {post.title}
      </h1>

      <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
        <span className="rounded-full bg-sky-100 px-2 py-1 font-medium text-sky-700">
          {post.category}
        </span>
        <span>{post.date}</span>
      </div>

      <div className="mt-6 whitespace-pre-line leading-8 text-slate-600">
        {post.content}
      </div>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <LikeButton />
      </div>
    </article>
  );
}
