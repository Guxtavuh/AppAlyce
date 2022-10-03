import { View, Text, ScrollView, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./StyleHome";


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
                        Bem-vindo ao Alyce, estamos aqui para te auxiliar e ajudar!
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

                </ScrollView>  
                {/*Fim Scroll view  */}
        </View>
    )

}