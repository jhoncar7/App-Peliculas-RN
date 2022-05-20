import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie;
    height?: number;
    width?: number;
}

export const MoviePoster = ({ movie, height = 300, width = 230 }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const navigation: any = useNavigation()

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', movie)}
            activeOpacity={0.8}
            style={{
                width,
                height,
                marginHorizontal: 5,
                paddingBottom: 10,
                paddingHorizontal: 5,
            }}>
            <View
                style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={{ uri }}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
        resizeMode: 'cover',
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    }
});