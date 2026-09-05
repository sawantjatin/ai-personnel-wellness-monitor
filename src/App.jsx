import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WellnessCheckIn from "./pages/WellnessCheckIn";
import RequestSupport from "./pages/RequestSupport";
import AdminDashboard from "./pages/AdminDashboard";
import PersonnelLayout from "./components/PersonnelLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PersonnelLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/check-in" element={<WellnessCheckIn />} />
          <Route path="/request-support" element={<RequestSupport />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
