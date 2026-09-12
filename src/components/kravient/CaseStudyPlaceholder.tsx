export function CaseStudyPlaceholder({
  index,
  detailed = false,
}: {
  index: number;
  detailed?: boolean;
}) {
  return (
    <article className="border border-line bg-white p-7">
      <span className="font-display text-sm font-bold tracking-[0.3em] text-accent">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-12 font-display text-2xl font-bold text-navy-deep">
        Case Study Coming Soon
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted2">
        {detailed
          ? "Verified client details, outcomes, screenshots and quotes will be added once approved."
          : "Verified client details will be added here when available."}
      </p>
      {detailed && (
        <dl className="mt-8 space-y-3 border-t border-line pt-5 text-sm">
          {["Industry", "Challenge", "Solution", "Outcome"].map((label) => (
            <div key={label} className="flex items-center justify-between gap-4">
              <dt className="font-semibold text-navy">{label}</dt>
              <dd className="text-muted2">Pending</dd>
            </div>
          ))}
        </dl>
      )}
    </article>
  );
}
