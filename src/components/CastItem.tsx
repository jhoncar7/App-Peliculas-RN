import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Cast } from '../interfaces/creditsInterface';

interface Props {
    actor: Cast
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && <Image
                    source={{ uri }}
                    style={{ width: 50, height: 50, borderRadius: 25, }}
                />
            }
            <View style={styles.actorInfo}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color:'#000' }}>
                    {actor.name}
                </Text>
                <Text style={{ fontSize: 16, opacity: 0.7 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,
        elevation: 9,
        marginHorizontal:11,
        paddingRight:10,
        height: 50,
    },
    actorInfo: {
        marginLeft: 10,
        marginTop: 2,
    }
});