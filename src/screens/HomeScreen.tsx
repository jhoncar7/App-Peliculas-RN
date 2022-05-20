import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, LogBox, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies'

const { width: windowsWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { peliculasEnCine, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    LogBox.ignoreLogs([
        'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
        'NativeBase: The contrast ratio of'
    ]);

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
        <ScrollView>
            <View style={{ marginTop: top }}>
                {/* <MoviePoster movie={peliculasEnCine[6]} /> */}
                {/* Carosel Principal */}
                <View style={{ height: 380, backgroundColor: 'blue', }}>
                    <Carousel
                        data={peliculasEnCine}
                        renderItem={({ item }) => <MoviePoster movie={item} />}
                        sliderWidth={windowsWidth}
                        itemWidth={250}
                    />
                </View>

                {/* Peliculas Populares */}
                <View style={{ backgroundColor: 'red', height: 250 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En Cine</Text>
                    <FlatList
                        data={peliculasEnCine}
                        renderItem={({ item }) => <MoviePoster movie={item} width={120} height={180} />}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}//para que no se muestre la barra
                    />
                </View>

                {/* Peliculas Populares */}
                <View style={{ backgroundColor: 'red', height: 250 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En Cine</Text>
                    <FlatList
                        data={peliculasEnCine}
                        renderItem={({ item }) => <MoviePoster movie={item} width={120} height={180} />}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}//para que no se muestre la barra
                    />
                </View>

                {/* Peliculas Populares */}
                <View style={{ backgroundColor: 'red', height: 250 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En Cine</Text>
                    <FlatList
                        data={peliculasEnCine}
                        renderItem={({ item }) => <MoviePoster movie={item} width={120} height={180} />}
                        keyExtractor={item => item.id.toString()}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}//para que no se muestre la barra
                    />
                </View>
            </View>
        </ScrollView>
    )
}
