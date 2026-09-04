import { Smile, SmilePlus, Meh, Frown, Angry } from "lucide-react";

const moods = [
  {
    value: "great",
    label: "Great",
    icon: SmilePlus,
    color: "bg-emerald-500",
  },
  {
    value: "good",
    label: "Good",
    icon: Smile,
    color: "bg-lime-500",
  },
  {
    value: "okay",
    label: "Okay",
    icon: Meh,
    color: "bg-yellow-500",
  },
  {
    value: "low",
    label: "Low",
    icon: Frown,
    color: "bg-orange-500",
  },
  {
    value: "very-stressed",
    label: "Very Stressed",
    icon: Angry,
    color: "bg-red-500",
  },
];

const MoodSelector = ({ value, onChange }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
      {moods.map((mood) => {
        const Icon = mood.icon;
        const selected = value === mood.value;

        return (
          <button
            key={mood.value}
            type="button"
            onClick={() => onChange(mood.value)}
            className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border transition-all ${
              selected
                ? "border-emerald-500 bg-emerald-50 shadow-sm scale-[1.02]"
                : "border-slate-200 bg-white hover:border-emerald-300"
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full ${mood.color} flex items-center justify-center text-white`}
            >
              <Icon size={26} />
            </div>

            <span className="text-sm font-medium text-slate-700">
              {mood.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default MoodSelector;
