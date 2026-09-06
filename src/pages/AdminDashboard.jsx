import { useState } from "react";
import { BrainCircuit, ShieldCheck, TriangleAlert, Users } from "lucide-react";

import AdminSidebar from "@/components/AdminSidebar";
import AlertList from "@/components/AlertList";
import GenericPage from "@/components/Generic";
import PersonnelList from "@/components/PersonnelList";
import TrendCard from "@/components/TrendCard";
import { alerts } from "@/assets/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const metrics = [
  { title: "Total Personnel", value: "2,450", note: "+38 this month", Icon: Users, tone: "blue" },
  { title: "Needs Attention", value: "18", note: "+5 this week", Icon: TriangleAlert, tone: "amber" },
  { title: "Overall Wellness", value: "87%", note: "Good", Icon: ShieldCheck, tone: "green" },
  { title: "Active Alerts", value: "7", note: "View all alerts", Icon: TriangleAlert, tone: "purple" },
];

const tones = {
  blue: "bg-blue-50 text-blue-700",
  amber: "bg-amber-50 text-amber-700",
  green: "bg-emerald-50 text-emerald-700",
  purple: "bg-violet-50 text-violet-700",
};

function AdminOverview({ onNavigate }) {
  return (
    <div className="mx-auto max-w-7xl space-y-5">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm font-semibold text-blue-700">ADMINISTRATION</p>
          <h1 className="text-2xl font-bold text-slate-800">Welfare overview</h1>
          <p className="text-sm text-slate-500">Monitor personnel wellness and emerging concerns.</p>
        </div>
        <select aria-label="Reporting period" className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm">
          <option>September 2026</option>
          <option>August 2026</option>
        </select>
      </div>

      <section className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        {metrics.map(({ title, value, note, Icon, tone }) => (
          <Card key={title} className="border-slate-200 shadow-sm">
            <CardContent className="p-4">
              <div className={`grid h-9 w-9 place-items-center rounded-lg ${tones[tone]}`}><Icon size={19} /></div>
              <p className="mt-3 text-xs text-slate-500">{title}</p>
              <p className="text-2xl font-bold text-slate-800">{value}</p>
              <p className="mt-1 text-xs text-emerald-700">{note}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.6fr_1fr]">
        <Card className="border-slate-200 shadow-sm">
          <CardHeader><CardTitle>Wellness Trend</CardTitle></CardHeader>
          <CardContent><TrendCard /></CardContent>
        </Card>
        <Card className="border-slate-200 shadow-sm">
          <CardHeader><CardTitle>Recent Alerts</CardTitle></CardHeader>
          <CardContent><AlertList data={alerts} /></CardContent>
        </Card>
      </section>

      <Card className="border-slate-200 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between space-y-0">
          <CardTitle>Personnel needing review</CardTitle>
          <button type="button" onClick={() => onNavigate("Personnel List")} className="text-sm font-medium text-blue-700">View personnel</button>
        </CardHeader>
        <CardContent><PersonnelList /></CardContent>
      </Card>

      <Card className="border-blue-100 bg-blue-50 shadow-sm">
        <CardContent className="flex gap-3 p-4 text-sm leading-6 text-slate-700">
          <BrainCircuit className="shrink-0 text-blue-700" />
          <p><strong>AI insight:</strong> Unit Bravo shows an increased workload and reduced leave utilization. Review workload distribution and schedule welfare check-ins.</p>
        </CardContent>
      </Card>
    </div>
  );
}

export default function AdminDashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  const content = activePage === "Dashboard"
    ? <AdminOverview onNavigate={setActivePage} />
    : activePage === "Personnel List"
      ? <PersonnelList />
      : <GenericPage page={activePage} />;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <AdminSidebar activePage={activePage} onNavigate={setActivePage} />
      <main className="min-w-0 flex-1 p-4 md:p-8">{content}</main>
    </div>
  );
}
