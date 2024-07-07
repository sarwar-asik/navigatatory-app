import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './page/Home/Home';
import Blog from './page/Blogs/Blog';
import Logo from './components/Common/Logo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from './page/profile/Profile';




// const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} />
        <Drawer.Screen name='Blog' component={Blog} />
        <Drawer.Screen name='Profile' component={Profile} />

      </Drawer.Navigator>
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
