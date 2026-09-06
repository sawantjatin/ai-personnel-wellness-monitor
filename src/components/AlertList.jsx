import { alerts as defaultAlerts } from "@/assets/data";
const dotColors = {
  red: "bg-red-500",
  amber: "bg-amber-400",
  orange: "bg-orange-500",
};
export default function AlertList({ data = defaultAlerts }) {
  return (
    <div className="grid gap-2">
      {data.map(([color, title, detail, time]) => (
        <div
          className="flex gap-2 rounded-lg border border-slate-100 p-3 text-xs"
          key={title}
        >
          <i className={`mt-1 h-2 w-2 rounded-full ${dotColors[color]}`} />
          <div>
            <b className="block">{title}</b>
            <small className="text-slate-500">{detail}</small>
          </div>
          <time className="ml-auto text-[10px] text-slate-500">{time}</time>
        </div>
      ))}
    </div>
  );
}
