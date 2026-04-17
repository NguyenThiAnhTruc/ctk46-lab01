export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0">{children}</div>
        <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm h-fit">
          <h2 className="text-lg font-semibold text-slate-900">Danh mục</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Công nghệ</li>
            <li>Học tập</li>
            <li>Dự án cá nhân</li>
            <li>Cuộc sống</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
