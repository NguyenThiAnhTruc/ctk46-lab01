export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-sky-100 p-6 text-slate-900">
      <div className="w-full max-w-3xl rounded-3xl border border-white/70 bg-white/80 p-8 shadow-2xl shadow-sky-100 backdrop-blur">
        <div className="mb-8 space-y-3 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Trang chủ cá nhân
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Xin chào, mình là Nguyễn Thị Ánh Trúc
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-slate-600">
            Tôi hiện đang là Sinh Viên năm 4 tại Trường Đại Học Đà Lạt.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <section className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Họ và tên</p>
            <p className="mt-2 text-xl font-semibold">Nguyễn Thị Ánh Trúc</p>
          </section>
          <section className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">MSSV</p>
            <p className="mt-2 text-xl font-semibold">2212479</p>
          </section>
          <section className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">Lớp</p>
            <p className="mt-2 text-xl font-semibold">CTK46A</p>
          </section>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl bg-sky-50 p-6 ring-1 ring-sky-100">
            <h2 className="text-2xl font-semibold text-sky-900">
              Giới thiệu ngắn
            </h2>
            <p className="mt-3 leading-8 text-sky-950/80">
              Mình yêu thích học hỏi công nghệ mới, thích xây dựng giao diện đẹp
              và mong muốn phát triển kỹ năng lập trình web theo hướng thực tế.
            </p>
          </section>

          <section className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
            <h2 className="text-2xl font-semibold text-emerald-900">
              Sở thích & mục tiêu
            </h2>
            <ul className="mt-4 space-y-3 text-emerald-950/80">
              <li>• Đọc tài liệu và thử nghiệm công nghệ mới</li>
              <li>• Thiết kế giao diện web gọn gàng, dễ dùng</li>
              <li>• Nâng cao kỹ năng React, Next.js và TypeScript</li>
              <li>• Hoàn thành tốt các môn học và dự án ở trường</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
