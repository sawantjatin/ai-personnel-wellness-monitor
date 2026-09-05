import {
  Bell,
  BrainCircuit,
  ChartNoAxesCombined,
  CheckCircle,
  FileText,
  Settings,
} from "lucide-react";
import AlertList from "@/components/AlertList";
import { alerts } from "@/assets/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
const icons = {
  "AI Insights": BrainCircuit,
  Analytics: ChartNoAxesCombined,
  Alerts: Bell,
  Reports: FileText,
  Settings,
};
export default function GenericPage({ page }) {
  const Icon = icons[page] || CheckCircle;
  return (
    <>
      <div className="mb-7">
        <h1 className="font-display text-2xl font-extrabold">{page}</h1>
        <p className="text-sm text-slate-500">
          Demo data for the {page.toLowerCase()} workspace.
        </p>
      </div>
      {page === "Alerts" ? (
        <Card className="border-slate-200 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle>All Alerts</CardTitle>
            <button type="button" className="text-sm text-blue-700">Mark all read</button>
          </CardHeader>
          <CardContent><AlertList data={alerts} /></CardContent>
        </Card>
      ) : (
        <section className="grid gap-4 md:grid-cols-3">
          {["Today’s overview", "Latest activity", "Recommended actions"].map(
            (title, index) => (
              <Card key={title} className="border-slate-200 shadow-sm">
                <CardContent className="p-4">
                <Icon className="mb-5 text-blue-700" />
                <h2 className="font-display font-bold">{title}</h2>
                <p className="text-sm leading-6 text-slate-500">
                  This card uses sample data and is ready to connect to your
                  API.
                </p>
                <button className="mt-3 text-sm font-medium text-blue-700">
                  Explore {index + 1} →
                </button>
                </CardContent>
              </Card>
            ),
          )}
        </section>
      )}
    </>
  );
}
