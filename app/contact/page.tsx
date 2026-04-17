export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Liên hệ
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Thông tin liên hệ
        </h1>

        <div className="mt-6 grid gap-4 text-slate-700">
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:nguyenthianhtruc@example.com"
                className="text-sky-700 hover:underline"
              >
                nguyenthianhtruc@example.com
              </a>
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/nguyenthianhtruc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-700 hover:underline"
              >
                github.com/nguyenthianhtruc
              </a>
            </p>
          </div>
          <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
            <p>
              <strong>Địa chỉ:</strong> Trường Đại học Đà Lạt, 01 Phù Đổng Thiên
              Vương, Đà Lạt
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
