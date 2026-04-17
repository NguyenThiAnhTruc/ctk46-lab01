import Link from "next/link";
import Image from "next/image";
import logo1 from "./logo1.png";
import Counter from "../components/counter";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Git",
  "SQL",
];

export default function HomePage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-16 text-center">
        <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 sm:h-32 sm:w-32">
          <Image
            src={logo1}
            alt="Ảnh đại diện Nguyễn Thị Ánh Trúc"
            priority
            className="h-full w-full object-cover"
          />
        </div>

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Trang chủ
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Xin chào! Tôi là{" "}
          <span className="text-sky-700">Nguyễn Thị Ánh Trúc</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt. Đam mê phát triển
          web và khám phá các công nghệ mới.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-sky-700 px-6 py-3 text-white transition-colors hover:bg-sky-800"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-slate-300 px-6 py-3 text-slate-700 transition-colors hover:bg-slate-50"
          >
            Liên hệ
          </Link>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
          Kỹ năng
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-lg bg-white p-4 text-center shadow-sm ring-1 ring-slate-200 transition-colors hover:bg-sky-50 hover:text-sky-700"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-sky-50 p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-900">Đọc Blog của tôi</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ.
        </p>
        <Link
          href="/blog"
          className="mt-6 inline-block font-semibold text-sky-700 hover:underline"
        >
          Xem blog →
        </Link>
      </div>

      <div className="mt-16 rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Counter
        </p>
        <h2 className="mt-3 text-2xl font-bold text-slate-900">
          Bộ đếm tương tác
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">
          Đây là Client Component dùng `useState`, còn phần trang chủ vẫn được
          render trên server.
        </p>
        <div className="mt-6 flex justify-center">
          <Counter />
        </div>
      </div>
    </section>
  );
}
