import logo1 from "../logo1.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const skills = [
  "JavaScript / TypeScript",
  "React / Next.js",
  "Tailwind CSS",
  "Git & GitHub",
  "HTML / CSS",
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={logo1.src} alt="Nguyễn Thị Ánh Trúc" />
            <AvatarFallback>NT</AvatarFallback>
          </Avatar>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
              Giới thiệu
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
              Về mình
            </h1>
            <p className="mt-4 max-w-3xl leading-8 text-slate-600">
              Mình là Nguyễn Thị Ánh Trúc, sinh viên năm 4 ngành Công nghệ Thông
              tin tại Trường Đại học Đà Lạt. Mình thích xây dựng giao diện rõ
              ràng, học các công nghệ web mới và áp dụng chúng vào bài tập, dự
              án cá nhân.
            </p>
          </div>
        </div>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">Kỹ năng</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-2xl bg-slate-50 px-4 py-3 text-slate-700 ring-1 ring-slate-200"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-slate-900">Học vấn</h2>
        <div className="mt-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
          <p className="font-semibold text-slate-900">Đại học Đà Lạt</p>
          <p className="mt-1 text-slate-600">
            Kỹ sư Công nghệ Thông tin, 2022 - 2026
          </p>
        </div>
      </div>
    </section>
  );
}
