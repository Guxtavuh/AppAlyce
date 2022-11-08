import { View, Text, ScrollView, Image, Linking } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./StyleHome";
import { useState } from "react"
// Salmos 91
// Direi do Senhor: Ele é o meu Deus, o meu refúgio, a minha fortaleza, e nele confiarei.

// Salmos 91:2


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
                
                </View>

                {/* Area de botoes */}
                <View style={styles.areadosbtn}>

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

                <View style={styles.arealig}>
                <TouchableOpacity onPress={()=> Linking.openURL("tel://190")}>
                <Image style={styles.btnalycee1} source={require("../screens/img/btn190c.png")}></Image>
                </TouchableOpacity>


                <TouchableOpacity onPress={()=> Linking.openURL("tel://180")}>
                <Image style={styles.btnalycee1} source={require("../screens/img/btn180b.png")}></Image>
                </TouchableOpacity>
                </View>


                </View>

                
                <View style={styles.wpp}>
                <TouchableOpacity onPress={()=> Linking.openURL("https://api.whatsapp.com/send?phone=556196565008&text=Ol%C3%A1%20teste%20alyce")}>
                <Image style={styles.btnalycee11} source={require("../screens/img/btnzap3.png")}></Image>
                </TouchableOpacity>  
                </View>
        
                </ScrollView>  
                {/*Fim Scroll view  */}
                </View>
    )
    
}