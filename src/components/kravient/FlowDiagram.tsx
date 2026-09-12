import { Cloud, Database, Monitor, RefreshCw, Wifi, WifiOff } from "lucide-react";

const defaultSteps = [
  { label: "Hospital Computer", icon: Monitor },
  { label: "Local Data", icon: Database },
  { label: "Offline Mode", icon: WifiOff },
  { label: "Internet Returns", icon: Wifi },
  { label: "Automatic Sync", icon: RefreshCw },
  { label: "Cloud", icon: Cloud },
];

export function FlowDiagram({
  steps = defaultSteps,
  testId,
}: {
  steps?: typeof defaultSteps;
  testId?: string;
}) {
  return (
    <div data-testid={testId}>
      <div className="relative hidden lg:block">
        <div className="absolute left-0 right-0 top-8 h-px bg-white/15" aria-hidden="true" />
        <div
          className="flow-dot absolute top-[29px] h-2 w-2 rounded-full bg-accent"
          aria-hidden="true"
        />
        <ol className="relative grid grid-cols-6 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.label}>
                <div className="flex flex-col items-start gap-4">
                  <span className="flex h-16 w-16 items-center justify-center border border-white/20 bg-navy-deep">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold leading-snug text-white/85">
                    {step.label}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="relative lg:hidden">
        <div className="absolute bottom-0 left-7 top-0 w-px bg-white/15" aria-hidden="true" />
        <div
          className="flow-dot-y absolute left-[25px] h-2 w-2 rounded-full bg-accent"
          aria-hidden="true"
        />
        <ol className="relative space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.label}>
                <div className="flex items-center gap-5">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/20 bg-navy-deep">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-semibold text-white/85">{step.label}</span>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
