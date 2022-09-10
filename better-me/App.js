import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import AnxietyScreen from './Screens/AnxietyScreen';
import { 
  Calligraffitti_400Regular 
} from '@expo-google-fonts/calligraffitti'
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Calligraffitti': Calligraffitti_400Regular,
  });
  if(!fontsLoaded)
  {
    return null;
  }
  return (
        <NavigationContainer> 
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="home"
        >
          <Stack.Screen name="home" 
                        component={HomeScreen} 
                        options={{
                          headerShown: true,
                          headerTitleAlign: "center",
                          title: "HealthCanon",
                          headerStyle: {
                            backgroundColor: "#ff59f3",
                          },
                          headerTitleStyle: {
                            fontSize: 30,
                            color: "#FFFFFF",
                            fontFamily: "Calligraffitti"
                          }
                        }}
          />
          <Stack.Screen name="anxiety" 
                        component={AnxietyScreen} 
                        options={{
                          headerShown: true,
                          headerTitleAlign: "center",
                          title: "You've got this!",
                          headerStyle: {
                            backgroundColor: "#ff59f3",
                          },
                          headerTitleStyle: {
                            fontSize: 25,
                            color: "#FFFFFF",
                            fontFamily: "Calligraffitti"
                          }
                        }}
          />
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
