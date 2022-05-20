import React from 'react'
import { View, Text, FlatList } from 'react-native';
import { MovieFull } from '../interfaces/movieInterface';
import currencyformatter from 'currency-formatter';
import { Cast } from '../interfaces/creditsInterface';
import { CastItem } from './CastItem';


interface Props {
    movieFull: MovieFull;
    cast: Cast[];
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
    return (
        <>
            {/* Detalle */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Voto: </Text>
                    <Text> {movieFull.vote_average}</Text>
                    <Text style={{ marginLeft: 5 }}>
                        - {movieFull.genres.map(genre => genre.name).join('- ')}
                    </Text>
                </View>

                <Text style={{ fontSize: 20, marginTop: 8, fontWeight: 'bold', color: '#000' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16 }}>{movieFull.overview}</Text>
                <Text style={{ fontSize: 20, marginTop: 8, fontWeight: 'bold', color: '#000' }}>
                    Presupuesto
                </Text>
                <Text>{currencyformatter.format(movieFull.budget, { code: 'USD' })}</Text>
            </View>

            {/* Casting */}
            <View style={{ marginTop: 5, marginBottom: 100 }}>
                <Text style={{ fontSize: 20, marginTop: 8, fontWeight: 'bold', marginHorizontal: 20, color: '#000' }}>
                    Actores
                </Text>
                {/* <CastItem actor={cast[0]} /> */}
                <FlatList
                    horizontal
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70}}
                />
            </View>
        </>
    )
}
