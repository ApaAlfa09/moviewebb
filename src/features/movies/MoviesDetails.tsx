import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getMoviesById } from "../../service/movies.service";
import type { Movie } from "../../model/Movie.model";

export default function MoviesDetails() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!id) return;

        getMoviesById(id)
        .then((movie) => setMovie(movie))
        .finally(() => setLoading(false));
    }, [id]);

    if (loading){
        return (
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block mb-6">
                        <div className="w-16 h-16 border-4 border-red-500 border-t-yellow-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-white text-2xl font-bold">Cargando película...</p>
                </div>
            </div>
        );
    }

    if (!movie) return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center">
            <div className="text-center">
                <p className="text-white text-2xl font-bold mb-6">😢 Película no encontrada</p>
                <button 
                    onClick={() => navigate('/movies')}
                    className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition"
                >
                    Volver a Películas
                </button>
            </div>
        </div>
    );

    return(
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <button 
                    onClick={() => navigate('/movies')}
                    className="mb-8 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-bold rounded-lg transition flex items-center gap-2"
                >
                    ← Volver a Películas
                </button>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                        {/* Imagen del póster */}
                        <div className="flex items-start justify-center">
                            <img
                                src={movie.posterURL}
                                alt={movie.title}
                                className="w-full h-auto max-w-sm rounded-2xl shadow-2xl object-cover border-4 border-red-500"
                            />
                        </div>

                        {/* Detalles de la película */}
                        <div className="flex flex-col justify-start">
                            {/* Título */}
                            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
                                {movie.title}
                            </h1>

                            {/* Año, Duración, Director */}
                            <div className="flex flex-wrap gap-4 mb-8">
                                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                                    📅 {movie.year}
                                </div>
                                {movie.duration && (
                                    <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                                        ⏱️ {movie.duration} min
                                    </div>
                                )}
                                {movie.director && (
                                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg">
                                        🎬 {movie.director}
                                    </div>
                                )}
                            </div>

                            {/* Separador */}
                            <hr className="my-6 border-gray-600" />

                            {/* Descripción */}
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-4">
                                    📝 Sinopsis
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed ">
                                    {movie.description}
                                </p>
                            </div>

                            {/* Rating */}
                            <div className="mt-8 p-6 bg-gray-700 rounded-xl">
                                <div className="flex items-center justify-between">
                                    <span className="text-white font-bold text-lg">Rating IMDB:</span>
                                    <div className="flex items-center gap-2">
                                        <div className="flex gap-1 text-2xl" aria-hidden>
                                            {Array.from({ length: 5 }).map((_, i) => {
                                                const filled = i < Math.round(movie.rating ?? 0);
                                                return (
                                                    <span key={i} className={filled ? 'text-yellow-400' : 'text-gray-500'}>
                                                        {filled ? '★' : '☆'}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                        <span className="text-gray-200 font-bold">{(movie.rating ?? 0).toFixed(1)}/5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}