const sidebarItems = ["OPD", "IPD & Beds", "Billing", "Pharmacy", "Lab", "Sync"];
const stats = [
  { label: "OPD Today", value: "48" },
  { label: "Beds Free", value: "12" },
  { label: "Bills", value: "36" },
];
const rows = [
  ["#1042", "A. Sharma", "OPD", "Paid"],
  ["#1041", "R. Patil", "IPD", "Pending"],
  ["#1040", "M. Iyer", "Lab", "Paid"],
  ["#1039", "S. Khan", "OPD", "Paid"],
];

export function BrowserMockup({ className = "" }: { className?: string }) {
  return (
    <div
      className={`border border-line bg-white shadow-[0_40px_80px_-40px_rgba(8,27,45,0.35)] ${className}`}
      role="img"
      aria-label="Kravient HMS dashboard preview"
    >
      <div className="flex items-center gap-3 border-b border-line bg-fog px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
        </span>
        <span className="flex-1 truncate bg-white px-3 py-1 text-[11px] text-muted2">
          hms.kravient.in/dashboard
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-offline">
          <span className="soft-pulse h-1.5 w-1.5 rounded-full bg-offline" />
          Offline-ready
        </span>
      </div>
      <div className="flex">
        <div className="hidden w-36 shrink-0 flex-col gap-1 bg-navy-deep p-3 sm:flex">
          <span className="mb-2 px-2 font-display text-[11px] font-extrabold tracking-[0.2em] text-white">
            KRAVIENT
          </span>
          {sidebarItems.map((item, index) => (
            <span
              key={item}
              className={`px-2 py-1.5 text-[11px] ${
                index === 0 ? "bg-navy-700 font-semibold text-white" : "text-white/50"
              }`}
            >
              {item}
            </span>
          ))}
          <span className="mt-auto flex items-center gap-1.5 px-2 pt-3 text-[10px] text-offline">
            <span className="soft-pulse h-1.5 w-1.5 rounded-full bg-offline" />
            Synced
          </span>
        </div>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <span className="font-display text-sm font-bold text-navy-deep">
              Good morning, Desk 1
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] text-muted2">Today</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
            {stats.map((stat) => (
              <div key={stat.label} className="border border-line bg-cream p-2.5 sm:p-3">
                <div className="font-display text-lg font-extrabold text-navy-deep sm:text-2xl">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[9px] uppercase tracking-[0.14em] text-muted2 sm:text-[10px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 border border-line">
            <div className="border-b border-line bg-fog px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-muted2">
              Recent activity
            </div>
            {rows.map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-4 items-center gap-2 border-b border-line px-3 py-2 text-[11px] last:border-0"
              >
                <span className="font-semibold text-navy">{row[0]}</span>
                <span className="truncate text-ink">{row[1]}</span>
                <span className="text-muted2">{row[2]}</span>
                <span className={row[3] === "Paid" ? "font-semibold text-offline" : "text-accent"}>
                  {row[3]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
