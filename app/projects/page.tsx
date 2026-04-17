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
            <article
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold text-slate-900">
                  {project.title}
                </h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    project.status === "Hoàn thành"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <p className="flex-1 leading-7 text-slate-600">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-sky-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
