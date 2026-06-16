"use client";

import { useMemo, useState } from "react";
import { ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import GalleryItemCard from "@/components/shared/GalleryItem";
import GalleryModal from "@/components/shared/GalleryModal";
import {
  GalleryItem,
  galleryCategories,
  galleryYears,
} from "@/data/gallery";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [category, setCategory] = useState<string>("all");
  const [year, setYear] = useState<string>("all");
  const [latestFirst, setLatestFirst] = useState(true);
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  const filtered = useMemo(() => {
    let result = items.filter((item) => {
      const matchCategory = category === "all" || item.category === category;
      const matchYear = year === "all" || String(item.year) === year;
      return matchCategory && matchYear;
    });
    result = [...result].sort((a, b) =>
      latestFirst ? b.year - a.year : a.year - b.year
    );
    return result;
  }, [items, category, year, latestFirst]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
        <Select value={category} onValueChange={(value) => setCategory(value ?? "all")}>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {galleryCategories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={year} onValueChange={(value) => setYear(value ?? "all")}>
          <SelectTrigger className="bg-card">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {galleryYears.map((y) => (
              <SelectItem key={y} value={String(y)}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => setLatestFirst((prev) => !prev)}
          className="gap-1.5 bg-card"
        >
          {latestFirst ? (
            <ArrowDownWideNarrow className="h-4 w-4" />
          ) : (
            <ArrowUpWideNarrow className="h-4 w-4" />
          )}
          {latestFirst ? "Latest First" : "Oldest First"}
        </Button>
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No media found for this filter.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <GalleryItemCard
              key={item.id}
              item={item}
              onOpen={() => setSelected(item)}
            />
          ))}
        </div>
      )}

      <GalleryModal item={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
