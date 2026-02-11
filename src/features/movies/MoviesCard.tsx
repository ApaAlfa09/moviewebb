import { Link } from "react-router-dom";
import type { Movie } from "../../model/Movie.model";
import { useState } from "react";

export function MoviesCard({ movie }: { movie: Movie }) {
  const [imageError, setImageError] = useState(false);

  return (
    <Link to={`/movies/${movie.id}`}>
      <div
        className="bg-gray-800 rounded-2xl shadow-xl overflow-hidden 
               transform transition duration-300 
               hover:scale-110 hover:shadow-2xl cursor-pointer 
               border border-gray-700 hover:border-red-500 group h-full flex flex-col"
      >
        {/* Contenedor de imagen */}
        <div className="relative h-64  bg-gray-900">
          <img 
            src={movie.posterURL} 
            alt={movie.title}
            className={`w-full h-full object-cover group-hover:scale-110 transition duration-300 ${
              imageError ? 'hidden' : 'block'
            }`}
            onError={() => setImageError(true)}
          />
          
          {imageError && (
            <div className="w-full h-full bg-gradient-to-br from-red-600 to-yellow-600 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-5xl mb-2">🎬</div>
                <p className="text-sm font-bold line-clamp-2 px-2">{movie.title}</p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-30 transition duration-300 flex items-center justify-center">
            <div className="text-white text-4xl opacity-0 group-hover:opacity-100 transition">
            </div>
          </div>
        </div>

        {/* Contenido */}
        <div className="p-5 flex flex-col flex-grow bg-gradient-to-b from-gray-800 to-gray-900">
          <h2 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-red-500 transition">
            {movie.title}
          </h2>

          <p className="text-gray-400 text-xs flex-grow line-clamp-2 mb-3">
            {movie.description}
          </p>

          {/* Metadata */}
          <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-700 pt-3">
            <span className="bg-gray-700 px-2 py-1 rounded">📅 {movie.year}</span>
            {movie.duration && (
              <span className="bg-gray-700 px-2 py-1 rounded">⏱️ {movie.duration}m</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
