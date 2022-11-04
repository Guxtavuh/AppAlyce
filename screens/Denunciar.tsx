import { useState } from "react";
import { ipserver } from "../config/servidor";


import { Button, TextInput, TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { Alert,View, Text, ScrollView, Image } from "react-native";
import { styles } from "./DenunciarStyle";


export default function Denunciar({navigation}){
    const [endereco,setEndereco] = useState("");
    const [denuncia, setDenuncia] = useState("");
    return(
        // view tudo, tela home
        <View style={styles.tudo}>

            <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                <View style={styles.viewvoltar}>
                <AntDesign style={styles.iconvol} name="left" size={40} color="black"/>
                    <Text style={styles.voltext}>Voltar</Text>
                </View>
                </TouchableOpacity>
            {/* Scroll da tela */}
            <ScrollView horizontal={false}>

                {/* Header, topo, titulo */}
                <View style={styles.viewtitulo}>
                    <Image style={styles.logoalyce} source={require("../screens/img/LogoAlyceV3.png")}></Image>
                </View>

                <View style={styles.titu}>
                    <Text style={styles.txt1}>Realize sua Denuncia nos campos abaixos!</Text>
                    <Text style={styles.txt2}>iremos encaminhar para os orgãos reponsaveis</Text>
                </View>


                                    {/* Area de formulario */}
                    <View style={styles.userco}>
                    <TextInput placeholder="Endereço" style={styles.relausers} value={endereco} onChangeText={(value)=>setEndereco(value)}/>
                    <TextInput placeholder="Denuncia" style={styles.relau} value={denuncia} onChangeText={(value)=>setDenuncia(value)} multiline={true}/>
                    </View>

                    <TouchableOpacity style={{display:"flex", justifyContent:"center", alignItems:"center"}}onPress={()=>{
                                                    if(endereco.trim()== "" ){
                                                        return Alert.alert("Erro","Você deve preencher todos os campos");
                                                    }
                                                    else if(denuncia.trim() == ""){
                                                        return Alert.alert("Erro","Você deve preencher todos os campos");
                                                    }
                                                    denunciar(endereco,denuncia)
                                                    return Alert.alert("Aviso","Você fez sua denuncia com sucesso");
                                                    }}> 
                            <Text style={styles.btnenviar}  > Enviar</Text>
                    </TouchableOpacity>

                </ScrollView>  
                {/*Fim Scroll view  */}
        </View>
    )

}



async function denunciar(endereco:any, denuncia:any){
    let result = "";
      await fetch(`${ipserver}/denuncia/denuncia`,{
          method:"POST",
          headers:{
              accept:"application/json",
              "content-type":"application/json"
          },
          body:JSON.stringify({
             endereco:endereco,
             denuncia:denuncia
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