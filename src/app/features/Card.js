import React from 'react';

export function Card({ title, genre, rating, image, watched, watchTonight }) {
  const isMustWatch = rating >= 4.8;

  return (
    <div className="bg-[#1e1e1e] text-white rounded-2xl overflow-hidden shadow-lg w-80 flex flex-col">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover" 
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