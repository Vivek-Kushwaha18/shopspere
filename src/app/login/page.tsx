import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function LoginPage() {
  return (
    <div className="min-h-screen">

      <Header />

      <main className="flex min-h-[70vh] items-center justify-center">
        <div className="w-96 rounded-lg p-6 shadow-lg">

          <h2 className="mb-5 text-center text-2xl font-bold">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="mb-3 w-full rounded border p-3"
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-3 w-full rounded border p-3"
          />

          <button className="w-full rounded bg-blue-600 p-3 text-white">
            Login
          </button>

          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600">
              Signup
            </a>
          </p>

        </div>
      </main>

      <Footer />

    </div>
  );
}