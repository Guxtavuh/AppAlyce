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

                <Text style={styles.subtitu}>Como progredir e superar? </Text>

                <Text style={styles.subtitu1}>Sintomas  </Text>

                    <Text style={styles.p}>  ◉ Sensação estática</Text>
                    <Text style={styles.p}>  ◉ Pesadelos</Text>
                    <Text style={styles.p}>  ◉ Ansiedade</Text>
                    <Text style={styles.p}>  ◉ Culpa</Text>
                    <Text style={styles.p}>  ◉ Impotência</Text>
                    <Text style={styles.p}>  ◉ Pânico</Text>
                    <Text style={styles.p}>  ◉ Irritabilidade</Text>
                    <Text style={styles.p}>  ◉ Negação</Text>
                    <Text style={styles.p}>  ◉ Tristeza</Text>

                    <Text style={styles.p}>O trauma se manifesta de várias maneiras diferentes.{'\n'}  {'\n'}Cada pessoa lida e reage de forma diversa. Por isso, ao sermos confrontados com ele, pode ser bastante difícil lidar com as emoções. E para cada indivíduo há uma abordagem específica para superar o trauma.</Text>

                    <Text style={styles.p}>Um tratamento adequado com psicólogo é o melhor caminho. Só um profissional experiente pode te ajudar a superar um trauma causado por violência.
                    Além disso orientamos dialogar com as pessoas que contribuem, analisar todos os sintomas que ocorrem e em que momentos, evitar se culpar ou vitimizar. Ter pessoas positivas perto de você e principalmente desenvolver novos projetos em sua vida e seguir adiante
                    </Text>

                    <Text style={styles.p}>◉  Aprenda a respirar</Text>
                    <Text style={styles.p}>
                    Voltar ao normal após um evento traumático pode parecer impossível. Mas você sabia que tirar alguns minutos para praticar meditação ou exercícios respiratórios pode ajudá-lo a dormir, fazer desaparecer os flashbacks e superar a ansiedade, que às vezes pode ser incapacitante? Então, quando sentir o trauma pesando a vida, tente respirar profundamente. Isso irá ajudá-lo muito!
                    </Text>

                    <Text style={styles.p}>◉ Pratique exercícios físicos</Text>


                    <Text style={styles.p}>
                    O exercício físico é uma forma de ajudar o corpo a liberar endorfina. Além disso, ele proporciona uma distração do mundo ao seu redor e uma liberação física para as emoções que você pode estar experimentando.
                    Inscrever-se na academia, participar de uma aula de boxe ou começar a correr são ótimas maneiras de melhorar sua saúde mental. Inclusive, apenas 30 minutos de exercício três vezes por semana já é o suficiente para diminuir os sintomas de ansiedade e depressão.
                    </Text>

                    <Text style={styles.p}>◉ Crie uma rotina saudável</Text>
                    <Text style={styles.p}>
                    Um evento traumático – principalmente aqueles que lhe fazem ficar um período no hospital ou lhe tenham afastado do trabalho – afetam profundamente a sua rotina. E podem até mesmo fazer você perder a noção do tempo.
                    Nesse sentido, é muito fácil sucumbir à depressão e à estagnação. A vida parece perder o sentido e ficamos sem energia para buscar nossos objetivos. Voltar à rotina, mesmo que isso signifique apenas sair da cama todos os dias na mesma hora ou ainda fazer as refeições no mesmo horário, pode fazer uma grande diferença para o seu bem-estar e ajudá-lo a se recuperar do trauma.
 
                    </Text>

                    <Text style={styles.p}>◉ Cultive hobbies</Text>
                    <Text style={styles.p}>
                    Uma distração pode ser um grande aliado para superar o trauma. Busque atividades relaxantes como pintura, jardinagem, dança, marcenaria, aprender a tocar um instrumento etc. Tudo isso pode ajudar a distraí-lo e evitar que você fique constantemente repensando ou ainda revivendo sentimentos relacionados ao trauma.
                    </Text>
                    <Text style={styles.p}>◉ Faça terapia para superar o trauma</Text>
                    <Text style={styles.p}>
                    A terapia pode ser uma ótima ferramenta para superar o trauma. Como exemplo, a terapia cognitivo-comportamental é excelente para ajudá-lo a lidar com um problema ou acontecimento específico. O seu psicólogo irá auxiliar no processo por meio de uma série de sessões particulares e também através de tarefas que ele irá orientá-lo a praticar em casa.
                    </Text>


        </ScrollView>







        </View>
    )}