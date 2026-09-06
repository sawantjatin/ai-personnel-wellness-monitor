import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LockKeyhole, User, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Admin Login
    if (loginId === "admin001" && password === "admin123") {
      localStorage.setItem("userRole", "admin");
      navigate("/admin");
      return;
    }

    // Personnel Login
    if (loginId === "personnel001" && password === "personnel123") {
      localStorage.setItem("userRole", "personnel");
      navigate("/dashboard");
      return;
    }

    setError("Invalid Login ID or Password");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="text-center text-white mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-white/10 p-4 rounded-2xl">
              <ShieldCheck size={42} />
            </div>
          </div>

          <h1 className="text-3xl font-bold">FORCE WELFARE AI</h1>

          <p className="text-emerald-100 mt-2">
            Personnel Stress & Welfare Monitoring System
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-7">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">
              Welcome Back
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Sign in to access your welfare dashboard
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Login ID */}
            <div className="space-y-2">
              <Label htmlFor="loginId">Login ID</Label>

              <div className="relative">
                <User
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <Input
                  id="loginId"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  placeholder="Enter Login ID"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">
                {error}
              </p>
            )}

            <Button
              type="submit"
              className="w-full bg-emerald-700 hover:bg-emerald-800"
            >
              Sign In
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-7 border-t pt-5">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
              Demo Credentials
            </p>

            <div className="space-y-3">
              {/* Admin */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-3">
                <p className="text-sm font-semibold text-blue-900">Admin</p>

                <p className="text-xs text-gray-600 mt-1">
                  Login ID: <span className="font-medium">admin001</span>
                </p>

                <p className="text-xs text-gray-600">
                  Password: <span className="font-medium">admin123</span>
                </p>
              </div>

              {/* Personnel */}
              <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3">
                <p className="text-sm font-semibold text-emerald-900">
                  Personnel
                </p>

                <p className="text-xs text-gray-600 mt-1">
                  Login ID: <span className="font-medium">personnel001</span>
                </p>

                <p className="text-xs text-gray-600">
                  Password: <span className="font-medium">personnel123</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-emerald-100 mt-6">
          Secure • Private • Welfare Focused
        </p>
      </div>
    </div>
  );
};

export default Login;
