import { useParams, Link } from "react-router-dom";
import { DESTINATIONS } from "../constants";
import { Badge, StarRating } from "../components/UI";
import DestinationCard from "../components/DestinationCard";

export default function DestinationDetailPage() {
  const { id } = useParams();
  const destination = DESTINATIONS.find((d) => d.id === Number(id));

  if (!destination) {
    return (
      <div className="bg-stone-950 min-h-screen text-white flex items-center justify-center pt-20">
        <div className="text-center">
          <p className="text-6xl mb-4">🗺️</p>
          <h1 className="text-2xl font-bold mb-2">Destination Not Found</h1>
          <Link to="/destinations" className="text-amber-400 hover:underline">
            ← Back to Destinations
          </Link>
        </div>
      </div>
    );
  }

  const {
    name, state, category, image, description, highlights,
    bestTime, duration, difficulty, rating, reviews,
  } = destination;

  const related = DESTINATIONS.filter(
    (d) => d.id !== destination.id && d.category.some((c) => category.includes(c))
  ).slice(0, 3);

  const difficultyColor = { Easy: "green", Moderate: "amber", Hard: "red" };

  return (
    <div className="bg-stone-950 min-h-screen text-white">
      {/* Hero */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-900/20" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <Link
              to="/destinations"
              className="inline-flex items-center gap-1 text-stone-400 hover:text-white text-sm mb-4 transition-colors"
            >
              ← All Destinations
            </Link>
            <div className="flex flex-wrap gap-2 mb-3">
              {category.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-1">{name}</h1>
            <p className="text-amber-400 text-lg font-medium">📍 {state}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <StarRating rating={rating} reviews={reviews} />
              <p className="text-stone-300 text-lg leading-relaxed mt-4">{description}</p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Top Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 bg-stone-800/60 border border-stone-700 rounded-xl p-3"
                  >
                    <span className="text-amber-400 text-lg">✦</span>
                    <span className="text-stone-300 text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="bg-stone-800/60 border border-stone-700 rounded-2xl p-6 space-y-4">
              <h3 className="font-bold text-white">Trip Info</h3>
              {[
                { icon: "🗓", label: "Best Time", value: bestTime },
                { icon: "⏱", label: "Duration", value: duration },
                { icon: "⛰", label: "Difficulty", value: difficulty },
                { icon: "📍", label: "State", value: state },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm border-t border-stone-700 pt-3">
                  <span className="text-stone-400 flex items-center gap-2">
                    <span>{row.icon}</span> {row.label}
                  </span>
                  <span className="text-white font-medium">{row.value}</span>
                </div>
              ))}
              <Link
                to="/plan-trip"
                className="block w-full text-center bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 rounded-xl transition-colors mt-4"
              >
                Plan This Trip
              </Link>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
