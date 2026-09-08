"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      // Backend API will be connected here later
      console.log("Signup:", {
        name,
        email,
        password,
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert("Account created successfully!");

    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl grid md:grid-cols-2">

        {/* Left Section */}
        <div className="hidden md:flex bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-12 flex-col justify-center">

          <h1 className="text-4xl font-bold mb-4">
            Join ShopSphere
          </h1>

          <p className="text-blue-100 text-lg mb-8">
            Create your account and enjoy a better shopping experience.
          </p>

          <div className="space-y-4">

            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>Thousands of Products</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>Secure Payments</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>Fast Delivery</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xl">✓</span>
              <span>Exclusive Offers</span>
            </div>

          </div>
        </div>

        {/* Signup Form */}
        <div className="p-8 sm:p-12">

          <div className="mb-8">

            <Link
              href="/"
              className="text-2xl font-bold text-blue-600"
            >
              ShopSphere
            </Link>

            <h2 className="mt-8 text-3xl font-bold text-slate-900">
              Create Account
            </h2>

            <p className="mt-2 text-slate-500">
              Create your ShopSphere account to get started.
            </p>

          </div>

          {/* Error */}
          {error && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSignup} className="space-y-5">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 pr-20 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-blue-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>

              <p className="mt-2 text-xs text-slate-500">
                Password must contain at least 6 characters.
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>

              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-2">

              <input
                id="terms"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 rounded border-slate-300"
              />

              <label
                htmlFor="terms"
                className="text-sm text-slate-600"
              >
                I agree to the{" "}
                <Link
                  href="#"
                  className="font-medium text-blue-600"
                >
                  Terms & Conditions
                </Link>
              </label>

            </div>

            {/* Signup Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3.5 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">

            <div className="h-px flex-1 bg-slate-200" />

            <span className="text-sm text-slate-400">
              OR
            </span>

            <div className="h-px flex-1 bg-slate-200" />

          </div>

          {/* Google */}
          <button
            type="button"
            className="w-full rounded-xl border border-slate-300 py-3.5 font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Continue with Google
          </button>

          {/* Login */}
          <p className="mt-8 text-center text-sm text-slate-600">
            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-blue-600 hover:text-blue-700"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </main>
  );
}