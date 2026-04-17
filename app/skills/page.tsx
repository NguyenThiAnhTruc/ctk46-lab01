const skills = [
  "HTML, CSS, JavaScript",
  "TypeScript và React",
  "Next.js App Router",
  "Tailwind CSS",
  "Git và GitHub",
];

export default function SkillsPage() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
          Kỹ năng
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
          Kỹ năng lập trình
        </h1>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-2xl bg-slate-50 px-4 py-4 text-slate-700 ring-1 ring-slate-200"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
