import { Link } from "react-router-dom";
import { Badge, StarRating } from "./UI";

export default function DestinationCard({ destination }) {
  const {
    id,
    name,
    state,
    category,
    image,
    description,
    difficulty,
    bestTime,
    rating,
    reviews,
  } = destination;

  const difficultyColor = {
    Easy: "green",
    Moderate: "amber",
    Hard: "red",
  };

  return (
    <Link
      to={`/destinations/${id}`}
      className="group block bg-stone-800/60 border border-stone-700/60 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          {category.slice(0, 2).map((cat) => (
            <Badge key={cat} color="amber">
              {cat}
            </Badge>
          ))}
        </div>
        <div className="absolute bottom-3 right-3">
          <Badge color={difficultyColor[difficulty] || "stone"}>
            {difficulty}
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors">
            {name}
          </h3>
        </div>
        <p className="text-amber-500/80 text-sm font-medium mb-2">📍 {state}</p>
        <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 mb-3">
          {description}
        </p>

        <div className="flex items-center justify-between border-t border-stone-700 pt-3">
          <StarRating rating={rating} reviews={reviews} />
          <span className="text-xs text-stone-500">🗓 {bestTime}</span>
        </div>
      </div>
    </Link>
  );
}
