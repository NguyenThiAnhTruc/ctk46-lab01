import Link from "next/link";
import type { Post } from "@/types/post";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

      <div className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`}>
            <Card className="cursor-pointer transition-shadow hover:shadow-md">
              <CardHeader>
                <div className="mb-1 flex items-center gap-2">
                  <Badge variant="secondary">Tác giả #{post.userId}</Badge>
                  <span className="text-sm text-slate-400">Bài #{post.id}</span>
                </div>
                <CardTitle className="capitalize">{post.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {post.body}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-5">
                <span className="text-sm text-sky-700 hover:underline">
                  Đọc thêm →
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
