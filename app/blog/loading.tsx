export default function BlogLoading() {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <div className="h-8 w-48 animate-pulse rounded bg-slate-200" />
      <div className="mt-4 h-10 w-80 animate-pulse rounded bg-slate-200" />

      <div className="mt-8 space-y-6">
        {[1, 2, 3].map((item) => (
          <div key={item} className="rounded-2xl border border-slate-200 p-5">
            <div className="mb-3 flex gap-3">
              <div className="h-5 w-20 animate-pulse rounded bg-slate-200" />
              <div className="h-5 w-24 animate-pulse rounded bg-slate-200" />
            </div>
            <div className="h-6 w-3/4 animate-pulse rounded bg-slate-200" />
            <div className="mt-2 h-4 w-full animate-pulse rounded bg-slate-200" />
            <div className="mt-2 h-4 w-2/3 animate-pulse rounded bg-slate-200" />
          </div>
        ))}
      </div>
    </article>
  );
}
