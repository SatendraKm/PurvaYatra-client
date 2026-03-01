import { Link } from "react-router-dom";
import { APP_CONFIG, NAV_LINKS, EAST_INDIA_STATES } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🌏</span>
              <span className="font-bold text-xl text-amber-400">{APP_CONFIG.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">{APP_CONFIG.tagline}</p>
            <div className="flex gap-3">
              {["Facebook", "Instagram", "Twitter", "YouTube"].map((s) => (
                <a
                  key={s}
                  href="#"
                  title={s}
                  className="w-8 h-8 rounded-full bg-stone-800 hover:bg-amber-500 hover:text-stone-900 flex items-center justify-center text-xs transition-colors"
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Explore
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* States */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              States
            </h4>
            <ul className="space-y-2">
              {EAST_INDIA_STATES.slice(0, 8).map((s) => (
                <li key={s}>
                  <Link
                    to={`/destinations?state=${encodeURIComponent(s)}`}
                    className="text-sm hover:text-amber-400 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>📧 {APP_CONFIG.email}</li>
              <li>📞 {APP_CONFIG.phone}</li>
              <li>🕒 Mon–Sat, 9am–6pm IST</li>
            </ul>
            <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
              <p className="text-xs text-amber-400 font-medium">
                🌿 Responsible Tourism Pledge
              </p>
              <p className="text-xs mt-1">
                We promote eco-friendly and community-first travel experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs">
          <p>© {new Date().getFullYear()} {APP_CONFIG.name}. Made with ❤️ for East India.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
