import React, { useContext, useEffect } from 'react'
import { ActivityIndicator, Dimensions, FlatList, LogBox, ScrollView, Text, View } from 'react-native'
import ImageColors from 'react-native-image-colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { GradientBackground } from '../components/GradientBackground';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { getImageColors } from '../helpers/getColores';
import { useMovies } from '../hooks/useMovies'
import { GradientContext } from '../context/GradientContext';

const { width: windowsWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { setMainColors } = useContext(GradientContext);

    const { nowPlaying, popular, upcoming, topRated, isLoading } = useMovies();
    const { top } = useSafeAreaInsets();
    LogBox.ignoreLogs([
        'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
        'NativeBase: The contrast ratio of'
    ]);

    const getPosterColors = async (index: number) => {
        const movie = nowPlaying[index];
        const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        const [primary = 'green', secondary = 'orange'] = await getImageColors(uri);
        setMainColors({ primary, secondary });
    }

    useEffect(() => {
        if (nowPlaying.length > 0) {
            getPosterColors(0);
        }
    }, [nowPlaying])


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
        <GradientBackground>
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
                            onSnapToItem={(index) => getPosterColors(index)}
                        />
                    </View>

                    {/* Peliculas Populares */}
                    <HorizontalSlider movies={popular} title={'Peliculas Populares'} />
                    <HorizontalSlider movies={topRated} title={'Top Rated'} />
                    <HorizontalSlider movies={upcoming} title={'Upcoming'} />



                </View>
            </ScrollView>
        </GradientBackground>
    )
}
