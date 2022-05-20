import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RootStackParams } from '../navigation/Navigation';

const screenHeight = Dimensions.get('window').height

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailScreen = ({ route }: Props) => {

    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    console.log('movie.original_language: ', movie.original_language);

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri }}
                    style={styles.posterImage}
                />
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.subTitle}>{movie.original_title}</Text>
                <Text style={styles.title}>{movie.title}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.5,
    },
    posterImage: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    subTitle: {
        fontSize: 15,
        color: '#858585',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    }
});