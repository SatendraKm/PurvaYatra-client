// ============================================================
// EAST INDIA TOURISM PLATFORM — CONSTANTS
// ============================================================

export const APP_CONFIG = {
  name: "PurvaYatra",
  tagline: "Discover the Soul of East India",
  description:
    "Your gateway to culture, heritage, eco-tourism, and adventure across East India.",
  email: "hello@purvayatra.in",
  phone: "+91 98765 43210",
};

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Experiences", href: "/experiences" },
  { label: "Restaurants", href: "/restaurants" },
  { label: "Recipes", href: "/recipes" },
  { label: "Fun Facts", href: "/fun-facts" },
];

// ─── States ──────────────────────────────────────────────────
export const EAST_INDIA_STATES = [
  "West Bengal",
  "Odisha",
  "Bihar",
  "Jharkhand",
  "Chhattisgarh",
  "Andaman and Nicobar",
];

// ─── Categories ──────────────────────────────────────────────
export const TOURISM_CATEGORIES = [
  { id: "heritage", label: "Heritage", icon: "🏛️" },
  { id: "eco", label: "Eco Tourism", icon: "🌿" },
  { id: "adventure", label: "Adventure", icon: "🏔️" },
  { id: "culture", label: "Culture", icon: "🎭" },
  { id: "wildlife", label: "Wildlife", icon: "🐅" },
  { id: "beach", label: "Beach", icon: "🏖️" },
  { id: "pilgrimage", label: "Pilgrimage", icon: "🛕" },
  { id: "tribal", label: "Tribal", icon: "🎪" },
];

// ─── Destinations ─────────────────────────────────────────────
export const DESTINATIONS = [
  {
    id: 1,
    name: "Darjeeling",
    state: "West Bengal",
    category: ["eco", "adventure", "culture"],
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    description:
      "The Queen of the Hills — home to world-famous tea gardens, the Toy Train, and breathtaking Himalayan views.",
    highlights: [
      "Tiger Hill Sunrise",
      "Tea Garden Tours",
      "Batasia Loop",
      "Happy Valley",
    ],
    bestTime: "March–May, Oct–Nov",
    duration: "3–5 days",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 2341,
    lat: 27.036,
    lng: 88.2627,
  },
  {
    id: 2,
    name: "Puri",
    state: "Odisha",
    category: ["pilgrimage", "beach", "culture"],
    image:
      "https://images.unsplash.com/photo-1629723248038-8b3bc1ecce29?w=800&q=80",
    description:
      "Sacred city of Lord Jagannath, golden beaches, and the world-famous Rath Yatra festival.",
    highlights: [
      "Jagannath Temple",
      "Puri Beach",
      "Rath Yatra",
      "Chilika Lake",
    ],
    bestTime: "Oct–Feb",
    duration: "2–4 days",
    difficulty: "Easy",
    rating: 4.7,
    reviews: 3120,
    lat: 19.7983,
    lng: 85.8245,
  },
  {
    id: 3,
    name: "Konark",
    state: "Odisha",
    category: ["heritage", "culture"],
    image:
      "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80",
    description:
      "The Sun Temple of Konark — a masterpiece of Kalinga architecture.",
    highlights: [
      "Sun Temple",
      "Konark Dance Festival",
      "Archaeological Museum",
      "Beach",
    ],
    bestTime: "Oct–Feb",
    duration: "1–2 days",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 2654,
    lat: 19.8876,
    lng: 86.0945,
  },
  {
    id: 4,
    name: "Kolkata",
    state: "West Bengal",
    category: ["heritage", "culture"],
    image:
      "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&q=80",
    description:
      "The City of Joy — colonial grandeur, intellectual legacy, Durga Puja, and irresistible street food.",
    highlights: [
      "Victoria Memorial",
      "Howrah Bridge",
      "Durga Puja",
      "Park Street",
    ],
    bestTime: "Oct–Mar",
    duration: "3–5 days",
    difficulty: "Easy",
    rating: 4.6,
    reviews: 4231,
    lat: 22.5726,
    lng: 88.3639,
  },
  {
    id: 5,
    name: "Sundarbans",
    state: "West Bengal",
    category: ["eco", "wildlife", "adventure"],
    image:
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=800&q=80",
    description:
      "World's largest mangrove forest — home to the Royal Bengal Tiger.",
    highlights: [
      "Tiger Sighting",
      "Boat Safari",
      "Village Tours",
      "Mangrove Trek",
    ],
    bestTime: "Nov–Mar",
    duration: "2–4 days",
    difficulty: "Moderate",
    rating: 4.7,
    reviews: 1234,
    lat: 21.9497,
    lng: 89.1833,
  },
  {
    id: 6,
    name: "Bodhgaya",
    state: "Bihar",
    category: ["pilgrimage", "heritage"],
    image:
      "https://plus.unsplash.com/premium_photo-1697730291496-f1ed760a5f1a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Where the Buddha attained enlightenment — one of the holiest Buddhist pilgrimage sites in the world.",
    highlights: [
      "Mahabodhi Temple",
      "Bodhi Tree",
      "Great Buddha Statue",
      "Tibetan Monastery",
    ],
    bestTime: "Oct–Mar",
    duration: "1–2 days",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 2876,
    lat: 24.6961,
    lng: 84.9914,
  },
  {
    id: 7,
    name: "Havelock Island",
    state: "Andaman and Nicobar",
    category: ["beach", "adventure", "eco"],
    image:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?w=800&q=80",
    description:
      "Crystal-clear waters, coral reefs, and the famous Radhanagar Beach — a tropical paradise.",
    highlights: [
      "Radhanagar Beach",
      "Scuba Diving",
      "Snorkeling",
      "Island Hopping",
    ],
    bestTime: "Oct–May",
    duration: "3–5 days",
    difficulty: "Easy",
    rating: 4.8,
    reviews: 1654,
    lat: 11.984,
    lng: 92.953,
  },
];

// ─── Restaurants ──────────────────────────────────────────────
export const RESTAURANTS = [
  {
    id: 1,
    name: "Flurys",
    city: "Kolkata",
    state: "West Bengal",
    cuisine: ["Continental", "Bakery", "Tea Room"],
    priceRange: "₹₹",
    specialty: "Legendary pastries and high tea since 1927",
    mustTry: ["Chocolate Éclair", "Patties", "English Breakfast"],
    rating: 4.6,
    reviews: 5432,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    openHours: "7:30 AM – 8:00 PM",
    vegOptions: true,
  },
  {
    id: 2,
    name: "Mitra Cafe",
    city: "Kolkata",
    state: "West Bengal",
    cuisine: ["Bengali", "Street Food"],
    priceRange: "₹",
    specialty: "Legendary mutton cutlets since 1938",
    mustTry: ["Mutton Cutlet", "Kasha Mangsho", "Fish Fry"],
    rating: 4.5,
    reviews: 3210,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    openHours: "12:00 PM – 10:00 PM",
    vegOptions: false,
  },
  {
    id: 3,
    name: "Glenary's",
    city: "Darjeeling",
    state: "West Bengal",
    cuisine: ["Continental", "Bakery", "Indian"],
    priceRange: "₹₹",
    specialty: "Iconic hilltop bakery with panoramic mountain views",
    mustTry: ["Darjeeling Tea", "Momos", "Baked Goods"],
    rating: 4.6,
    reviews: 2987,
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    openHours: "7:00 AM – 8:30 PM",
    vegOptions: true,
  },
  {
    id: 4,
    name: "Orissa Hotel",
    city: "Puri",
    state: "Odisha",
    cuisine: ["Odia", "Seafood"],
    priceRange: "₹",
    specialty: "Freshest Odia seafood and authentic Mahaprasad-style cuisine",
    mustTry: ["Dalma", "Chingudi Jhola", "Pakhala Bhata"],
    rating: 4.4,
    reviews: 1543,
    image:
      "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=800&q=80",
    openHours: "8:00 AM – 10:00 PM",
    vegOptions: true,
  },
];

// ─── Recipes ──────────────────────────────────────────────────
export const RECIPES = [
  {
    id: 1,
    name: "Macher Jhol",
    state: "West Bengal",
    category: "Main Course",
    type: "Non-Veg",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    description:
      "Light, aromatic Bengali fish curry cooked with mustard oil and spices.",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "500g Rohu fish (cut into pieces)",
      "2 medium potatoes (halved)",
      "2 tsp turmeric",
      "2 tsp cumin seeds",
      "3 green chillies",
      "3 tbsp mustard oil",
      "1 tsp ginger paste",
      "Salt to taste",
      "Fresh coriander",
    ],
    steps: [
      "Marinate fish with turmeric and salt for 10 minutes.",
      "Heat mustard oil in a wok until smoking, then reduce heat.",
      "Fry fish pieces until golden brown on both sides. Remove.",
      "In the same oil, add cumin seeds and let splutter.",
      "Add potatoes and fry for 2 minutes. Add ginger paste.",
      "Add turmeric, 2 cups water and bring to boil.",
      "Add fried fish and green chillies. Simmer 10 minutes.",
      "Garnish with fresh coriander and serve with rice.",
    ],
    funFact:
      "Bengali households believe the best Macher Jhol is made with mustard oil smoked to its smoking point — never refined oil.",
  },
  {
    id: 2,
    name: "Dalma",
    state: "Odisha",
    category: "Main Course",
    type: "Veg",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    description:
      "Sacred lentil-vegetable stew served as Mahaprasad at Jagannath Temple, Puri.",
    prepTime: "10 min",
    cookTime: "30 min",
    servings: 4,
    difficulty: "Easy",
    ingredients: [
      "1 cup chana dal (split chickpeas)",
      "2 raw bananas (cubed)",
      "1 sweet potato (cubed)",
      "1 raw papaya (cubed)",
      "1 cup pumpkin (cubed)",
      "2 dry red chillies",
      "1 tsp panch phoron",
      "2 tsp ghee",
      "1 tsp turmeric",
      "Salt to taste",
    ],
    steps: [
      "Pressure cook dal with all vegetables, turmeric, and salt.",
      "Cook for 3–4 whistles until soft.",
      "Heat ghee in a pan, add panch phoron and dry red chillies.",
      "When seeds crackle, pour over the cooked dal.",
      "Mix gently, adjust salt, and serve with rice.",
    ],
    funFact:
      "Dalma is one of the 56 dishes (Chappan Bhog) offered daily at Jagannath Temple in Puri.",
  },
  {
    id: 3,
    name: "Litti Chokha",
    state: "Bihar",
    category: "Snack / Main",
    type: "Veg",
    image:
      "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&q=80",
    description:
      "Bihar's iconic stuffed wheat balls roasted over coal fire, served with smoky mashed vegetables.",
    prepTime: "20 min",
    cookTime: "40 min",
    servings: 4,
    difficulty: "Medium",
    ingredients: [
      "2 cups whole wheat flour",
      "1 cup sattu (roasted gram flour)",
      "2 tbsp lemon juice",
      "1 tsp ajwain",
      "3 cloves garlic (minced)",
      "2 green chillies",
      "3 brinjal (for chokha)",
      "2 tomatoes (for chokha)",
      "Mustard oil",
      "Salt to taste",
    ],
    steps: [
      "Make a stiff dough with wheat flour, salt and water.",
      "Mix sattu with lemon juice, garlic, chillies, ajwain and salt.",
      "Stuff filling into small dough balls and seal.",
      "Roast over open flame or in oven at 200°C for 25 min.",
      "Roast brinjal and tomatoes directly on flame until charred.",
      "Peel and mash with mustard oil, salt, green chillies.",
      "Serve hot litti dipped in ghee with chokha.",
    ],
    funFact:
      "Litti Chokha was traditionally carried by travelers and soldiers because it stays fresh for days without refrigeration.",
  },
  {
    id: 4,
    name: "Pitha",
    state: "Odisha",
    category: "Dessert / Snack",
    type: "Veg",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    description:
      "Traditional rice-flour dumplings steamed or fried, filled with jaggery and coconut.",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: 6,
    difficulty: "Medium",
    ingredients: [
      "2 cups rice flour",
      "1 cup grated coconut",
      "½ cup jaggery (grated)",
      "1 tsp cardamom powder",
      "Hot water as needed",
      "Oil for frying (optional)",
    ],
    steps: [
      "Mix rice flour with hot water to form a soft dough.",
      "Mix coconut, jaggery and cardamom for the filling.",
      "Take small balls of dough, flatten and place filling inside.",
      "Seal edges carefully into crescent or round shapes.",
      "Steam for 10–12 minutes OR shallow fry until golden.",
      "Serve warm as a festive treat.",
    ],
    funFact:
      "Pitha is widely prepared during Makar Sankranti and other harvest festivals in Odisha.",
  },
];

// ─── Fun Facts ────────────────────────────────────────────────
export const FUN_FACTS = [
  {
    id: 1,
    fact: "West Bengal produces over 80% of India's total fish requirement and is home to more than 200 varieties of freshwater fish dishes.",
    category: "Food",
    state: "West Bengal",
    emoji: "🐟",
  },
  {
    id: 2,
    fact: "Nalanda University in Bihar (5th–12th century AD) was the world's first residential university, attracting scholars from China, Korea, Turkey, and Greece.",
    category: "History",
    state: "Bihar",
    emoji: "📚",
  },
  {
    id: 3,
    fact: "Odisha's Konark Sun Temple is designed as a giant chariot with 24 intricately carved wheels that also function as precise sundials.",
    category: "Architecture",
    state: "Odisha",
    emoji: "☀️",
  },
  {
    id: 4,
    fact: "Darjeeling tea is one of only a few teas in the world with a GI (Geographical Indication) tag — its muscatel flavor can never be replicated elsewhere.",
    category: "Food",
    state: "West Bengal",
    emoji: "🍵",
  },
  {
    id: 5,
    fact: "Kolkata's Metro Railway, opened in 1984, was India's first underground metro system.",
    category: "History",
    state: "West Bengal",
    emoji: "🚇",
  },
  {
    id: 6,
    fact: "The Sundarbans is home to the world's largest tidal mangrove forest and is shared between India and Bangladesh.",
    category: "Geography",
    state: "West Bengal",
    emoji: "🌳",
  },
  {
    id: 7,
    fact: "Bodhgaya's Mahabodhi Temple complex contains the original Bodhi tree under which Siddhartha Gautama attained enlightenment around 528 BC.",
    category: "History",
    state: "Bihar",
    emoji: "🧘",
  },
];

// ─── Trip Packages ────────────────────────────────────────────
export const TRIP_PACKAGES = [
  {
    id: 1,
    name: "Andaman Island Escape",
    duration: "6 Days",
    states: ["Andaman and Nicobar"],
    destinations: ["Port Blair", "Havelock Island", "Neil Island"],
    type: "eco",
    price: "₹40,000",
    highlights: [
      "Radhanagar Beach sunset",
      "Cellular Jail light & sound show",
      "Scuba diving at Havelock",
      "Island hopping tour",
    ],
    includes: ["Hotels", "All Meals", "Transport", "Guide"],
    image:
      "https://images.unsplash.com/photo-1617653202545-931490e8d7e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Eastern Heritage Trail",
    duration: "7 Days",
    states: ["West Bengal", "Odisha", "Bihar"],
    destinations: ["Kolkata", "Konark", "Puri", "Bodhgaya"],
    type: "heritage",
    price: "₹32,000",
    highlights: [
      "Konark Sun Temple tour",
      "Kolkata colonial walk",
      "Puri Jagannath darshan",
      "Bodhgaya meditation session",
    ],
    includes: ["Hotels", "Breakfast", "Transport", "Guide"],
    image:
      "https://images.unsplash.com/photo-1609920658906-8223bd289001?w=800&q=80",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Tribal & Nature Expedition",
    duration: "8 Days",
    states: ["Chhattisgarh", "Jharkhand", "West Bengal"],
    destinations: ["Bastar", "Netarhat", "Sundarbans"],
    type: "adventure",
    price: "₹35,000",
    highlights: [
      "Chitrakote Waterfalls visit",
      "Tribal village experience",
      "Netarhat sunrise point",
      "Sundarbans boat safari",
    ],
    includes: ["Hotels", "All Meals", "Transport", "Guide"],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    rating: 4.6,
  },
];

// ─── Testimonials ─────────────────────────────────────────────
export const TESTIMONIALS = [
  {
    id: 1,
    name: "Arjun Sharma",
    city: "Delhi",
    rating: 5,
    text: "The Northeast Explorer package was life-changing. Kaziranga's rhinos at dawn, the root bridges of Meghalaya — I've never experienced anything like it.",
    destination: "Kaziranga & Meghalaya",
    avatar: "AS",
  },
  {
    id: 2,
    name: "Priya Menon",
    city: "Bangalore",
    rating: 5,
    text: "PurvaYatra's restaurant recommendations in Kolkata were spot on. Mitra Cafe's mutton cutlet is genuinely the best thing I've ever eaten.",
    destination: "Kolkata",
    avatar: "PM",
  },
  {
    id: 3,
    name: "Rahul Das",
    city: "Mumbai",
    rating: 5,
    text: "Konark Sun Temple at golden hour — no photo does it justice. The heritage trail curated by PurvaYatra was impeccably planned.",
    destination: "Odisha Heritage Trail",
    avatar: "RD",
  },
];

// ─── Stats ────────────────────────────────────────────────────
export const PLATFORM_STATS = [
  { label: "Destinations", value: "120+", icon: "📍" },
  { label: "Restaurants", value: "500+", icon: "🍽️" },
  { label: "Happy Travellers", value: "25K+", icon: "😊" },
  { label: "States Covered", value: "12", icon: "🗺️" },
];

// ─── Filter Options ───────────────────────────────────────────
export const DIFFICULTY_LEVELS = ["All", "Easy", "Moderate", "Hard"];
export const PRICE_RANGES = ["All", "₹", "₹₹", "₹₹₹"];
export const SORT_OPTIONS = [
  { value: "rating", label: "Top Rated" },
  { value: "reviews", label: "Most Reviewed" },
  { value: "name", label: "A–Z" },
];
