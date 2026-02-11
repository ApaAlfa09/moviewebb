import { useEffect, useState } from "react";
import { MoviesList } from "./MoviesList";
import type { Movie } from "../../model/Movie.model";
import { getMovies } from "../../service/movies.service";

export default function Movies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getMovies()
            .then(setMovies)
            .finally(() => setLoading(false));
    }, []);

    if (loading)
        return(
            <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 flex items-center justify-center">
                <div className="text-center">
                    <div className="inline-block mb-6">
                        <div className="w-16 h-16 border-4 border-red-500 border-t-yellow-500 rounded-full animate-spin"></div>
                    </div>
                    <p className="text-white text-2xl font-bold">Cargando películas...</p>
                </div>
            </div>
        );

    return(
        <MoviesList movies={movies} />
    );
}