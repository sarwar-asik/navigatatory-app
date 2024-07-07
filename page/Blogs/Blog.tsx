import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { IUser } from '../Home/user.type'

export default function Blog({ navigation, route }: { navigation: any, route: any }) {
    const userData: IUser = route.params
    return (
        <View>
            <Text>Blog</Text>
            <TouchableOpacity onPress={() => {
                navigation.navigate("Home")
            }} style={{ marginTop: 20, marginBottom: 20 }}>
                <Text>Go Home</Text>
            </TouchableOpacity>

            <View>
                <Text>User Details:</Text>
                <Text>User Name : {userData?.name}</Text>
            </View>
        </View>
    )
}
