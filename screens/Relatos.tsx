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

                
         
                {/* Header, topo, titulo */}
                <View style={styles.viewtitulo}>
                    <Image style={styles.logoalyce} source={require("../screens/img/LogoAlyceV3.png")}></Image>
                </View>

                {/* View para todos views de relato e relatos ficarem dentro */}
                <View style={styles.pairelato}>
                    <ScrollView horizontal={true}>
                    
                    {/* View para cada relato */}
                        <View style={styles.viewrelato}>
                                
                                <ScrollView >
                                
                                <Text style={styles.relato}>“Ele era tranquilo, educado e calmo. Só depois fui saber que já tinha sido agressivo com ex-namoradas”, conta a designer sobre seu agressor, com quem teve um relacionamento de três meses. “Em maio de 2020, descobri que estava grávida, ele não aceitou e veio com uma arma de fogo para cima de mim, para que eu tirasse o bebê”, diz Thamires, que via Lei Maria da Penha, entrou em setembro do mesmo ano para o Programa Prevenção à Violência Doméstica. Entre outras diligências, isso estabeleceu uma primeira medida protetiva determinando que o agressor precisava ficar no mínimo a 300 metros de distância dela.”</Text>
                                </ScrollView>   
                        
                        
                        </View>
                    {/* View para cada relato */}
                    <View style={styles.viewrelato}>
                            <ScrollView horizontal={false}>
                                <Text style={styles.relato}>“Era pra eu estar morta”, desabafa a designer juiz-forana Thamires Guedes Rabello, 27, ao telefone. “Mesmo depois da medida protetiva, eu registrei sete boletins de ocorrência contra ele, o último tem duas semanas”, completa ela, uma das mulheres vítimas de violência doméstica registradas em 2020 em Juiz de Fora segundo dados da Delegacia Especializada no Atendimento à Mulher (Deam). De janeiro a julho de 2020, o órgão solicitou 659 medidas protetivas contra agressores de mulheres. No mesmo período deste ano, foram 531.</Text>
                            </ScrollView>
                    </View>
                    {/* View para cada relato */}
                    <View style={styles.viewrelato}>
                            <ScrollView horizontal={false}>
                                <Text style={styles.relato}>“Por várias vezes tentei me separar, mas aí a perseguição era tanta, e não atingia só a mim, era meu trabalho, minha família… Diante das perseguições eu acabava voltando, até que depois de 11 anos encontrei forças em Deus pra criar coragem e sair daquela situação, Por fim, ela deixou um alerta para as mulheres que vivem em um relacionamento abusivo: “Mulheres, não se calem. Não tenham medo. Se o medo for da morte, entendam que vocês que vivem uma situação destas dentro de casa estão com a alma morta em um corpo que apenas existe, não vive.”

Jackeline registrou um boletim de ocorrência sobre a agressão. Após passar pela Unidade de Pronto Atendimento de Araçariguama ela aguarda vaga para fazer uma cirurgia no Centro Hospitalar de Sorocaba (CHS).”</Text>
                            </ScrollView>
                    </View>
                    {/* View para cada relato */}
                    <View style={styles.viewrelato}>
                            <ScrollView horizontal={false}>
                                <Text style={styles.relato}>" A gente ficava sem comida, sem água e apanhando... Meus filhos, também amarrados, apanhavam de fios e ele enforcava a gente também", relatou Edna, 40, sobre os maus-tratos sofridos durante os 17 anos em que foi mantida com os dois filhos em cárcere privado numa casa insalubre no bairro Guaratiba, na zona oeste do Rio de Janeiro.”</Text>
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
                <ScrollView horizontal={false}>
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