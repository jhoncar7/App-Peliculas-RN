import React, { useContext, useEffect } from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { GradientContext } from '../context/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = ({ children }: Props) => {

    const { colors, prevColors, setPrevMainColors } = useContext(GradientContext);
    const { opacity, fadeIn, fadeOut } = useFade();

    useEffect(() => {
        fadeIn(() => {
            setPrevMainColors(colors);
            fadeOut(0);
        });
    }, [colors]);


    return (
        <View style={{ flex: 1, backgroundColor: '#084F6A' }}>
            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary, 'white']}
                style={{ ...StyleSheet.absoluteFillObject }}
                start={{ x: 0, y: 0 }}// cero inicio, ambas start y end son el inicio y fin
                end={{ x: 0.5, y: 0.7 }}// 1 es 100% de la pantalla
            />

            <Animated.View
                style={{ ...StyleSheet.absoluteFillObject, opacity }}
            >
                <LinearGradient
                    colors={[colors.primary, colors.secondary, 'white']}
                    style={{ ...StyleSheet.absoluteFillObject }}
                    start={{ x: 0, y: 0 }}// cero inicio, ambas start y end son el inicio y fin
                    end={{ x: 0.5, y: 0.7 }}// 1 es 100% de la pantalla
                />
            </Animated.View>
            {children}
        </View>
    )
}
