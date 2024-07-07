import React from 'react'
import { Image, View } from 'react-native'

export default function Logo() {
    return (
        <View>
            <Image source={require('../../assets/favicon.png')} style={{ width: 50, height: 50 }} />
        </View>
    )
}
