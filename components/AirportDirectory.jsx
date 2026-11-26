"use client";

import { useMemo, useState } from "react";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "india", label: "India" },
  { key: "intl", label: "International" },
];

export default function AirportDirectory({ airports = [] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return airports.filter((a) => {
      if (filter === "india" && !a.isIndia) return false;
      if (filter === "intl" && a.isIndia) return false;
      if (!q) return true;
      return [a.city, a.name, a.country].some((v) =>
        String(v ?? "").toLowerCase().includes(q)
      );
    });
  }, [airports, query, filter]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search city, airport or country"
          aria-label="Search airports"
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600 sm:max-w-md"
        />
        <div className="flex gap-2">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                filter === f.key
                  ? "border-blue-600 bg-blue-600 text-white"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-600"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Showing {list.length} of {airports.length} airports
      </p>

      {list.length === 0 ? (
        <p className="mt-6 rounded-xl border border-slate-200 bg-white p-6 text-slate-600">
          No airports match your search.
        </p>
      ) : (
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <li
              key={`${a.city}-${a.name}`}
              className="rounded-xl border border-slate-200 bg-white p-4"
            >
              <p className="font-semibold text-slate-900">{a.city}</p>
              <p className="mt-1 text-sm text-slate-600">{a.name}</p>
              <p className="mt-2 text-xs text-slate-500">{a.country}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}