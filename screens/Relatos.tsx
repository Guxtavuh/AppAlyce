import { Button, TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { Alert,View, Text, ScrollView, Image } from "react-native";

import { styles } from "./StylesPos";

export default function Relatos({navigation}){
    return(
        <View style={styles.tudo}>
                
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <View style={styles.viewvoltar}>
                <AntDesign style={styles.iconvol} name="left" size={40} color="black"/>
                    <Text style={styles.voltext}>Voltar</Text>
                </View>
                </TouchableOpacity>

                
         <ScrollView horizontal={false}>
                {/* Header, topo, titulo */}
                <View style={styles.viewtitulo}>
                    <Image style={styles.logoalyce} source={require("../screens/img/LogoAlyceV3.png")}></Image>
                </View>
                <Button title="Alert" onPress={()=>{
                    Alert.alert("Confirmação","É necessario possuir conta")
                }} ></Button>
                <View style={styles.viewtitulo}>
                    <Image style={styles.logoalyce} source={require("../screens/img/testegif.gif")}></Image>
                </View>

        </ScrollView>


                




        </View>
    )}