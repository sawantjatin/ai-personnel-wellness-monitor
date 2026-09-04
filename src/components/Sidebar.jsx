import {
  LayoutDashboard,
  ClipboardCheck,
  TrendingUp,
  HeartHandshake,
  BookOpen,
  User,
  LogOut,
  ShieldCheck,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "My Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Daily Check-in",
    path: "/check-in",
    icon: ClipboardCheck,
  },
  {
    name: "My Trends",
    path: "/dashboard",
    icon: TrendingUp,
  },
  {
    name: "Request Support",
    path: "/request-support",
    icon: HeartHandshake,
  },
];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-gradient-to-b from-emerald-950 to-teal-900 text-white flex-col fixed left-0 top-0">
      {/* Logo */}
      <div className="px-6 py-7 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
            <ShieldCheck size={27} />
          </div>

          <div>
            <h1 className="font-bold text-lg tracking-wide">
              FORCE WELFARE AI
            </h1>

            <p className="text-xs text-emerald-100/70">
              Your Well-being Matters
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-emerald-500/90 text-white shadow-lg"
                    : "text-emerald-50/90 hover:bg-white/10"
                }`
              }
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          );
        })}

        {/* Resources */}
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-emerald-50/90 hover:bg-white/10 transition"
          onClick={() => alert("Resources section coming soon.")}
        >
          <BookOpen size={20} />
          <span className="text-sm font-medium">Resources</span>
        </button>

        {/* Profile */}
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-emerald-50/90 hover:bg-white/10 transition"
          onClick={() => alert("Profile section coming soon.")}
        >
          <User size={20} />
          <span className="text-sm font-medium">Profile</span>
        </button>
      </nav>

      {/* Bottom Message */}
      <div className="px-4 pb-5">
        <div className="rounded-xl border border-white/15 bg-white/5 p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={18} />
            <span className="font-semibold text-sm">Remember</span>
          </div>

          <p className="text-sm text-emerald-50/90 leading-relaxed">
            It's okay to ask for help. You are not alone.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-emerald-50/90 hover:bg-red-500/20 transition"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
