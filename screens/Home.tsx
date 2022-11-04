import { View, Text, ScrollView, Image, Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./StyleHome";
import { useState } from "react"

export default function Home({navigation}){
    return(
        // view tudo, tela home
        <View style={styles.tudo}>
            {/* Scroll da tela */}
            <ScrollView horizontal={false}>

                {/* Header, topo, titulo */}
                <View style={styles.viewtitulo}>
                    <Image style={styles.logoalyce} source={require("../screens/img/LogoAlyceV3.png")}></Image>
                </View>


                {/* subs titulos */}
                <View style={styles.viewtxt1}>
                    <Text style={styles.txt1}>
                        Bem-vindo ao Alyce, estamos aqui para te auxiliar!
                    </Text>
                    
                    <Text style={styles.txt2}>
                        Como podemos Ajudar?
                    </Text>



                {/* Area de botoes */}

                <TouchableOpacity onPress={()=>navigation.navigate("Prevencao")} >
                <View style={styles.btn11}>
                <Image style={styles.btnalycee} source={require("../screens/img/btnPrevencao.png")}></Image>
                </View> 
                </TouchableOpacity>
                
                <TouchableOpacity onPress={()=>navigation.navigate("PosAgressao")} >
                <View style={styles.btn11}>
                <Image style={styles.btnalycee} source={require("../screens/img/btnPosAgressao.png")}></Image>
                </View> 
                </TouchableOpacity>

                <TouchableOpacity onPress={ ()=>navigation.navigate("Relatos")} >
                <View style={styles.btn11}>
                <Image style={styles.btnalycee} source={require("../screens/img/btnRelatos.png")}></Image>
                </View> 
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>navigation.navigate("Denunciar")} >
                <View style={styles.btn11}>
                <Image style={styles.btnalycee} source={require("../screens/img/btnDenunciar.png")}></Image>
                </View> 
                </TouchableOpacity>
                </View>
                {/* Fim da área de botões  */}

                
                <View style={styles.discagemarea} >
                <TouchableOpacity onPress={()=> Linking.openURL("tel://190")}>
                <Image style={styles.btnalycee1} source={require("../screens/img/btn190c.png")}></Image>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=> Linking.openURL("tel://180")}>
                <Image style={styles.btnalycee1} source={require("../screens/img/btn180b.png")}></Image>
                </TouchableOpacity>

{/* 
                <TouchableOpacity onPress={()=> Linking.openURL("https://api.whatsapp.com/send?phone=556196565008&text=Ol%C3%A1%20teste%20alyce")}>
                    <Text>ZIPZAP</Text>
                </TouchableOpacity>  */}

                </View>
                </ScrollView>  
                {/*Fim Scroll view  */}
        </View>
    )

}