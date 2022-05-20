import React from 'react'
import { ActivityIndicator, Button, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies'


export const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}
            >
                <ActivityIndicator color={'#5856D6'} size={60} />
            </View>
        )
    }

    return (
        <View style={{ marginTop: top + 5 }}>
            <MoviePoster movie={peliculasEnCine[6]} />
        </View>
    )
}
