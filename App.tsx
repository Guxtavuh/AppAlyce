import React from "react";
import {NavigationContainer, StackActions} from "@react-navigation/native"
import 'react-native-gesture-handler';
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from "./screens/Home"
import Prevencao from "./screens/Prevencao";
import PosAgressao from "./screens/PosAgressao";
import Relatos from "./screens/Relatos";
import Denunciar from "./screens/Denunciar";
import {
  useFonts,
  Jost_400Regular,
  Jost_700Bold,
  
} from '@expo-google-fonts/jost'
import AppLoading from "expo-app-loading";




//Const que irá ajudar a empilhar a tela

const Stack = createNativeStackNavigator();

export default function App() {
  const[fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_700Bold
})


  return (
  
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    <Stack.Screen name="Cadastro" component={Cadastro}/>
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    <Stack.Screen name="Prevencao" component={Prevencao} options={{headerShown:false}}/>
    <Stack.Screen name="PosAgressao" component={PosAgressao}options={{headerShown:false}} />
    <Stack.Screen name="Relatos" component={Relatos}options={{headerShown:false}} />
    <Stack.Screen name="Denunciar" component={Denunciar}options={{headerShown:false}} />

  </Stack.Navigator>

</NavigationContainer>
  );
}

