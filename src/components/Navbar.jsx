import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { APP_CONFIG, NAV_LINKS } from "../constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  const navBg =
    scrolled || !isHome
      ? "bg-stone-900/95 backdrop-blur-md shadow-lg"
      : "bg-transparent";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div>
              <span className="font-bold text-xl text-amber-400 tracking-tight">
                {APP_CONFIG.name}
              </span>
              <span className="hidden sm:block text-xs text-stone-400 -mt-1 leading-none">
                East India Tourism
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-amber-400 bg-amber-400/10"
                      : "text-stone-300 hover:text-amber-300 hover:bg-white/5"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/plan-trip"
              className="hidden sm:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold text-sm px-4 py-2 rounded-full transition-colors"
            >
              Plan My Trip
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-stone-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-stone-900/98 border-t border-stone-700 px-4 py-3">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-lg text-sm font-medium mb-1 transition-colors ${
                  isActive
                    ? "text-amber-400 bg-amber-400/10"
                    : "text-stone-300 hover:text-amber-300 hover:bg-white/5"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/plan-trip"
            className="block mt-3 text-center bg-amber-500 text-stone-900 font-semibold text-sm px-4 py-2 rounded-full"
          >
            Plan My Trip
          </Link>
        </div>
      )}
    </header>
  );
}
