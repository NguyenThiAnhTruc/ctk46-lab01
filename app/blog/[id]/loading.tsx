export default function BlogPostLoading() {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
      <div className="h-5 w-32 animate-pulse rounded bg-slate-200" />
      <div className="mt-4 h-9 w-3/4 animate-pulse rounded bg-slate-200" />

      <div className="mt-4 flex gap-3">
        <div className="h-6 w-20 animate-pulse rounded-full bg-slate-200" />
        <div className="h-6 w-24 animate-pulse rounded-full bg-slate-200" />
      </div>

      <div className="mt-6 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-full animate-pulse rounded bg-slate-200" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-slate-200" />
      </div>
    </article>
  );
}
