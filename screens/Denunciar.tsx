import { Button, TextInput, TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { Alert,View, Text, ScrollView, Image } from "react-native";
import { styles } from "./DenunciarStyle";


export default function Denunciar({navigation}){
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
                    <TextInput placeholder="Usuario" style={styles.relausers}/>
                    <TextInput placeholder="Denuncia" style={styles.relau}/>
                    </View>

                    <TouchableOpacity style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
                            <Text style={styles.btnenviar}  > Enviar</Text>
                    </TouchableOpacity>

                </ScrollView>  
                {/*Fim Scroll view  */}
        </View>
    )

}