import { useState } from "react";
import { ipserver } from "../config/servidor";
import { styles } from "./StylesLogin";
import { Alert, Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";

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

if(usuario=="" || senha == ""){
return Alert.alert("Erro","Você deve preencher todos os campos");
}

efetuarLogin(usuario,senha).then((rs)=>{
 if (rs=="Logado"){
    Alert.alert("Acesso","Você está logado")
  navigation.navigate("Home");
  setUsuario("");
   setSenha("");
   }
   else{
    Alert.alert(rs)   
   return;
  }
 })
 .catch((error)=> console.error(`Erro ao executar -> ${error}`))

}}>
                 <Image style={styles.btn} source={require("../screens/img/btnAcessar.png")}></Image>
           </TouchableOpacity> 


            {/* Cadastrar */}
            <TouchableOpacity onPress={()=>navigation.navigate("Cadastro")}>
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

async function efetuarLogin(usuario:any, senha:any){
    let result = "";
      await fetch(`${ipserver}/usuarios/login`,{
          method:"POST",
          headers:{
              accept:"application/json",
              "content-type":"application/json"
          },
          body:JSON.stringify({
              nomeusuario:usuario.toLowerCase(),
              senha:senha
          })
  
      })
      .then((response)=>response.json())
      .then((rs)=>{
          console.log(rs);
          
          result = rs.output;
      })
      .catch((erro)=>console.error(`Erro na api -> ${erro}`));
      return result;
  }