import React from "react";
import {NavigationContainer, StackActions} from "@react-navigation/native"
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./screens/Home"
import Prevencao from "./screens/Prevencao";




//Criar o elemento que nos ajudarar a empilhar as telas

const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Prevencao" component={Prevencao}/>
  </Stack.Navigator>

</NavigationContainer>
  );
}

