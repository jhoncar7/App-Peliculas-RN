import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigation/Navigation';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

const screenHeight = Dimensions.get('window').height

interface Props extends StackScreenProps<RootStackParams, 'Details'> { }

export const DetailScreen = ({ route, navigation }: Props) => {

    console.log(navigation);

    const movie = route.params;

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

    console.log(isLoading);

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

            {
                isLoading ?
                    <ActivityIndicator size={30} color="grey" style={{ marginTop: 20 }} />/* mostrar icono de cargando */
                    : <MovieDetails movieFull={movieFull!} cast={cast} />
            }


            <TouchableOpacity
                style={{
                    position: 'absolute',
                    right: 20,
                    /* top: 30,
                    left: 20,
                    elevation: 10,
                    zIndex: 999,  */
                    backgroundColor: '#000',
                    borderRadius: 50,
                    width: 50,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                //onPress={() => navigation.pop()}
            >
                <Text style={{
                    fontSize: 50,
                    fontWeight: 'bold',
                    //position: 'absolute',
                    color: '#fff',
                }}
                onPress={() => navigation.pop()}
                >{'X'}</Text>
            </TouchableOpacity>


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
        //resizeMode: 'center',
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