import { TouchableOpacity } from "react-native";
import {AntDesign} from "@expo/vector-icons";
import { View, Text, ScrollView, Image } from "react-native";

import { styles } from "./StylesPos";

export default function PosAgressao({navigation}){
    return(
        <View style={styles.tudo}>
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

                <View style={styles.viewimg1}>
                    <Image style={styles.imgpos} source={require("../screens/img/imgTraumas.png")}></Image>
                </View>

                <Text style={styles.subtitu}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </Text>

                    <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eveniet? Explicabo, minus voluptatum natus vero iste deleniti blanditiis accusamus voluptatem accusantium reiciendis eaque eius maiores non animi nemo porro illum!</Text>


                    <Text style={styles.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet amet, natus animi suscipit est cum ratione iusto perferendis inventore rem. Ullam fuga voluptate possimus. Porro culpa dolores est odit. Adipisci!</Text>

                    <Text style={styles.p}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In, nisi quae laudantium iusto repellendus nobis sit dolorum quasi blanditiis. Consequuntur quae eaque, possimus vero ea suscipit dolore adipisci modi magnam.</Text>
        </ScrollView>







        </View>
    )}