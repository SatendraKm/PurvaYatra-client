import { TOURISM_CATEGORIES, DESTINATIONS } from "../constants";
import { SectionHeader } from "../components/UI";
import DestinationCard from "../components/DestinationCard";
import { useState } from "react";

export default function ExperiencesPage() {
  const [activeCategory, setActiveCategory] = useState(TOURISM_CATEGORIES[0]);

  const categoryDestinations = DESTINATIONS.filter((d) =>
    d.category.includes(activeCategory.id)
  );

  return (
    <div className="bg-stone-950 min-h-screen text-white pt-20">
      <div className="bg-stone-900 border-b border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What's Your Style"
            title="Experiences"
            subtitle="Choose the kind of journey that speaks to your soul"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Category tabs */}
        <div className="flex overflow-x-auto gap-3 pb-4 mb-8">
          {TOURISM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-2xl border text-sm font-medium transition-all ${
                activeCategory.id === cat.id
                  ? "bg-amber-500 border-amber-500 text-stone-900"
                  : "bg-stone-800 border-stone-700 text-stone-300 hover:border-amber-500/40"
              }`}
            >
              <span className="text-xl">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Experience detail banner */}
        <div className="bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-5xl">{activeCategory.icon}</span>
            <div>
              <h2 className="text-2xl font-bold text-white">{activeCategory.label}</h2>
              <p className="text-stone-400 text-sm mt-1">
                {categoryDestinations.length} destination{categoryDestinations.length !== 1 ? "s" : ""} offering{" "}
                {activeCategory.label.toLowerCase()} experiences across East India
              </p>
            </div>
          </div>
        </div>

        {categoryDestinations.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-5xl mb-4">{activeCategory.icon}</p>
            <p className="text-stone-400">No destinations found for this category yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryDestinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
