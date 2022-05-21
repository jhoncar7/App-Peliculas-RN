import React from 'react'
import { Animated, Button, Text, View } from 'react-native'
import { useFade } from '../hooks/useFade'

export const FadeScreen = () => {

    const { fadeIn, opacity, fadeOut } = useFade()

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Animated.View
                style={{
                    backgroundColor: '#084F6A',
                    height: 150,
                    width: 150,
                    borderWidth: 10,
                    borderColor: 'white',
                    marginBottom: 10,
                    opacity
                }}
            />

            <Button title="Fade In" onPress={() => fadeIn()} />
            <Text>  </Text>
            <Button title="Fade Out" onPress={() => fadeOut()} />
        </View>
    )
}
