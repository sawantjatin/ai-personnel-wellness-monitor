import { useNavigate } from "react-router-dom";
import {
  ClipboardCheck,
  HeartHandshake,
  BookOpen,
  Bot,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import WellnessScoreCard from "@/components/WellnessScoreCard";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const trendData = [
  { week: "Week 1", score: 43 },
  { week: "Week 2", score: 61 },
  { week: "Week 3", score: 63 },
  { week: "Week 4", score: 82 },
  { week: "Week 5", score: 85 },
  { week: "Week 6", score: 78 },
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Page intro */}
      <div>
        <p className="text-sm text-emerald-600 font-semibold">
          PERSONAL WELLNESS
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
          My Dashboard
        </h1>

        <p className="text-slate-500 mt-1">
          Monitor your well-being and take a moment to check in.
        </p>
      </div>

      {/* Wellness Score */}
      <WellnessScoreCard
        score={78}
        status="Stable"
        lastCheckIn="Today, 08:30 AM"
      />

      {/* Check In */}
      <Card className="p-6 border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <div>
            <h2 className="text-lg font-bold text-slate-800">
              How are you feeling today?
            </h2>

            <p className="text-sm text-slate-500 mt-1">
              A quick check-in helps you keep track of your well-being.
            </p>
          </div>

          <Button
            onClick={() => navigate("/check-in")}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Start Daily Check-In
            <ArrowRight size={17} className="ml-2" />
          </Button>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-2 max-w-xl">
          {["😊", "🙂", "😐", "😔", "😣"].map((emoji, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl">{emoji}</div>

              <p className="text-xs text-slate-500 mt-1">
                {["Great", "Good", "Okay", "Low", "Stressed"][index]}
              </p>
            </div>
          ))}
        </div>
      </Card>

      {/* Lower section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Trend */}
        <Card className="p-6 border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-5">
            <div>
              <h2 className="font-bold text-lg text-slate-800">
                Your Wellness Trend
              </h2>

              <p className="text-sm text-slate-500">
                Recent wellness score history
              </p>
            </div>

            <select className="text-xs border border-slate-200 rounded-lg px-3 py-2 bg-white">
              <option>This Month</option>
              <option>Last 3 Months</option>
            </select>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />

                <XAxis dataKey="week" tick={{ fontSize: 11 }} />

                <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#059669"
                  strokeWidth={3}
                  dot={{
                    r: 4,
                    fill: "#059669",
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="p-6 border-slate-200 shadow-sm">
          <h2 className="font-bold text-lg text-slate-800">Quick Actions</h2>

          <p className="text-sm text-slate-500 mt-1 mb-5">
            Access your wellness tools
          </p>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => navigate("/check-in")}
              className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition text-left"
            >
              <ClipboardCheck className="text-emerald-600" size={25} />

              <p className="font-semibold text-slate-700 mt-4">
                Daily Check-In
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Record today's wellness
              </p>
            </button>

            <button
              onClick={() => navigate("/request-support")}
              className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition text-left"
            >
              <HeartHandshake className="text-blue-600" size={25} />

              <p className="font-semibold text-slate-700 mt-4">
                Request Support
              </p>

              <p className="text-xs text-slate-500 mt-1">
                Ask for confidential help
              </p>
            </button>

            <button
              onClick={() => alert("Resources will be available soon.")}
              className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition text-left"
            >
              <BookOpen className="text-purple-600" size={25} />

              <p className="font-semibold text-slate-700 mt-4">
                View Resources
              </p>

              <p className="text-xs text-slate-500 mt-1">Wellness resources</p>
            </button>

            <button
              onClick={() => alert("Sahayak AI will be connected later.")}
              className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 transition text-left"
            >
              <Bot className="text-indigo-600" size={25} />

              <p className="font-semibold text-slate-700 mt-4">
                Talk to Sahayak AI
              </p>

              <p className="text-xs text-slate-500 mt-1">Wellness assistant</p>
            </button>
          </div>
        </Card>
      </div>

      {/* Bottom message */}
      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
            <ShieldCheck size={21} className="text-emerald-600" />
          </div>

          <div>
            <p className="font-semibold text-emerald-800">
              Your well-being is important.
            </p>

            <p className="text-sm text-emerald-700/80 mt-1">
              Regular check-ins help us support you better.
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          className="border-emerald-300 text-emerald-700"
          onClick={() => navigate("/check-in")}
        >
          Check In
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
