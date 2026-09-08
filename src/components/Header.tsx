"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [search, setSearch] = useState("");

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Products",
      href: "/products",
    },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    if (!search.trim()) {
      return;
    }

    window.location.href = `/products?search=${encodeURIComponent(
      search.trim()
    )}`;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">

      {/* ================= TOP ANNOUNCEMENT ================= */}
      <div className="hidden bg-slate-900 text-white sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs lg:px-8">

          <p className="text-slate-300">
            🚚 Free delivery on orders above ₹999
          </p>

          <div className="flex items-center gap-5 text-slate-300">
            <span>24/7 Customer Support</span>
            <span>Secure Payments 🔒</span>
          </div>

        </div>
      </div>

      {/* ================= MAIN HEADER ================= */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex h-20 items-center justify-between gap-6">

          {/* ================= LOGO ================= */}
          <Link
            href="/"
            className="group flex shrink-0 items-center gap-3"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-xl font-black text-white shadow-md transition group-hover:scale-105">
              S
            </div>

            <div className="hidden sm:block">
              <h1 className="text-xl font-extrabold tracking-tight text-slate-900">
                Shop<span className="text-blue-600">Sphere</span>
              </h1>

              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-400">
                Smart Shopping
              </p>
            </div>

          </Link>


          {/* ================= DESKTOP NAVIGATION ================= */}
          <nav className="hidden items-center gap-1 lg:flex">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  isActive(item.href)
                    ? "text-blue-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                {item.name}

                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-blue-600" />
                )}
              </Link>
            ))}

          </nav>


          {/* ================= SEARCH ================= */}
          <form
            onSubmit={handleSearch}
            className="hidden max-w-md flex-1 md:flex"
          >

            <div className="relative w-full">

              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
                🔍
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products, brands..."
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
              />

            </div>

          </form>


          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-2">

            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative hidden h-10 w-10 items-center justify-center rounded-xl text-xl text-slate-600 transition hover:bg-red-50 hover:text-red-500 sm:flex"
            >
              ♡
            </Link>


            {/* Cart */}
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-xl text-xl text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
            >
              🛒

              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
                0
              </span>
            </Link>


            {/* Divider */}
            <div className="mx-2 hidden h-8 w-px bg-slate-200 sm:block" />


            {/* Login */}
            <Link
              href="/login"
              className={`hidden rounded-lg px-4 py-2.5 text-sm font-semibold transition sm:block ${
                isActive("/login")
                  ? "bg-blue-50 text-blue-600"
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
              }`}
            >
              Login
            </Link>


            {/* Sign Up */}
            <Link
              href="/signup"
              className={`hidden rounded-lg px-5 py-2.5 text-sm font-bold transition sm:block ${
                isActive("/signup")
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-blue-600 text-white shadow-sm hover:bg-blue-700 hover:shadow-md"
              }`}
            >
              Sign Up
            </Link>


            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenu(!mobileMenu)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenu}
              className="flex h-10 w-10 items-center justify-center rounded-xl text-xl text-slate-700 transition hover:bg-slate-100 lg:hidden"
            >
              {mobileMenu ? "✕" : "☰"}
            </button>

          </div>

        </div>


        {/* ================= MOBILE SEARCH ================= */}
        <form
          onSubmit={handleSearch}
          className="pb-4 md:hidden"
        >

          <div className="relative">

            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg text-slate-400">
              🔍
            </span>

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
            />

          </div>

        </form>


        {/* ================= MOBILE MENU ================= */}
        {mobileMenu && (
          <div className="border-t border-slate-100 py-4 lg:hidden">

            <nav className="space-y-1">

              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span>{item.name}</span>

                  {isActive(item.href) && (
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </Link>
              ))}


              <Link
                href="/wishlist"
                onClick={() => setMobileMenu(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive("/wishlist")
                    ? "bg-red-50 text-red-500"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>♡</span>
                Wishlist
              </Link>


              <Link
                href="/cart"
                onClick={() => setMobileMenu(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive("/cart")
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >

                <span className="flex items-center gap-3">
                  <span>🛒</span>
                  Cart
                </span>

                <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">
                  0
                </span>

              </Link>


              <div className="my-3 border-t border-slate-100" />


              <Link
                href="/login"
                onClick={() => setMobileMenu(false)}
                className={`block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive("/login")
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                Login
              </Link>


              <Link
                href="/signup"
                onClick={() => setMobileMenu(false)}
                className="block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Create Account
              </Link>

            </nav>

          </div>
        )}

      </div>

    </header>
  );
}