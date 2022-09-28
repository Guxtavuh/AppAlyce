import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "./StylesLogin";
import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login({navigation}){
    
    const [usuario,setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    return(
        
        <View style={styles.login}>
            
            <Image style={styles.logoalyce} source={require("../screens/img/LogoAlyceV3.png")}></Image>
            
            <TextInput placeholder="Usuario" style={styles.caixa}value={usuario}onChangeText={(value)=>setUsuario(value)}/>
            <TextInput placeholder="Senha" style={styles.caixa2} secureTextEntry value={senha}onChangeText={(value)=>setSenha(value)}/>



            {/* Botão logar */}
            <TouchableOpacity onPress={()=>{
                // efetuarLogin(usuario,senha);
                navigation.navigate("Home");
                setUsuario("");
                setSenha("");
            }}>
                 <Image style={styles.btn} source={require("../screens/img/btnAcessar.png")}></Image>
           </TouchableOpacity> 


            {/* Cadastrar */}
            <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")} style={styles}>
            <Image style={styles.btn2} source={require("../screens/img/btnCadastrar.png")}></Image>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>{
                // efetuarLogin(usuario,senha);
                navigation.navigate("Home");
            }}>

                <Text style={styles.ent} >Entrar sem Login</Text>
            </TouchableOpacity>
        </View>
        
    )
}