// hooks/useFilter.js
import { useState, useMemo } from "react";

export function useFilter(data, filterFn) {
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({});

  const filtered = useMemo(() => {
    return data.filter((item) => filterFn(item, query, filters));
  }, [data, query, filters, filterFn]);

  const updateFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setQuery("");
    setFilters({});
  };

  return { query, setQuery, filters, updateFilter, resetFilters, filtered };
}

// hooks/useScrollTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
}

// hooks/useLocalStorage.js
import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };

  return [storedValue, setValue];
}
