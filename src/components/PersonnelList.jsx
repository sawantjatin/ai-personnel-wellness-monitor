import { Plus, Search, SlidersHorizontal } from "lucide-react";
import { people } from "@/assets/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export default function PersonnelList() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Personnel List</CardTitle>
        {
          <button type="button" className="rounded-lg bg-blue-700 px-3 py-2 text-sm text-white hover:bg-blue-800">
            <Plus size={15} className="inline" /> Add personnel
          </button>
        }
      </CardHeader>
      <CardContent>
      <div className="mb-4 flex gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-lg border px-3">
          <Search size={16} />
          <input
            className="w-full py-2 outline-none"
            placeholder="Search personnel"
          />
        </div>
        <button className="rounded-lg border px-3">
          <SlidersHorizontal size={16} />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-y bg-slate-50 text-xs text-slate-500">
            <tr>
              {["Personnel", "Unit", "Wellness status", "Score", "Action"].map(
                (label) => (
                  <th className="p-3" key={label}>
                    {label}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {people.map(([name, unit, status, score]) => (
              <tr className="border-b" key={name}>
                <td className="p-3 font-medium">{name}</td>
                <td>{unit}</td>
                <td>
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${status === "Stable" ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"}`}
                  >
                    {status}
                  </span>
                </td>
                <td>{score}</td>
                <td>
                  <button className="text-blue-700">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </CardContent>
    </Card>
  );
}
