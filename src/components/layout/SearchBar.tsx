"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { searchSite } from "@/data/search-index";

type SearchBarProps = {
  className?: string;
  fullWidth?: boolean;
};

export default function SearchBar({ className = "", fullWidth = false }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
        <input
          type="search"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          placeholder="Search..."
          aria-label="Search Sigma Business Finance"
          className={`rounded-full border border-neutral-300 bg-white py-2 pl-9 pr-8 text-sm text-neutral-900 outline-none transition-all focus:border-primary-700 focus:ring-2 focus:ring-primary-100 ${
            fullWidth ? "w-full" : "w-36 focus:w-64 xl:w-48 xl:focus:w-72"
          }`}
        />
        {query ? (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setOpen(false);
            }}
            aria-label="Clear search"
            className="absolute right-2.5 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-neutral-400 hover:text-neutral-700"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        ) : null}
      </div>

      {open && query.trim() ? (
        <div
          className={`absolute top-full z-50 mt-2 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-primary-900/15 ${
            fullWidth ? "left-0 right-0" : "right-0 w-80"
          }`}
        >
          {results.length > 0 ? (
            <ul className="max-h-96 overflow-y-auto py-2">
              {results.map((result) => (
                <li key={result.href}>
                  <Link
                    href={result.href}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                    }}
                    className="flex items-center justify-between gap-3 px-4 py-2.5 transition-colors hover:bg-primary-50"
                  >
                    <span className="text-sm font-medium text-neutral-900">
                      {result.title}
                    </span>
                    <span className="shrink-0 text-xs font-medium text-neutral-400">
                      {result.category}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="px-4 py-6 text-center text-sm text-neutral-500">
              No results for &ldquo;{query}&rdquo;
            </p>
          )}
        </div>
      ) : null}
    </div>
  );
}
