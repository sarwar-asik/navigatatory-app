import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IUser } from './user.type'

export default function Home({ navigation }: { navigation: any }) {


    const userData: IUser = {
        name: "Jhon",
        age: 25,
        address: "USA",
        phone: 1234567890

    }

    return (
        <View>
            <Text>Home Page</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Blog", {
                    ...userData
                })
            }} style={{ marginTop: 20, marginBottom: 20 }}>
                <Text>Go Blogs</Text>
            </TouchableOpacity>
        </View>
    )
}
