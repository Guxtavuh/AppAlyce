import { View, Text, ScrollView, Image } from "react-native";

import { styles } from "./StylePrevencao";

export default function Prevencao(){
    return(
        <View style={styles.tudo}>
            <ScrollView horizontal={false}>
                {/* Header, topo, titulo */}
                <View style={styles.viewtitulo}>
                    <Image style={styles.logoalyce} source={require("../screens/img/LogoAlyceV3.png")}></Image>
                </View>

                <Text style={styles.subtitu}>
                    Como se prevenir?
                </Text>

                <Text style={styles.entretiu}>
                    Primeiro precisamos saber o que é a violência contra a mulher.
                </Text>

                <Text style={styles.p1}>
                    A violência contra a mulher reflete questões de ordens cultural, social e religiosa que se manifestam de formas distintas nas diferentes partes do mundo.  {'\n'}   {'\n'}Enraizada e apoiada no patriarcado, a violência contra a mulher está presente tanto no espaço público quanto na vida privada, dentro de casa, nos espaços de trabalho, em geral imposta por pessoas que a mulher conhece, convive e em quem confia.  {'\n'}  {'\n'}Caso de parentes, cônjuges, amigos e pessoas com quem ela se relaciona, porém também ocorre de desconhecidos.
                </Text>

                <Text style={styles.subtitu1}>
                    Quais são os tipos de violência? 
                </Text>

                <Text style={styles.list}>
                    
                    
                ◉ Violência física – agressões envolvendo tapas, chutes, socos, beliscões, empurrões e qualquer forma de ação utilizando a força ou omissão de ajuda que coloque em risco ou cause danos à integridade física de outra pessoa.
                </Text>
            
                <Text style={styles.list}>
                    ◉ Violência psicológica/emocional – ameaça direta ou indireta, humilhação, abandono, desprezo, menosprezo, intimidações, agressões verbais ou gestuais, isolamento e qualquer atitude que resulte em prejuízo à saúde psicológica ou ao desenvolvimento pessoal. A violência psicológica ou emocional pode causar danos e traumas permanentes, como a depressão.
                </Text>

                <Text style={styles.list}>
                    ◉ Violência sexual – nesse tipo de ação, uma pessoa faz uso de força, poder e ameaça para intimidar ou obrigar o outro a praticar relações sexuais, assistir ou interagir sexualmente contra a própria vontade.
                </Text>

                <Text style={styles.list}>
                    ◉ Violência financeira – além dos próprios roubos, furtos e assaltos, a violências financeira acontece, também, quando alguém utiliza de sua influência e poder para se apropriar de bens financeiros ou patrimoniais de outra pessoa.
                </Text>              




                </ScrollView>      
        </View>
    )}
