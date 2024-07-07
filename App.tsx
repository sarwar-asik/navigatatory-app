import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './page/Home/Home';
import Blog from './page/Blogs/Blog';




const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{
          title: "Home Page",
          headerStyle: {
            backgroundColor: '#50B498',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: "center"
        }} />
        <Stack.Screen name='Blog' component={Blog} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
