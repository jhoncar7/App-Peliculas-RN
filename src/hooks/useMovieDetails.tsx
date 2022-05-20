import { useState, useEffect } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { CreditsResponse, Cast } from '../interfaces/creditsInterface';


interface MovieDetails {
    isLoading: boolean;
    cast: Cast[];
    movieFull?: MovieFull;
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        cast: [],
        movieFull: undefined
    });

    const getMovieDetails = async () => {
        const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
        const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

        const [movieDetailsProm, castProm] = await Promise.all([movieDetailsPromise, castPromise]);

        setState({
            isLoading: false,
            cast: castProm.data.cast,
            movieFull: movieDetailsProm.data
        });
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state
    };
}
