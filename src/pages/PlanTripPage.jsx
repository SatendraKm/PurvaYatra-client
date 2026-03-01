import { useState } from "react";
import { DESTINATIONS, EAST_INDIA_STATES, TOURISM_CATEGORIES, TRIP_PACKAGES } from "../constants";
import { SectionHeader } from "../components/UI";
import { Link } from "react-router-dom";

const TRIP_DURATIONS = ["Weekend (2-3 days)", "Short Trip (4-5 days)", "Week (7 days)", "Extended (10+ days)"];
const TRAVEL_STYLES = TOURISM_CATEGORIES.map((c) => c.label);
const BUDGETS = ["Budget (₹5k-15k)", "Mid-Range (₹15k-40k)", "Premium (₹40k-80k)", "Luxury (₹80k+)"];

export default function PlanTripPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    states: [],
    duration: "",
    style: [],
    budget: "",
    groupSize: 2,
    specialRequests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const updateForm = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleArray = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  const handleSubmit = () => {
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-stone-950 min-h-screen text-white pt-20 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-7xl mb-6">🎉</div>
          <h1 className="text-3xl font-extrabold text-white mb-4">Trip Request Received!</h1>
          <p className="text-stone-400 mb-2">
            Thank you <span className="text-amber-400 font-semibold">{form.name}</span>! We've received your trip
            request for East India.
          </p>
          <p className="text-stone-500 text-sm mb-8">
            Our travel experts will reach out to <span className="text-white">{form.email}</span> within 24 hours with a
            personalized itinerary.
          </p>
          <div className="bg-stone-800/60 border border-stone-700 rounded-2xl p-5 text-left mb-6 text-sm space-y-2">
            <p><span className="text-stone-400">Duration:</span> <span className="text-white">{form.duration}</span></p>
            <p><span className="text-stone-400">States:</span> <span className="text-white">{form.states.join(", ") || "Flexible"}</span></p>
            <p><span className="text-stone-400">Style:</span> <span className="text-white">{form.style.join(", ") || "Any"}</span></p>
            <p><span className="text-stone-400">Budget:</span> <span className="text-white">{form.budget}</span></p>
            <p><span className="text-stone-400">Group Size:</span> <span className="text-white">{form.groupSize} people</span></p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/"
              className="flex-1 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 rounded-xl transition-colors text-center"
            >
              Back to Home
            </Link>
            <Link
              to="/destinations"
              className="flex-1 bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 rounded-xl transition-colors text-center"
            >
              Browse Destinations
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-stone-950 min-h-screen text-white pt-20">
      <div className="bg-stone-900 border-b border-stone-800 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <SectionHeader
            label="Your Journey Starts Here"
            title="Plan Your Trip"
            subtitle="Tell us your preferences and we'll craft the perfect East India itinerary"
          />
          {/* Progress */}
          <div className="flex items-center gap-2 mt-8 justify-center">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    s === step
                      ? "bg-amber-500 text-stone-900"
                      : s < step
                      ? "bg-amber-500/40 text-amber-400"
                      : "bg-stone-700 text-stone-500"
                  }`}
                >
                  {s < step ? "✓" : s}
                </div>
                {s < 3 && <div className={`w-16 h-0.5 ${s < step ? "bg-amber-500/60" : "bg-stone-700"}`} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Step 1 - Preferences */}
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Your Preferences</h2>

            {/* Duration */}
            <div>
              <label className="block text-stone-300 font-medium mb-3">Trip Duration</label>
              <div className="grid grid-cols-2 gap-3">
                {TRIP_DURATIONS.map((d) => (
                  <button
                    key={d}
                    onClick={() => updateForm("duration", d)}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                      form.duration === d
                        ? "bg-amber-500 border-amber-500 text-stone-900"
                        : "bg-stone-800 border-stone-700 text-stone-300 hover:border-amber-500/40"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>

            {/* States */}
            <div>
              <label className="block text-stone-300 font-medium mb-3">
                States of Interest <span className="text-stone-500 font-normal">(select multiple)</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {EAST_INDIA_STATES.map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleArray("states", s)}
                    className={`px-3 py-1.5 rounded-full border text-sm font-medium transition-all ${
                      form.states.includes(s)
                        ? "bg-amber-500 border-amber-500 text-stone-900"
                        : "bg-stone-800 border-stone-700 text-stone-300 hover:border-amber-500/40"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Style */}
            <div>
              <label className="block text-stone-300 font-medium mb-3">Travel Style</label>
              <div className="flex flex-wrap gap-2">
                {TOURISM_CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => toggleArray("style", cat.label)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-sm font-medium transition-all ${
                      form.style.includes(cat.label)
                        ? "bg-amber-500 border-amber-500 text-stone-900"
                        : "bg-stone-800 border-stone-700 text-stone-300 hover:border-amber-500/40"
                    }`}
                  >
                    {cat.icon} {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => setStep(2)}
              className="w-full bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3.5 rounded-xl transition-colors"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step 2 - Budget & Group */}
        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-white">Budget & Group</h2>

            <div>
              <label className="block text-stone-300 font-medium mb-3">Budget (per person)</label>
              <div className="grid grid-cols-2 gap-3">
                {BUDGETS.map((b) => (
                  <button
                    key={b}
                    onClick={() => updateForm("budget", b)}
                    className={`py-3 px-4 rounded-xl border text-sm font-medium transition-all ${
                      form.budget === b
                        ? "bg-amber-500 border-amber-500 text-stone-900"
                        : "bg-stone-800 border-stone-700 text-stone-300 hover:border-amber-500/40"
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-stone-300 font-medium mb-3">
                Group Size: <span className="text-amber-400 font-bold">{form.groupSize} people</span>
              </label>
              <input
                type="range"
                min={1}
                max={20}
                value={form.groupSize}
                onChange={(e) => updateForm("groupSize", Number(e.target.value))}
                className="w-full accent-amber-500"
              />
              <div className="flex justify-between text-xs text-stone-500 mt-1">
                <span>Solo</span>
                <span>20+ people</span>
              </div>
            </div>

            <div>
              <label className="block text-stone-300 font-medium mb-3">Special Requests</label>
              <textarea
                value={form.specialRequests}
                onChange={(e) => updateForm("specialRequests", e.target.value)}
                placeholder="Dietary needs, accessibility, honeymoon, family with kids..."
                rows={4}
                className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="flex-1 bg-amber-500 hover:bg-amber-400 text-stone-900 font-bold py-3 rounded-xl transition-colors"
              >
                Continue →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 - Contact */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Your Contact Details</h2>

            {[
              { label: "Full Name *", key: "name", type: "text", placeholder: "Arjun Sharma" },
              { label: "Email Address *", key: "email", type: "email", placeholder: "arjun@example.com" },
              { label: "Phone Number", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
            ].map((field) => (
              <div key={field.key}>
                <label className="block text-stone-300 font-medium mb-2 text-sm">{field.label}</label>
                <input
                  type={field.type}
                  value={form[field.key]}
                  onChange={(e) => updateForm(field.key, e.target.value)}
                  placeholder={field.placeholder}
                  className="w-full bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 text-white placeholder-stone-500 focus:outline-none focus:border-amber-500 text-sm"
                />
              </div>
            ))}

            {/* Summary */}
            <div className="bg-stone-800/60 border border-stone-700 rounded-2xl p-5 text-sm space-y-2">
              <h3 className="font-semibold text-white mb-3">Trip Summary</h3>
              <p><span className="text-stone-400">Duration:</span> <span className="text-white">{form.duration || "Not specified"}</span></p>
              <p><span className="text-stone-400">States:</span> <span className="text-white">{form.states.join(", ") || "Flexible"}</span></p>
              <p><span className="text-stone-400">Style:</span> <span className="text-white">{form.style.join(", ") || "Any"}</span></p>
              <p><span className="text-stone-400">Budget:</span> <span className="text-white">{form.budget || "Not specified"}</span></p>
              <p><span className="text-stone-400">Group:</span> <span className="text-white">{form.groupSize} people</span></p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-stone-800 hover:bg-stone-700 text-white font-semibold py-3 rounded-xl transition-colors"
              >
                ← Back
              </button>
              <button
                onClick={handleSubmit}
                disabled={!form.name || !form.email}
                className="flex-1 bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed text-stone-900 font-bold py-3 rounded-xl transition-colors"
              >
                Submit Request 🎉
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Packages suggestion */}
      <div className="bg-stone-900/50 border-t border-stone-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Not Sure?" title="Browse Ready-Made Packages" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRIP_PACKAGES.map((pkg) => (
              <div key={pkg.id} className="bg-stone-800/60 border border-stone-700 rounded-2xl p-5">
                <h3 className="font-bold text-white mb-1">{pkg.name}</h3>
                <p className="text-stone-400 text-sm mb-1">{pkg.duration} · {pkg.states.join(", ")}</p>
                <p className="text-amber-400 font-bold mb-3">From {pkg.price}</p>
                <button
                  onClick={() => {
                    updateForm("style", [pkg.type]);
                    updateForm("states", pkg.states);
                    setStep(3);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="w-full bg-amber-500/10 hover:bg-amber-500 hover:text-stone-900 text-amber-400 border border-amber-500/30 hover:border-amber-500 text-sm font-semibold py-2 rounded-lg transition-all"
                >
                  Select This Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
