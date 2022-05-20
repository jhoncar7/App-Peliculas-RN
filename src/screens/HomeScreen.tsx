import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, LogBox, ScrollView, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies'

const { width: windowsWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();
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
            <View style={{ marginTop: top + 7 }}>
                {/* <MoviePoster movie={peliculasEnCine[6]} /> */}
                {/* Carosel Principal */}
                <View style={{ height: 380 }}>
                    <Carousel
                        data={nowPlaying}
                        renderItem={({ item }) => <MoviePoster movie={item} />}
                        sliderWidth={windowsWidth}
                        itemWidth={250}
                    />
                </View>

                {/* Peliculas Populares */}
                <HorizontalSlider movies={popular} title={'Peliculas Populares'} />
                <HorizontalSlider movies={topRated} title={'Top Rated'} />
                <HorizontalSlider movies={upcoming} title={'Upcoming'} />



            </View>
        </ScrollView>
    )
}
