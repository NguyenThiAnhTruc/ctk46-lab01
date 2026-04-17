import Link from "next/link";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/about", label: "Giới thiệu" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Dự án" },
  { href: "/guestbook", label: "Lưu bút" },
  { href: "/contact", label: "Liên hệ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur">
      <nav className="mx-auto w-full max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-sky-700"
          >
            Nguyễn Thị Ánh Trúc
          </Link>

          <div className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-sky-700"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <details className="relative md:hidden">
            <summary className="list-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm">
              <span className="sr-only">Mở menu</span>
              <div className="flex flex-col gap-1.5">
                <span className="h-0.5 w-5 rounded-full bg-slate-700" />
                <span className="h-0.5 w-5 rounded-full bg-slate-700" />
                <span className="h-0.5 w-5 rounded-full bg-slate-700" />
              </div>
            </summary>

            <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition-colors hover:bg-slate-50 hover:text-sky-700"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
        </div>
      </nav>
    </header>
  );
}
