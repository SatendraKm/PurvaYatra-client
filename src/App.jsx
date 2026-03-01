import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DestinationsPage from "./pages/DestinationsPage";
import DestinationDetailPage from "./pages/DestinationDetailPage";
import ExperiencesPage from "./pages/ExperiencesPage";
import RestaurantsPage from "./pages/RestaurantsPage";
import RecipesPage from "./pages/RecipesPage";
import FunFactsPage from "./pages/FunFactsPage";
import PlanTripPage from "./pages/PlanTripPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:id" element={<DestinationDetailPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/restaurants" element={<RestaurantsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/fun-facts" element={<FunFactsPage />} />
          <Route path="/plan-trip" element={<PlanTripPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}
