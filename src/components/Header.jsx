import { Menu, Bell, UserCircle, ChevronDown } from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-5 md:px-8">
      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 rounded-lg hover:bg-slate-100"
        >
          <Menu size={22} />
        </button>

        <div>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800">
            Hello, Officer 👋
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Take care of yourself today and every day.
          </p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-slate-100">
          <Bell size={21} className="text-slate-600" />

          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
        </button>

        <div className="hidden sm:flex items-center gap-2">
          <UserCircle size={34} className="text-emerald-700" />

          <div className="hidden lg:block">
            <p className="text-sm font-semibold text-slate-700">Officer</p>

            <p className="text-xs text-slate-400">Personnel</p>
          </div>

          <ChevronDown size={17} className="text-slate-500" />
        </div>
      </div>
    </header>
  );
}

export default Header;
