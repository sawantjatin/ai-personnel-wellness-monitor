import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

const PersonnelLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div className="relative z-10 w-64 h-full">
            <Sidebar />

            {/* Close Button */}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-[-45px] p-2 rounded-lg bg-white shadow"
            >
              <X size={22} />
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="md:ml-64 min-h-screen">
        {/* Header */}
        <Header onMenuClick={() => setMobileMenuOpen(true)} />

        {/* Page Content */}
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="md:hidden fixed bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-emerald-900 text-white shadow-lg flex items-center justify-center"
      >
        <Menu size={24} />
      </button>
    </div>
  );
};

export default PersonnelLayout;
