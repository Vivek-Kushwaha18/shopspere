
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Header />

      <main>

        {/* ================= HERO SECTION ================= */}
        <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-800 text-white">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">

            <div>
              <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur">
                ✨ Smart Shopping Experience
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Discover Products
                <span className="block text-blue-100">
                  You Will Love
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-blue-100">
                Shop thousands of quality products with smart recommendations,
                exclusive offers and a simple, secure shopping experience.
              </p>

              {/* Search */}
              <div className="mt-8 flex max-w-xl overflow-hidden rounded-xl bg-white shadow-xl">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="min-w-0 flex-1 px-5 py-4 text-gray-800 outline-none"
                />

                <button
                  type="button"
                  className="bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700"
                >
                  🔍 Search
                </button>
              </div>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href="/products"
                  className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50"
                >
                  Shop Now →
                </a>

                <a
                  href="/signup"
                  className="rounded-lg border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Create Account
                </a>
              </div>

              {/* Statistics */}
              <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-white/20 pt-6">
                <div>
                  <p className="text-2xl font-bold">10K+</p>
                  <p className="text-sm text-blue-200">Products</p>
                </div>

                <div>
                  <p className="text-2xl font-bold">5K+</p>
                  <p className="text-sm text-blue-200">Customers</p>
                </div>

                <div>
                  <p className="text-2xl font-bold">4.8★</p>
                  <p className="text-sm text-blue-200">Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl bg-white/10 p-3 shadow-2xl backdrop-blur">
                <Image
                  src="/images/juti.jfif"
                  alt="Online shopping"
                  width={700}
                  height={600}
                  priority
                  className="h-[350px] w-full rounded-2xl object-cover sm:h-[450px]"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-5 -left-3 rounded-2xl bg-white p-4 text-gray-900 shadow-xl sm:-left-6">
                <p className="text-sm text-gray-500">
                  Today's Offer
                </p>

                <p className="text-xl font-bold text-blue-600">
                  Up to 50% OFF
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* ================= CATEGORIES ================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="font-semibold text-blue-600">
                EXPLORE
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Shop by Category
              </h2>

              <p className="mt-2 text-slate-500">
                Find exactly what you are looking for.
              </p>
            </div>

            <a
              href="/products"
              className="hidden font-semibold text-blue-600 sm:block"
            >
              View All →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

            {[
              {
                name: "Electronics",
                image: "/images/electrical.jpg",
              },
              {
                name: "Fashion",
                image: "/images/morgane.jpg",
              },
              {
                name: "Beauty",
                image: "/images/pexels.jpg",
              },
              {
                name: "Home & Living",
                image: "/images/home.jpg",
              },
            ].map((category) => (
              <a
                key={category.name}
                href="/products"
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/20" />
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-slate-900">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-sm text-blue-600">
                    Explore →
                  </p>
                </div>
              </a>
            ))}

          </div>
        </section>


        {/* ================= TRENDING PRODUCTS ================= */}
        <section className="bg-white py-16">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="mb-8">
              <p className="font-semibold text-blue-600">
                TRENDING NOW 🔥
              </p>

              <h2 className="mt-1 text-3xl font-bold text-slate-900">
                Popular Products
              </h2>

              <p className="mt-2 text-slate-500">
                Products customers are loving right now.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {[
                {
                  name: "Wireless Headphones",
                  price: "₹2,499",
                  rating: "4.8",
                  image: "/images/headphones.jpg",
                },
                {
                  name: "Smart Watch",
                  price: "₹3,999",
                  rating: "4.7",
                  image: "/images/watch.jpg",
                },
                {
                  name: "Premium Sneakers",
                  price: "₹2,999",
                  rating: "4.9",
                  image: "/images/sneaker.jpg",
                },
                {
                  name: "Modern Backpack",
                  price: "₹1,499",
                  rating: "4.6",
                  image: "/images/bag.webp",
                },
              ].map((product) => (
                <div
                  key={product.name}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="relative h-56 overflow-hidden bg-slate-100">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-blue-600 shadow">
                      NEW
                    </span>

                  </div>

                  <div className="p-5">

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-yellow-500">
                        ★ {product.rating}
                      </span>

                      <button
                        type="button"
                        className="text-xl text-slate-400 hover:text-red-500"
                      >
                        ♡
                      </button>
                    </div>

                    <h3 className="mt-3 font-bold text-slate-900">
                      {product.name}
                    </h3>

                    <div className="mt-4 flex items-center justify-between">

                      <p className="text-xl font-extrabold text-blue-600">
                        {product.price}
                      </p>

                      <button
                        type="button"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                      >
                        Add +
                      </button>

                    </div>

                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ================= SPECIAL OFFER ================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-700 to-blue-600 p-8 text-white shadow-xl sm:p-12">

            <div className="grid items-center gap-8 md:grid-cols-2">

              <div>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
                  🎁 LIMITED TIME OFFER
                </span>

                <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
                  Get Up To 50% Off
                </h2>

                <p className="mt-4 max-w-lg text-blue-100">
                  Grab amazing deals on selected products before the offer
                  ends.
                </p>

                <a
                  href="/products"
                  className="mt-7 inline-block rounded-lg bg-white px-6 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
                >
                  Shop Offers →
                </a>

              </div>

              <div className="text-center md:text-right">

                <p className="text-6xl font-black sm:text-8xl">
                  50%
                </p>

                <p className="text-xl font-semibold text-blue-100">
                  OFF
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================= AI / DATA SCIENCE ================= */}
        <section className="bg-slate-900 py-20 text-white">

          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <div className="grid items-center gap-12 md:grid-cols-2">

              <div>

                <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
                  🤖 AI 
                </span>

                <h2 className="mt-6 text-3xl font-extrabold sm:text-4xl">
                  Shopping That Gets Smarter
                </h2>

                <p className="mt-5 leading-7 text-slate-400">
                  Our platform can use customer behavior, product data and
                  machine learning to provide personalized recommendations
                  and a better shopping experience.
                </p>

                <div className="mt-8 space-y-5">

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                      01
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Personalized Recommendations
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Discover products based on your interests.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                      02
                    </div>

                    <div>
                      <h3 className="font-bold">
                        Smart Product Analysis
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Analyze ratings, prices and customer behavior.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600">
                      03
                    </div>

                    <div>
                      <h3 className="font-bold">
                        AI Shopping Assistant
                      </h3>

                      <p className="mt-1 text-sm text-slate-400">
                        Get help finding the right products.
                      </p>
                    </div>
                  </div>

                </div>

              </div>

              <div className="rounded-3xl border border-slate-700 bg-slate-800 p-8">

                <div className="mb-6 flex items-center justify-between">
                  <h3 className="font-bold">
                    Recommendation Engine
                  </h3>

                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs text-green-400">
                    ● Active
                  </span>
                </div>

                <div className="space-y-4">

                  <div className="rounded-xl bg-slate-700 p-4">
                    <p className="text-sm text-slate-400">
                      Customer Interest
                    </p>

                    <p className="mt-1 font-semibold">
                      Electronics • Fashion • Accessories
                    </p>
                  </div>

                  <div className="rounded-xl bg-slate-700 p-4">
                    <p className="text-sm text-slate-400">
                      Recommendation Score
                    </p>

                    <p className="mt-1 text-3xl font-bold text-blue-400">
                      94%
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-600 p-4">
                    <p className="text-sm text-blue-100">
                      Recommended For You
                    </p>

                    <p className="mt-1 font-bold">
                      12 products found
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= WHY CHOOSE US ================= */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

          <div className="text-center">

            <p className="font-semibold text-blue-600">
              WHY SHOP WITH US
            </p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              Everything You Need
            </h2>

          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["🚚", "Fast Delivery", "Quick and reliable delivery."],
              ["🔒", "Secure Payment", "Safe and protected payments."],
              ["↩️", "Easy Returns", "Simple and convenient returns."],
              ["⭐", "Quality Products", "Products you can trust."],
            ].map(([icon, title, description]) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="mt-4 font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {description}
                </p>
              </div>
            ))}

          </div>

        </section>


        {/* ================= NEWSLETTER ================= */}
        <section className="bg-blue-50 py-16">

          <div className="mx-auto max-w-3xl px-6 text-center">

            <span className="text-4xl">
              📧
            </span>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Stay Updated
            </h2>

            <p className="mt-3 text-slate-500">
              Subscribe to receive new product updates and exclusive offers.
            </p>

            <div className="mx-auto mt-7 flex max-w-lg overflow-hidden rounded-xl bg-white shadow-md">

              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 px-5 py-4 outline-none"
              />

              <button
                type="button"
                className="bg-blue-600 px-6 font-semibold text-white hover:bg-blue-700"
              >
                Subscribe
              </button>

            </div>

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}
