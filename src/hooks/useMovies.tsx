import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
    nowPlaying: Movie[],
    popular: Movie[],
    upcoming: Movie[],
    topRated: Movie[],
}

export const useMovies = () => {

    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        upcoming: [],
        topRated: [],
    });

    const [isLoading, setIsLoading] = useState(true);
    console.log(isLoading);
    const getMovies = async () => {
        //setIsLoading(true);
        const nowPlaying = movieDB.get<MovieDBResponse>('/now_playing');
        const popular = movieDB.get<MovieDBResponse>('/popular');
        const topRated = movieDB.get<MovieDBResponse>('/top_rated');
        const upcoming = movieDB.get<MovieDBResponse>('/upcoming');

        const resp = await Promise.all([nowPlaying, popular, topRated, upcoming])
        setMoviesState({
            nowPlaying: resp[0].data.results,
            popular: resp[1].data.results,
            topRated: resp[2].data.results,
            upcoming: resp[3].data.results,
        });
        setIsLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
        isLoading,
    }
}
