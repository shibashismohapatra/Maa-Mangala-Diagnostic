"use client";

import { useState } from "react";
import { galleryImages, galleryCategories } from "@/data/gallery";
import GalleryCard from "@/components/shared/GalleryCard";
import SectionHeading from "@/components/shared/SectionHeading";
import { siteConfig } from "@/data/site";

export default function GalleryPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <main className="pt-24 lg:pt-32">
      {/* Hero */}
      <section className="bg-gradient-to-br from-cyan-50 via-white to-teal-50 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            label="Gallery"
            title="Gallery"
            description={`View our diagnostic facilities, modern equipment, and laboratory setup at ${siteConfig.brandName}.`}
            centered
          />
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {galleryCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                  active === cat
                    ? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((img) => (
              <GalleryCard key={img.src} {...img} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-center text-zinc-500">
              No images in this category yet. Check back soon!
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
