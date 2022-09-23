import { View, Text, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { styles } from "./StyleHome";

export default function Home({navigation}){
    return(
        <View style={styles.tudo}>
            <ScrollView horizontal={false}>
                {/* Header, topo, titulo */}
                <View style={styles.viewtitulo}>
                    <Text style={styles.titulo}>Alyce</Text>
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
                <View style={styles.btn1}>
                <Text style={styles.txtbtn1}>Prevenção</Text>
                </View> 
                </TouchableOpacity>
                

                <TouchableOpacity onPress={()=>navigation.navigate("Prevencao")} >
                <View style={styles.btn1}>
                <Text style={styles.txtbtn1}>Prevenção</Text>
                </View> 
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate("Prevencao")} >
                <View style={styles.btn1}>
                <Text style={styles.txtbtn1}>Prevenção</Text>
                </View> 
                </TouchableOpacity>


                <TouchableOpacity onPress={()=>navigation.navigate("Prevencao")} > 
                <View style={styles.btn1}>
                <Text style={styles.txtbtn1}>Prevenção</Text>
                </View> 
                </TouchableOpacity>
 




                </View>
                </ScrollView>      
        </View>
    )

}