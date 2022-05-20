import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';


export const useMovies = () => {

    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading);
    const getMovies = async () => {
        setIsLoading(true);
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setPeliculasEnCine(resp.data.results);
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        peliculasEnCine,
        isLoading
    }
}
