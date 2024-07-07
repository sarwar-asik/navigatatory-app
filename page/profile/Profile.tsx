import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default function Profile({ navigation }: { navigation: any }) {
    return (
        <View>
            <Text>Profile</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home")
            }}
                style={{ marginTop: 20, marginBottom: 20 }}>
                <Text>Go Home</Text>
            </TouchableOpacity>
        </View>
    )
}
