import { ShieldCheck } from "lucide-react";

import { navItems } from "@/assets/data";

export default function AdminSidebar({ activePage, onNavigate }) {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 flex-col bg-slate-950 text-white lg:flex">
      <div className="border-b border-white/10 px-6 py-7">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500/20 text-blue-200">
            <ShieldCheck size={25} />
          </div>
          <div>
            <p className="font-bold tracking-wide">FORCE WELFARE AI</p>
            <p className="text-xs text-slate-400">Administration portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 p-4" aria-label="Admin navigation">
        {navItems.map(([Icon, page]) => (
          <button
            key={page}
            type="button"
            onClick={() => onNavigate(page)}
            className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
              activePage === page
                ? "bg-blue-600 text-white"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Icon size={19} />
            {page}
          </button>
        ))}
      </nav>
    </aside>
  );
}
