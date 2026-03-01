import { useState } from "react";
import { RESTAURANTS, PRICE_RANGES } from "../constants";
import { SearchBar, SectionHeader, FilterChip, EmptyState, StarRating, Badge } from "../components/UI";
import { filterRestaurants, sortBy } from "../utils";

export default function RestaurantsPage() {
  const [query, setQuery] = useState("");
  const [priceRange, setPriceRange] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);
  const [sortField, setSortField] = useState("rating");

  const filtered = RESTAURANTS.filter((r) =>
    filterRestaurants(r, query, { priceRange, vegOnly })
  );
  const sorted = sortBy(filtered, sortField);

  return (
    <div className="bg-stone-950 min-h-screen text-white pt-20">
      <div className="bg-stone-900 border-b border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Eat Like a Local"
            title="Best Restaurants"
            subtitle="Authentic flavors from across East India's culinary landscape"
          />
          <div className="mt-8 max-w-xl mx-auto">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search by name, city, or cuisine..."
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 items-center">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">Price Range</p>
            <div className="flex gap-2">
              {PRICE_RANGES.map((p) => (
                <FilterChip
                  key={p}
                  label={p}
                  active={priceRange === p}
                  onClick={() => setPriceRange(p)}
                />
              ))}
            </div>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <label className="flex items-center gap-2 cursor-pointer text-sm text-stone-300">
              <input
                type="checkbox"
                checked={vegOnly}
                onChange={(e) => setVegOnly(e.target.checked)}
                className="accent-amber-500 w-4 h-4"
              />
              🌿 Veg-Friendly Only
            </label>
          </div>
        </div>

        <p className="text-stone-500 text-sm mb-6">{sorted.length} restaurant{sorted.length !== 1 ? "s" : ""} found</p>

        {sorted.length === 0 ? (
          <EmptyState icon="🍽️" message="No restaurants match your filters." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RestaurantCard({ restaurant }) {
  const { name, city, state, cuisine, priceRange, specialty, mustTry, rating, reviews, image, openHours, vegOptions } =
    restaurant;

  return (
    <div className="bg-stone-800/60 border border-stone-700 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
        <div className="absolute top-3 right-3 flex gap-2">
          <span className="bg-stone-900/80 text-white text-xs px-2 py-1 rounded-full font-bold">
            {priceRange}
          </span>
          {vegOptions && (
            <span className="bg-green-900/80 text-green-400 text-xs px-2 py-1 rounded-full">
              🌿 Veg
            </span>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-white text-lg">{name}</h3>
        </div>
        <p className="text-amber-500/80 text-sm mb-1">📍 {city}, {state}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cuisine.map((c) => (
            <Badge key={c} color="stone">{c}</Badge>
          ))}
        </div>
        <p className="text-stone-400 text-sm mb-3">{specialty}</p>

        <div className="mb-3">
          <p className="text-xs text-stone-500 mb-1 uppercase tracking-wide">Must Try</p>
          <div className="flex flex-wrap gap-1">
            {mustTry.map((item) => (
              <span key={item} className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-full">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-stone-700 pt-3">
          <StarRating rating={rating} reviews={reviews} />
          <span className="text-xs text-stone-500">🕒 {openHours}</span>
        </div>
      </div>
    </div>
  );
}
