import type { Movie } from "../../model/Movie.model";
import { MoviesCard } from "./MoviesCard";

export function MoviesList({movies}: {movies: Movie[] }) {
    return(
        <section className="bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen py-12 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Título principal */}
                <div className="mb-16 text-center">
                    <h1 className="text-6xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
                        🎥 Películas
                    </h1>
                    <p className="text-gray-400 text-xl">Descubre nuestro catálogo completo</p>
                    <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mt-4 rounded"></div>
                </div>

                {/* Grid de películas */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {movies.map((m) => (
                        <MoviesCard key={m.id} movie={m} />
                    ))}
                </div>
            </div>
        </section>
    );
}