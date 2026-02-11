import type { Movie } from "../model/Movie.model";

const Movies_URL = "/data/movies.json";

export async function getMovies(): Promise<Movie[]> {
    const response = await fetch(Movies_URL);

    if (!response.ok) {
        throw new Error(
            `No se pudo cargar movies.json (status $(response))`
        );
    }

    const data = await response.json();
    console.log("Peliculas Cargadas", data);
    return data as Movie[];
}

export async function getMoviesById(id:string): Promise<Movie | null> {
    const movies = await getMovies();
    const found = movies.find((m) => String (m.id) === String(id));
    return found ?? null;
}