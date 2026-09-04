import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Moon, Activity, Smile, CheckCircle2 } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

import MoodSelector from "@/components/MoodSelector";

const WellnessCheckIn = () => {
  const navigate = useNavigate();

  const [mood, setMood] = useState("");

  const [sleep, setSleep] = useState("");

  const [stress, setStress] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      mood,
      sleep,
      stress,
    });

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <Card className="p-8 md:p-12 text-center">
          <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
            <CheckCircle2 size={36} className="text-emerald-600" />
          </div>

          <h1 className="text-2xl font-bold text-slate-800 mt-5">
            Check-In Submitted
          </h1>

          <p className="text-slate-500 mt-2 max-w-md mx-auto">
            Thank you for taking a moment to check in. Your response has been
            recorded securely.
          </p>

          <Button
            onClick={() => navigate("/dashboard")}
            className="mt-6 bg-emerald-600 hover:bg-emerald-700"
          >
            Back to Dashboard
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Heading */}
      <div className="mb-6">
        <p className="text-sm font-semibold text-emerald-600">DAILY WELLNESS</p>

        <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mt-1">
          Daily Wellness Check-In
        </h1>

        <p className="text-slate-500 mt-1">
          Take a moment to reflect on how you're doing today.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mood */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
              <Smile size={22} className="text-emerald-600" />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">
                How are you feeling today?
              </h2>

              <p className="text-sm text-slate-500">
                Select the option that best describes your mood.
              </p>
            </div>
          </div>

          <MoodSelector value={mood} onChange={setMood} />
        </Card>

        {/* Sleep */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
              <Moon size={22} className="text-indigo-600" />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">How did you sleep?</h2>

              <p className="text-sm text-slate-500">
                Approximately how many hours did you sleep?
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {["Less than 4 hrs", "4–6 hrs", "6–8 hrs", "More than 8 hrs"].map(
              (option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSleep(option)}
                  className={`p-4 rounded-xl border text-sm font-medium transition ${
                    sleep === option
                      ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                      : "border-slate-200 hover:border-indigo-300"
                  }`}
                >
                  {option}
                </button>
              ),
            )}
          </div>
        </Card>

        {/* Stress */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <Activity size={22} className="text-orange-600" />
            </div>

            <div>
              <h2 className="font-bold text-slate-800">Stress Level</h2>

              <p className="text-sm text-slate-500">
                Rate your current stress level from 1 to 5.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map((level) => (
              <button
                key={level}
                type="button"
                onClick={() => setStress(level)}
                className={`h-14 rounded-xl border font-bold transition ${
                  stress === level
                    ? "border-orange-500 bg-orange-50 text-orange-700"
                    : "border-slate-200 hover:border-orange-300"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>Low</span>
            <span>High</span>
          </div>
        </Card>

        {/* Optional notes */}
        <Card className="p-6">
          <Label htmlFor="notes">
            Anything else you'd like to share?{" "}
            <span className="text-slate-400 font-normal">(Optional)</span>
          </Label>

          <Input
            id="notes"
            className="mt-2"
            placeholder="You can add a short note..."
          />
        </Card>

        {/* Submit */}
        <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate("/dashboard")}
          >
            Cancel
          </Button>

          <Button
            type="submit"
            disabled={!mood || !sleep || !stress}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Submit Daily Check-In
          </Button>
        </div>
      </form>
    </div>
  );
}

export default WellnessCheckIn;
