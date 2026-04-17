import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "Website Portfolio",
    description: "Website cá nhân xây dựng bằng Next.js và Tailwind CSS.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "Đang phát triển",
  },
  {
    title: "Ứng dụng Quản lý Công việc",
    description: "Todo app có giao diện tối giản và lưu trạng thái cục bộ.",
    tech: ["React", "JavaScript", "Local Storage"],
    status: "Hoàn thành",
  },
  {
    title: "Trang Blog Học Tập",
    description: "Trang chia sẻ ghi chú học tập và các bài viết công nghệ.",
    tech: ["Next.js", "App Router", "Markdown"],
    status: "Hoàn thành",
  },
  {
    title: "Chat Realtime",
    description: "Ứng dụng chat realtime với Socket.IO.",
    tech: ["React", "Socket.IO", "Node.js"],
    status: "Đang phát triển",
  },
];

export default function ProjectsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Dự án
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Một số dự án đã thực hiện
        </h1>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="transition-shadow hover:shadow-md"
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge
                    variant={
                      project.status === "Hoàn thành" ? "default" : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0 pb-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
