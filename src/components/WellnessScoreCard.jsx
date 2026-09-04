import { ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const WellnessScoreCard = ({
  score = 78,
  status = "Stable",
  lastCheckIn = "Today, 08:30 AM",
}) => {
  const circumference = 2 * Math.PI * 52;
  const progress = (score / 100) * circumference;

  return (
    <Card className="p-6 border-slate-200 shadow-sm">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-6">
        {/* Score */}
        <div>
          <h3 className="text-lg font-bold text-slate-800">
            Your Wellness Score
          </h3>

          <div className="flex items-center gap-8 mt-5">
            <div className="relative w-32 h-32">
              <svg width="128" height="128" className="-rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  stroke="#e5e7eb"
                  strokeWidth="10"
                  fill="none"
                />

                <circle
                  cx="64"
                  cy="64"
                  r="52"
                  stroke="#059669"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference - progress}
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-slate-800">
                  {score}
                </span>

                <span className="text-xs text-slate-500">/100</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-emerald-500 rounded-full" />

                <h4 className="text-xl font-semibold text-emerald-700">
                  {status}
                </h4>
              </div>

              <p className="text-sm text-slate-500 mt-2 max-w-xs">
                You're doing good! Keep taking care of yourself.
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="lg:border-l border-slate-200 lg:pl-6">
          <p className="text-sm font-semibold text-slate-700">Current Status</p>

          <div className="mt-3 flex items-center justify-between bg-emerald-50 rounded-xl px-4 py-3">
            <div className="flex items-center gap-2">
              <ShieldCheck size={19} className="text-emerald-600" />

              <span className="font-medium text-emerald-700">{status}</span>
            </div>

            <ShieldCheck size={19} className="text-emerald-600" />
          </div>

          <p className="text-sm font-semibold text-slate-700 mt-5">
            Last Check-In
          </p>

          <p className="text-sm text-slate-500 mt-2">{lastCheckIn}</p>
        </div>
      </div>
    </Card>
  );
}

export default WellnessScoreCard;
