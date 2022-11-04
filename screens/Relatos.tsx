import { useState } from "react";
import { ipserver } from "../config/servidor";
import { Button, TextInput, TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { Alert,View, Text, ScrollView, Image } from "react-native";

import { styles } from "./StyleRelatos";

export default function Relatos({navigation}){
    const [relato,setRelato] = useState("");
    return(
        <View style={styles.tudo}>
            {/* {(Alert.alert("Aviso","É necessario possuir conta para realizar um relato, caso faça sem o mesmo será descartado"))}  */}
                
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

                {/* View para todos views de relato e relatos ficarem dentro */}
                <View style={styles.pairelato}>
                    <ScrollView horizontal={true}>
                    
                    {/* View para cada relato */}
                        <View style={styles.viewrelato}>
                            <ScrollView horizontal={false}>
                                <Text style={styles.relato}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum quo deserunt, consectetur omnis aut sequi ut tempore velit magni iste non corporis recusandae unde, laborum sapiente itaque. Deleniti.</Text>
                            </ScrollView>
                        </View>
                    {/* View para cada relato */}
                    <View style={styles.viewrelato}>
                            <ScrollView horizontal={false}>
                                <Text style={styles.relato}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum quo deserunt, consectetur omnis aut sequi ut tempore velit magni iste non corporis recusandae unde, laborum sapiente itaque. Deleniti.</Text>
                            </ScrollView>
                    </View>
                    {/* View para cada relato */}
                    <View style={styles.viewrelato}>
                            <ScrollView horizontal={false}>
                                <Text style={styles.relato}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum quo deserunt, consectetur omnis aut sequi ut tempore velit magni iste non corporis recusandae unde, laborum sapiente itaque. Deleniti.</Text>
                            </ScrollView>
                    </View>
                    {/* View para cada relato */}
                    <View style={styles.viewrelato}>
                            <ScrollView horizontal={false}>
                                <Text style={styles.relato}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum quo deserunt, consectetur omnis aut sequi ut tempore velit magni iste non corporis recusandae unde, laborum sapiente itaque. Deleniti.</Text>
                            </ScrollView>
                    </View>
                    {/* View para cada relato */}
                    <View style={styles.viewrelato}>
                            <ScrollView horizontal={false}>
                                <Text style={styles.relato}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio incidunt cum quo deserunt, consectetur omnis aut sequi ut tempore velit magni iste non corporis recusandae unde, laborum sapiente itaque. Deleniti.</Text>
                            </ScrollView>
                    </View>
                    </ScrollView>               
                </View>
                <View style={styles.relatararea}>
                    <Text style={styles.titure}>
                            Você gostaria de contar{'\n'} sua experiencia e fazer seu relato?
                    </Text>
                    {/* Area de formulario */}
                    <View style={styles.userco}>

                    <TextInput value={relato} placeholder="Seu relato" style={styles.relau} onChangeText={(value)=>setRelato(value)} multiline={true} />
                    </View>

                    <TouchableOpacity style={{display:"flex", justifyContent:"center", alignItems:"center"}}onPress={()=>{
                                                    if(relato.trim()=="" ){
                                                        return Alert.alert("Erro","Você deve preencher o relato");
                                                    }
                                                    relatar(relato)
                                                    return Alert.alert("Aviso","Você fez seu relato com sucesso");
                                                    }}>
                            <Text style={styles.btnenviar}  > Enviar</Text>

                    </TouchableOpacity>
                </View>
        </ScrollView>
        </View>
    )}

    async function relatar(relato:any){
        let result = "";
          await fetch(`${ipserver}/relato/relato`,{
              method:"POST",
              headers:{
                  accept:"application/json",
                  "content-type":"application/json"
              },
              body:JSON.stringify({
                 relato:relato
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