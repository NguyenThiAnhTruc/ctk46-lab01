import Link from "next/link";
import { notFound } from "next/navigation";
import type { Post, User } from "@/types/post";
import LikeButton from "../../../components/like-button";

export function generateStaticParams() {
  return Array.from({ length: 10 }, (_, index) => ({
    id: String(index + 1),
  }));
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );

  if (!res.ok) {
    throw new Error("Không thể tải thông tin tác giả");
  }

  return res.json();
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getPost(id);
  const author = await getUser(post.userId);

  return (
    <div>
      <Link
        href="/blog"
        className="mb-6 inline-block text-sm font-medium text-sky-700 hover:underline"
      >
        ← Quay lại danh sách
      </Link>

      <article>
        <h1 className="mb-4 text-3xl font-bold capitalize">{post.title}</h1>

        <div className="mb-6 flex items-center gap-3 text-sm text-slate-500">
          <span>
            Tác giả: <strong className="text-slate-700">{author.name}</strong>
          </span>
          <span>•</span>
          <span>{author.email}</span>
        </div>

        <div className="mb-8 whitespace-pre-line leading-relaxed text-slate-700">
          {post.body}
        </div>

        <div className="border-t pt-6">
          <h3 className="mb-2 font-semibold">Về tác giả</h3>
          <p className="text-sm text-slate-600">
            <strong>{author.name}</strong> (@{author.username}) —{" "}
            {author.company.name}
          </p>
          <p className="text-sm text-slate-500">{author.company.catchPhrase}</p>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <LikeButton />
        </div>
      </article>
    </div>
  );
}
