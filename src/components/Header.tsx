export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold">MyProject</h1>

        <nav className="flex gap-6">
          <a href="/" className="hover:text-blue-600">
            Home
          </a>
          <a href="/login" className="hover:text-blue-600">
            Login
          </a>
          <a href="/signup" className="hover:text-blue-600">
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
}