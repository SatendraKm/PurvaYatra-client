// Shared UI components

export function Badge({ children, color = "amber" }) {
  const colors = {
    amber: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    green: "bg-green-500/10 text-green-400 border-green-500/20",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    red: "bg-red-500/10 text-red-400 border-red-500/20",
    stone: "bg-stone-700 text-stone-300 border-stone-600",
  };
  return (
    <span
      className={`inline-block text-xs px-2 py-0.5 rounded-full border font-medium ${colors[color]}`}
    >
      {children}
    </span>
  );
}

export function StarRating({ rating, reviews }) {
  return (
    <div className="flex items-center gap-1.5">
      <div className="flex text-amber-400 text-sm">
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={i < Math.round(rating) ? "text-amber-400" : "text-stone-600"}>
            ★
          </span>
        ))}
      </div>
      <span className="text-sm font-semibold text-white">{rating}</span>
      {reviews && (
        <span className="text-xs text-stone-500">({reviews.toLocaleString()})</span>
      )}
    </div>
  );
}

export function SearchBar({ value, onChange, placeholder = "Search...", className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-9 pr-4 py-2.5 bg-stone-800 border border-stone-700 rounded-xl text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm"
      />
    </div>
  );
}

export function SectionHeader({ label, title, subtitle, className = "" }) {
  return (
    <div className={`text-center ${className}`}>
      {label && (
        <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-2">
          {label}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{title}</h2>
      {subtitle && (
        <p className="text-stone-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}

export function EmptyState({ icon = "🔍", message = "Nothing found." }) {
  return (
    <div className="text-center py-16">
      <div className="text-5xl mb-4">{icon}</div>
      <p className="text-stone-400">{message}</p>
    </div>
  );
}

export function FilterChip({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
        active
          ? "bg-amber-500 border-amber-500 text-stone-900"
          : "bg-stone-800 border-stone-700 text-stone-300 hover:border-amber-500 hover:text-amber-400"
      }`}
    >
      {label}
    </button>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-stone-800/60 border border-stone-700/60 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-10 h-10 border-4 border-amber-500/30 border-t-amber-500 rounded-full animate-spin" />
    </div>
  );
}
