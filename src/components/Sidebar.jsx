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
    localStorage.removeItem("userRole");
    navigate("/login");
  };

  return (
    <aside className="flex w-64 min-h-screen bg-gradient-to-b from-emerald-950 to-teal-900 text-white flex-col fixed left-0 top-0 z-40">
      {/* Logo / Brand */}
      <div className="px-6 py-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
            <ShieldCheck size={24} />
          </div>

          <div>
            <h1 className="font-bold text-lg">Personnel Care</h1>
            <p className="text-xs text-emerald-200">Wellness Monitoring</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-300">
          Main Menu
        </p>

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive
                    ? "bg-white/15 text-white shadow-sm"
                    : "text-emerald-100 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </NavLink>
          );
        })}

        {/* Resources */}
        <div className="pt-6">
          <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            Other
          </p>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-100 hover:bg-white/10 hover:text-white transition-all">
            <BookOpen size={20} />
            <span className="text-sm font-medium">Resources</span>
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-100 hover:bg-white/10 hover:text-white transition-all">
            <User size={20} />
            <span className="text-sm font-medium">My Profile</span>
          </button>
        </div>
      </nav>

      {/* Wellness Message */}
      <div className="mx-4 mb-5 p-4 rounded-xl bg-white/10 border border-white/10">
        <p className="text-sm font-medium">Your wellbeing matters.</p>

        <p className="text-xs text-emerald-200 mt-1">
          Take a moment to complete your daily check-in.
        </p>
      </div>

      {/* Logout */}
      <div className="px-4 pb-6">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-emerald-100 hover:bg-red-500/20 hover:text-white transition-all"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
