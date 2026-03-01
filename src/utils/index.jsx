// utils/index.js

/**
 * Filter destinations by search query and category
 */
export function filterDestinations(item, query, filters) {
  const matchesQuery =
    !query ||
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.state.toLowerCase().includes(query.toLowerCase()) ||
    item.description.toLowerCase().includes(query.toLowerCase());

  const matchesCategory =
    !filters.category ||
    filters.category === "all" ||
    item.category.includes(filters.category);

  const matchesDifficulty =
    !filters.difficulty ||
    filters.difficulty === "All" ||
    item.difficulty === filters.difficulty;

  return matchesQuery && matchesCategory && matchesDifficulty;
}

/**
 * Filter restaurants
 */
export function filterRestaurants(item, query, filters) {
  const matchesQuery =
    !query ||
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.city.toLowerCase().includes(query.toLowerCase()) ||
    item.cuisine.some((c) => c.toLowerCase().includes(query.toLowerCase()));

  const matchesPrice =
    !filters.priceRange ||
    filters.priceRange === "All" ||
    item.priceRange === filters.priceRange;

  const matchesVeg = !filters.vegOnly || item.vegOptions;

  return matchesQuery && matchesPrice && matchesVeg;
}

/**
 * Filter recipes
 */
export function filterRecipes(item, query, filters) {
  const matchesQuery =
    !query ||
    item.name.toLowerCase().includes(query.toLowerCase()) ||
    item.state.toLowerCase().includes(query.toLowerCase());

  const matchesType =
    !filters.type || filters.type === "All" || item.type === filters.type;

  const matchesDifficulty =
    !filters.difficulty ||
    filters.difficulty === "All" ||
    item.difficulty === filters.difficulty;

  return matchesQuery && matchesType && matchesDifficulty;
}

/**
 * Sort array by field
 */
export function sortBy(arr, field) {
  return [...arr].sort((a, b) => {
    if (field === "name") return a.name.localeCompare(b.name);
    if (field === "rating") return b.rating - a.rating;
    if (field === "reviews") return b.reviews - a.reviews;
    return 0;
  });
}

/**
 * Get unique values for a field across an array
 */
export function getUniqueValues(arr, key) {
  return [
    ...new Set(
      arr.flatMap((item) =>
        Array.isArray(item[key]) ? item[key] : [item[key]],
      ),
    ),
  ];
}

/**
 * Truncate text
 */
export function truncate(str, n = 100) {
  return str.length > n ? str.slice(0, n - 1) + "…" : str;
}

/**
 * Generate star string
 */
export function starRating(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(5 - full - half);
}

/**
 * Random item from array
 */
export function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Random items from array
 */
export function randomItems(arr, n) {
  return [...arr].sort(() => 0.5 - Math.random()).slice(0, n);
}
