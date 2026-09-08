"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-slate-950 text-white">

      {/* Newsletter */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div className="max-w-xl">
              <div className="mb-3 inline-flex rounded-full bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400">
                Stay Updated
              </div>

              <h2 className="text-2xl font-bold sm:text-3xl">
                Get the latest deals & offers
              </h2>

              <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
                Subscribe to our newsletter and be the first to know about
                new products, exclusive offers and special discounts.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex w-full max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="min-w-0 flex-1 rounded-l-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
              />

              <button
                type="submit"
                className="flex items-center gap-2 rounded-r-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold transition hover:bg-blue-700"
              >
                Subscribe
                <span>→</span>
              </button>
            </form>

          </div>

        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link href="/" className="inline-flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-xl font-bold shadow-lg">
                S
              </div>

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Shop<span className="text-blue-500">Sphere</span>
                </h2>

                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Smart Shopping
                </p>
              </div>

            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Your trusted destination for quality products, great prices and
              a seamless shopping experience. Discover products you&apos;ll
              love, all in one place.
            </p>

            {/* Social Media */}
            <div className="mt-7 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-slate-400 transition hover:bg-blue-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-slate-400 transition hover:bg-pink-600 hover:text-white"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-slate-400 transition hover:bg-sky-500 hover:text-white"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-slate-400 transition hover:bg-red-600 hover:text-white"
              >
                ▶
              </a>

            </div>

          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Shop
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/products"
                  className="text-slate-400 transition hover:text-white"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=Electronics"
                  className="text-slate-400 transition hover:text-white"
                >
                  Electronics
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=Fashion"
                  className="text-slate-400 transition hover:text-white"
                >
                  Fashion
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=Beauty"
                  className="text-slate-400 transition hover:text-white"
                >
                  Beauty
                </Link>
              </li>

              <li>
                <Link
                  href="/products?category=Home%20%26%20Living"
                  className="text-slate-400 transition hover:text-white"
                >
                  Home & Living
                </Link>
              </li>

            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Customer Service
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  href="/cart"
                  className="text-slate-400 transition hover:text-white"
                >
                  Shopping Cart
                </Link>
              </li>

              <li>
                <Link
                  href="/wishlist"
                  className="text-slate-400 transition hover:text-white"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  href="/shipping"
                  className="text-slate-400 transition hover:text-white"
                >
                  Shipping Information
                </Link>
              </li>

              <li>
                <Link
                  href="/returns"
                  className="text-slate-400 transition hover:text-white"
                >
                  Returns & Refunds
                </Link>
              </li>

              <li>
                <Link
                  href="/help"
                  className="text-slate-400 transition hover:text-white"
                >
                  Help Center
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <ul className="space-y-5 text-sm">

              <li className="flex items-start gap-3">
                <span className="mt-0.5 text-lg text-blue-500">
                  📍
                </span>

                <span className="leading-6 text-slate-400">
                  India
                </span>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-lg text-blue-500">
                  📞
                </span>

                <a
                  href="tel:+919999999999"
                  className="text-slate-400 transition hover:text-white"
                >
                  +91 7828139380
                </a>
              </li>

              <li className="flex items-center gap-3">
                <span className="text-lg text-blue-500">
                  ✉
                </span>

                <a
                  href="mailto:support@shopsphere.com\"
                  className="break-all text-slate-400 transition hover:text-white"
                >
                 vivekkushwaha285@gmail.com
                </a>
              </li>

            </ul>

            <p className="mt-5 text-xs text-slate-500">
              Mon - Sat: 9:00 AM - 7:00 PM
            </p>

          </div>

        </div>

        {/* Features */}
        <div className="mt-14 grid gap-4 border-t border-slate-800 pt-10 sm:grid-cols-2 lg:grid-cols-4">

          <div className="flex items-center gap-4 rounded-xl bg-slate-900 p-4">
            <div className="text-2xl">🔒</div>

            <div>
              <h4 className="text-sm font-semibold">
                Secure Shopping
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                100% secure payments
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-slate-900 p-4">
            <div className="text-2xl">🚚</div>

            <div>
              <h4 className="text-sm font-semibold">
                Fast Delivery
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                Quick & reliable shipping
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-slate-900 p-4">
            <div className="text-2xl">🎧</div>

            <div>
              <h4 className="text-sm font-semibold">
                24/7 Support
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                We&apos;re here to help
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-xl bg-slate-900 p-4">
            <div className="text-2xl">💳</div>

            <div>
              <h4 className="text-sm font-semibold">
                Easy Payments
              </h4>

              <p className="mt-1 text-xs text-slate-500">
                Multiple payment options
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-sm sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">

          <p className="text-slate-500">
            © {currentYear} ShopSphere. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">

            <Link
              href="/privacy"
              className="text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-slate-500 transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/cookies"
              className="text-slate-500 transition hover:text-white"
            >
              Cookie Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}