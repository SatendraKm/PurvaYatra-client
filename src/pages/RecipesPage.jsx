import { useState } from "react";
import { RECIPES } from "../constants";
import { SearchBar, SectionHeader, FilterChip, EmptyState, Badge } from "../components/UI";
import { filterRecipes } from "../utils";

const TYPE_FILTERS = ["All", "Veg", "Non-Veg"];
const DIFFICULTY_FILTERS = ["All", "Easy", "Medium", "Hard"];

export default function RecipesPage() {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [selected, setSelected] = useState(null);

  const filtered = RECIPES.filter((r) => filterRecipes(r, query, { type, difficulty }));

  return (
    <div className="bg-stone-950 min-h-screen text-white pt-20">
      <div className="bg-stone-900 border-b border-stone-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Cook East India"
            title="Traditional Recipes"
            subtitle="Authentic recipes from kitchens across East India"
          />
          <div className="mt-8 max-w-xl mx-auto">
            <SearchBar value={query} onChange={setQuery} placeholder="Search recipes, states..." />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Filters */}
        <div className="flex flex-wrap gap-6 mb-8">
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">Type</p>
            <div className="flex gap-2">
              {TYPE_FILTERS.map((t) => (
                <FilterChip key={t} label={t} active={type === t} onClick={() => setType(t)} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-stone-400 text-xs uppercase tracking-wide mb-2">Difficulty</p>
            <div className="flex gap-2">
              {DIFFICULTY_FILTERS.map((d) => (
                <FilterChip key={d} label={d} active={difficulty === d} onClick={() => setDifficulty(d)} />
              ))}
            </div>
          </div>
        </div>

        {filtered.length === 0 ? (
          <EmptyState icon="🍲" message="No recipes match your filters." />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} onClick={() => setSelected(recipe)} />
            ))}
          </div>
        )}
      </div>

      {/* Recipe Modal */}
      {selected && (
        <RecipeModal recipe={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

function RecipeCard({ recipe, onClick }) {
  const { name, state, category, type, image, description, prepTime, cookTime, difficulty } = recipe;
  const typeColor = type === "Veg" ? "green" : "red";

  return (
    <button
      onClick={onClick}
      className="text-left bg-stone-800/60 border border-stone-700 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-xl transition-all group w-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge color={typeColor}>{type}</Badge>
        </div>
        <div className="absolute bottom-3 right-3 text-xs bg-stone-900/80 text-white px-2 py-1 rounded-full">
          {difficulty}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-white text-lg mb-1 group-hover:text-amber-400 transition-colors">
          {name}
        </h3>
        <p className="text-amber-500/80 text-sm mb-2">📍 {state} · {category}</p>
        <p className="text-stone-400 text-sm line-clamp-2 mb-3">{description}</p>
        <div className="flex items-center gap-4 text-xs text-stone-500">
          <span>⏱ Prep: {prepTime}</span>
          <span>🍳 Cook: {cookTime}</span>
        </div>
      </div>
    </button>
  );
}

function RecipeModal({ recipe, onClose }) {
  const [activeTab, setActiveTab] = useState("ingredients");

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-stone-900 border border-stone-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-52">
          <img src={recipe.image} alt={recipe.name} className="w-full h-full object-cover rounded-t-2xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent rounded-t-2xl" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-stone-900/80 rounded-full flex items-center justify-center text-white hover:bg-stone-700 transition-colors"
          >
            ✕
          </button>
          <div className="absolute bottom-4 left-4">
            <h2 className="text-2xl font-bold text-white">{recipe.name}</h2>
            <p className="text-amber-400 text-sm">{recipe.state}</p>
          </div>
        </div>

        <div className="p-6">
          {/* Meta */}
          <div className="grid grid-cols-3 gap-3 mb-6 text-center">
            {[
              { label: "Prep Time", value: recipe.prepTime },
              { label: "Cook Time", value: recipe.cookTime },
              { label: "Servings", value: recipe.servings },
            ].map((m) => (
              <div key={m.label} className="bg-stone-800 rounded-xl p-3">
                <div className="font-bold text-amber-400 text-sm">{m.value}</div>
                <div className="text-stone-500 text-xs">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-5">
            {["ingredients", "steps"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === tab
                    ? "bg-amber-500 text-stone-900"
                    : "bg-stone-800 text-stone-400 hover:text-white"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {activeTab === "ingredients" ? (
            <ul className="space-y-2">
              {recipe.ingredients.map((ing) => (
                <li key={ing} className="flex items-center gap-3 text-sm text-stone-300">
                  <span className="text-amber-400">•</span> {ing}
                </li>
              ))}
            </ul>
          ) : (
            <ol className="space-y-3">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-3 text-sm text-stone-300">
                  <span className="flex-shrink-0 w-6 h-6 bg-amber-500 text-stone-900 rounded-full flex items-center justify-center text-xs font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          )}

          {/* Fun fact */}
          {recipe.funFact && (
            <div className="mt-6 bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
              <p className="text-xs text-amber-400 font-semibold mb-1">🌟 Fun Fact</p>
              <p className="text-stone-300 text-sm">{recipe.funFact}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
