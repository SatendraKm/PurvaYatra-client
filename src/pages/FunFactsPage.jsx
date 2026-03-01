import { useState } from "react";
import { FUN_FACTS, EAST_INDIA_STATES } from "../constants";
import { SearchBar, SectionHeader, FilterChip, EmptyState } from "../components/UI";

const CATEGORIES = ["All", "Geography", "Wildlife", "Culture", "Food", "History", "Architecture", "Nature", "Sustainability"];

export default function FunFactsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [state, setState] = useState("All");

  const filtered = FUN_FACTS.filter((f) => {
    const matchesQuery =
      !query ||
      f.fact.toLowerCase().includes(query.toLowerCase()) ||
      f.state.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "All" || f.category === category;
    const matchesState = state === "All" || f.state === state;
    return matchesQuery && matchesCategory && matchesState;
  });

  return (
    <div className="bg-stone-950 min-h-screen text-white pt-20">
      <div className="bg-stone-900 border-b border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Did You Know?"
            title="East India Fun Facts"
            subtitle={`${FUN_FACTS.length} incredible facts about East India's nature, culture, and history`}
          />
          <div className="mt-8 max-w-xl mx-auto">
            <SearchBar value={query} onChange={setQuery} placeholder="Search facts..." />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="space-y-4 mb-8">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <FilterChip
                  key={cat}
                  label={cat}
                  active={category === cat}
                  onClick={() => setCategory(cat)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">State</p>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="bg-stone-800 border border-stone-700 text-stone-300 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500"
            >
              <option value="All">All States</option>
              {EAST_INDIA_STATES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="text-stone-500 text-sm mb-6">{filtered.length} fact{filtered.length !== 1 ? "s" : ""} found</p>

        {filtered.length === 0 ? (
          <EmptyState icon="🤔" message="No facts match your search. Try different filters!" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((fact) => (
              <div
                key={fact.id}
                className="bg-stone-800/60 border border-stone-700 rounded-2xl p-6 hover:border-amber-500/40 transition-all group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {fact.emoji}
                </div>
                <p className="text-stone-200 text-sm leading-relaxed mb-4">{fact.fact}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-amber-400 font-medium border border-amber-500/30 bg-amber-500/10 px-2 py-0.5 rounded-full">
                    {fact.state}
                  </span>
                  <span className="text-xs text-stone-500 bg-stone-700 px-2 py-0.5 rounded-full">
                    {fact.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
