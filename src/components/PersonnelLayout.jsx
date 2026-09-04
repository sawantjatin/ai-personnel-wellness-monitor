import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const PersonnelLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar />

      {/* Mobile Sidebar */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative z-10 w-64 h-full">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Main */}
      <main className="md:ml-64 min-h-screen">
        <Header onMenuClick={() => setMobileMenuOpen(true)} />

        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default PersonnelLayout;
