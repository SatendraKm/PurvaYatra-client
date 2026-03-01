import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { DESTINATIONS, TOURISM_CATEGORIES, DIFFICULTY_LEVELS, SORT_OPTIONS, EAST_INDIA_STATES } from "../constants";
import DestinationCard from "../components/DestinationCard";
import { SearchBar, SectionHeader, FilterChip, EmptyState } from "../components/UI";
import { filterDestinations, sortBy } from "../utils";

export default function DestinationsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [difficulty, setDifficulty] = useState("All");
  const [state, setState] = useState(searchParams.get("state") || "All");
  const [sortField, setSortField] = useState("rating");

  // Sync query with URL
  useEffect(() => {
    setQuery(searchParams.get("q") || "");
    setCategory(searchParams.get("category") || "all");
    setState(searchParams.get("state") || "All");
  }, [searchParams]);

  const filtered = DESTINATIONS.filter((item) =>
    filterDestinations(item, query, { category, difficulty })
  ).filter((item) => state === "All" || item.state === state);

  const sorted = sortBy(filtered, sortField);

  const handleQueryChange = (val) => {
    setQuery(val);
    if (val) setSearchParams({ q: val });
    else setSearchParams({});
  };

  return (
    <div className="bg-stone-950 min-h-screen text-white pt-20">
      {/* Header */}
      <div className="bg-stone-900 border-b border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="East India"
            title="All Destinations"
            subtitle="Explore 12 states, hundreds of experiences, one unforgettable journey"
          />
          <div className="mt-8 max-w-xl mx-auto">
            <SearchBar
              value={query}
              onChange={handleQueryChange}
              placeholder="Search by name, state, or experience..."
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="space-y-4 mb-8">
          {/* Category Filter */}
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">Category</p>
            <div className="flex flex-wrap gap-2">
              <FilterChip
                label="All"
                active={category === "all"}
                onClick={() => setCategory("all")}
              />
              {TOURISM_CATEGORIES.map((cat) => (
                <FilterChip
                  key={cat.id}
                  label={`${cat.icon} ${cat.label}`}
                  active={category === cat.id}
                  onClick={() => setCategory(cat.id)}
                />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            {/* Difficulty */}
            <div>
              <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">Difficulty</p>
              <div className="flex gap-2">
                {DIFFICULTY_LEVELS.map((d) => (
                  <FilterChip
                    key={d}
                    label={d}
                    active={difficulty === d}
                    onClick={() => setDifficulty(d)}
                  />
                ))}
              </div>
            </div>

            {/* State */}
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

            {/* Sort */}
            <div>
              <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">Sort By</p>
              <select
                value={sortField}
                onChange={(e) => setSortField(e.target.value)}
                className="bg-stone-800 border border-stone-700 text-stone-300 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-amber-500"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p className="text-stone-500 text-sm mb-6">
          {sorted.length} destination{sorted.length !== 1 ? "s" : ""} found
        </p>

        {/* Grid */}
        {sorted.length === 0 ? (
          <EmptyState icon="🗺️" message="No destinations match your filters. Try adjusting them!" />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
