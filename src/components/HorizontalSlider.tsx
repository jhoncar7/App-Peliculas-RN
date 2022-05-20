import React from 'react'
import { FlatList, Text, View } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
    title?: string;
    movies: Movie[];
}
export const HorizontalSlider = ({ title, movies }: Props) => {
    return (
        <View style={{ height: (title) ? 250 : 200 }}>
            {
                title && <Text style={{ fontSize: 30, fontWeight: 'bold', marginLeft: 5 }}>{title}</Text>
            }
            <FlatList
                data={movies}
                renderItem={({ item }) => <MoviePoster movie={item} width={120} height={180} />}
                keyExtractor={item => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}//para que no se muestre la barra
            />
        </View>
    )
}
