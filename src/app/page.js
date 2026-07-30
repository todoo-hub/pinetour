"use client";

import React, { useState } from "react";

// 1. The reusable Card component
export function Card({ title, genre, rating, image, watched, watchTonight }) {
  const isMustWatch = rating >= 4.8;

  return (
    <div className="bg-[#1e1e1e] text-white rounded-2xl overflow-hidden shadow-lg w-80 flex flex-col transition-transform hover:scale-[1.02]">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
        loading="lazy"
      />

      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🎬</span>
          <h2 className="text-2xl font-bold tracking-wide">{title}</h2>
        </div>

        <p className="text-gray-300 font-medium text-base">
          <span className="font-bold text-white">Genre:</span> {genre}
        </p>

        <p className="text-gray-300 font-medium text-base flex items-center gap-1">
          <span className="font-bold text-white">Rating:</span> ⭐ {rating}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {isMustWatch ? (
            <span className="bg-[#facc15] text-black text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
              🔥 Must Watch
            </span>
          ) : (
            <span className="bg-[#3a3a3c] text-white text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
              ⭐ Recommended
            </span>
          )}

          {watchTonight && (
            <span className="bg-[#e11d48] text-white text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
              🍿 Watch Tonight
            </span>
          )}

          {watched && (
            <span className="bg-[#22c55e] text-white text-sm font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 shadow">
              ✅ Watched
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// 2. Mock Data Array matching your screenshot
const moviesData = [
  {
    id: 1,
    title: "One Piece",
    genre: "Anime",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    watched: true,
    watchTonight: false,
  },
  {
    id: 2,
    title: "Inside Out 2",
    genre: "Movie",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80",
    watched: false,
    watchTonight: true,
  },
  {
    id: 3,
    title: "Wednesday",
    genre: "Series",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
    watched: true,
    watchTonight: false,
  },
  {
    id: 4,
    title: "Naruto",
    genre: "Anime",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=600&q=80",
    watched: false,
    watchTonight: false,
  },
  {
    id: 5,
    title: "Spider-Man",
    genre: "Movie",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
    watched: false,
    watchTonight: false,
  },
  {
    id: 6,
    title: "Stranger Things",
    genre: "Series",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80",
    watched: false,
    watchTonight: false,
  },
];

// 3. Main Home Component rendering the grid and state toggle
export default function Home() {
  const [emoji, setEmoji] = useState("☀️");

  const handleSwitch = () => {
    setEmoji((prev) => (prev === "☀️" ? "🌑" : "☀️"));
  };

  return (
    <main className="min-h-screen bg-[#121212] text-white p-8 flex flex-col items-center gap-8">
      {/* Header & Mode Switcher */}
      <header className="w-full max-w-6xl flex justify-between items-center pb-4 border-b border-gray-800">
        <h1 className="text-3xl font-extrabold tracking-tight">Watchlist</h1>
        <button
          onClick={handleSwitch}
          className="px-4 py-2 bg-[#1e1e1e] hover:bg-[#2a2a2a] border border-gray-700 rounded-xl text-lg font-semibold flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
        >
          <span>Mode:</span>
          <span className="text-2xl">{emoji}</span>
        </button>
      </header>

      {/* Grid Displaying the Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moviesData.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
    </main>
  );
}