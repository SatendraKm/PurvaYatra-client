import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DESTINATIONS,
  PLATFORM_STATS,
  TOURISM_CATEGORIES,
  TESTIMONIALS,
  TRIP_PACKAGES,
  FUN_FACTS,
} from "../constants";
import DestinationCard from "../components/DestinationCard";
import { SectionHeader, StarRating } from "../components/UI";
import { randomItems } from "../utils";

const HERO_DESTINATIONS = DESTINATIONS.filter((d) =>
  ["Darjeeling", "Konark", "Puri", "Bodhgaya"].includes(d.name),
);

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const featuredDestinations = randomItems(DESTINATIONS, 6);
  const randomFacts = randomItems(FUN_FACTS, 3);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/destinations?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="bg-stone-950 text-white min-h-screen">
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=1600&q=80"
            alt="East India"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/40 to-stone-950" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 w-full">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <span>✦</span> Discover East India
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Where Every <span className="text-amber-400">Journey</span> Tells
              a Story
            </h1>
            <p className="text-stone-300 text-lg sm:text-xl mb-8 max-w-2xl leading-relaxed">
              From the temples of Konark to the hills of Darjeeling, the beaches
              of Puri to the mangroves of Sundarbans — discover the soul of
              Eastern India.
            </p>

            {/* Search */}
            <form onSubmit={handleSearch} className="flex gap-2 max-w-xl">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations, states, experiences..."
                className="flex-1 px-5 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                Search
              </button>
            </form>

            <div className="flex flex-wrap gap-2 mt-4">
              {["Darjeeling", "Puri", "Konark", "Bodhgaya", "Sundarbans"].map(
                (place) => (
                  <Link
                    key={place}
                    to={`/destinations?q=${place}`}
                    className="text-xs px-3 py-1.5 bg-white/10 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 rounded-full text-stone-300 hover:text-amber-400 transition-all"
                  >
                    {place}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 max-w-2xl">
            {PLATFORM_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl mb-1">{stat.icon}</div>
                <div className="text-2xl font-extrabold text-amber-400">
                  {stat.value}
                </div>
                <div className="text-xs text-stone-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Categories ─── */}
      <section className="py-16 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
            {TOURISM_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={`/destinations?category=${cat.id}`}
                className="flex-shrink-0 flex flex-col items-center gap-2 px-6 py-4 bg-stone-800/60 hover:bg-amber-500/10 border border-stone-700 hover:border-amber-500/40 rounded-2xl transition-all group"
              >
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-medium text-stone-300 group-hover:text-amber-400 whitespace-nowrap transition-colors">
                  {cat.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Destinations ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader
              label="Top Picks"
              title="Featured Destinations"
              subtitle="Handpicked gems across East India's diverse landscapes"
              className="text-left"
            />
            <Link
              to="/destinations"
              className="hidden sm:flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
            >
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-900 font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Explore All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Trip Packages ─── */}
      <section className="py-20 bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Curated Journeys"
            title="Ready-Made Trip Packages"
            subtitle="Let us plan the perfect East India adventure for you"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRIP_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-stone-800/60 border border-stone-700 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">
                      {pkg.duration}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white text-lg mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-stone-400 text-sm mb-3">
                    {pkg.states.join(" · ")}
                  </p>
                  <ul className="space-y-1 mb-4">
                    {pkg.highlights.slice(0, 3).map((h) => (
                      <li
                        key={h}
                        className="text-xs text-stone-400 flex items-center gap-2"
                      >
                        <span className="text-amber-400">✓</span> {h}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-stone-500">
                        Starting from
                      </div>
                      <div className="text-xl font-bold text-amber-400">
                        {pkg.price}
                      </div>
                    </div>
                    <Link
                      to="/plan-trip"
                      className="bg-amber-500/10 hover:bg-amber-500 hover:text-stone-900 text-amber-400 border border-amber-500/30 hover:border-amber-500 text-sm font-semibold px-4 py-2 rounded-lg transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Fun Facts Banner ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Did You Know?"
            title="Hidden Wonders of Eastern & Island India"
            className="mb-10"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {randomFacts.map((fact) => (
              <div
                key={fact.id}
                className="bg-gradient-to-br from-stone-800 to-stone-800/50 border border-stone-700 rounded-2xl p-6"
              >
                <div className="text-4xl mb-3">{fact.emoji}</div>
                <p className="text-stone-300 text-sm leading-relaxed mb-3">
                  {fact.fact}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-medium">
                    {fact.state}
                  </span>
                  <span className="text-xs text-stone-500 bg-stone-700 px-2 py-0.5 rounded-full">
                    {fact.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/fun-facts"
              className="text-amber-400 hover:text-amber-300 font-medium text-sm transition-colors"
            >
              Discover All Fun Facts →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="py-20 bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Traveller Stories"
            title="What Our Guests Say"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-stone-800/60 border border-stone-700 rounded-2xl p-6"
              >
                <StarRating rating={t.rating} />
                <p className="text-stone-300 text-sm leading-relaxed my-4">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 border-t border-stone-700 pt-4">
                  <div className="w-9 h-9 rounded-full bg-amber-500 text-stone-900 font-bold text-sm flex items-center justify-center">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">
                      {t.name}
                    </div>
                    <div className="text-stone-500 text-xs">
                      {t.city} · {t.destination}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-amber-500/10 border border-amber-500/20 rounded-3xl p-12">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              Ready to Explore?
            </h2>
            <p className="text-stone-400 mb-8 text-lg">
              Plan your perfect East India journey with our expert guides,
              curated itineraries, and local insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/plan-trip"
                className="bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold px-8 py-4 rounded-full transition-colors text-lg"
              >
                Plan My Trip
              </Link>
              <Link
                to="/destinations"
                className="bg-white/5 hover:bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-full transition-colors text-lg"
              >
                Browse Destinations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
