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

                <Text style={styles.subtitucomo}>Como se prevenir da violência em geral e ter uma vida um pouco mais segura?</Text>           

                <Text style={styles.p1}>Nem sempre é possível evitar ser vítima da violência, mas algumas atitudes podem contribuir para a sua proteção e tornar você um alvo mais difícil para criminosos e pessoas mal-intencionadas.</Text>
                
                <Text style={styles.subtitucomo}>Violência em locais públicos e/ou abertos</Text>

                <Text style={styles.list}>◉ Não exponha seu celular e outros objetos de valor em público, como joias e relógios.{'\n'} Prefira guardá-los sempre próximo ou ao corpo, e não em uma bolsa, por exemplo.</Text>

                <Text style={styles.list}>◉ Ande por caminhos que você já conhece, especialmente os mais iluminados. </Text>

                <Text style={styles.list}>◉ Se possível, ande acompanhado.</Text>

                <Text style={styles.list}>◉ Fique sempre atento a tudo a seu redor, mesmo nos ambientes mais movimentados.</Text>

                <Text style={styles.list}>◉ No carro, prefira andar de vidros fechados, evitando abordagens inesperadas.</Text>

                <Text style={styles.list}>◉ Atenção à exposição dos aspectos de sua vida nas redes sociais.</Text>

                <Text style={styles.subtitucomo}>E como se prevenir da violência dentro de casa?</Text>

                <Text style={styles.p1}>Antes de iniciar um relacionamento ou morar com uma pessoa, seja marido, noivo, namorado, amigo etc.{'\n'} {'\n'}tenha alguma convivência com essa pessoa a algum tempo e não se esqueça de verificar o histórico dessa pessoa, o que ela fez antes de iniciar um relacionamento com você. {'\n'}{'\n'}o tipo de vida que leva e se tem histórico de agressão ou não, geralmente agressores não começam de uma hora para outra, muitas vezes vem de relacionamentos anteriores já com esse histórico.{'\n'}{'\n'}
                Todo mundo tem um lado legal e outro nem tanto assim, tenha convivência com essa pessoa o suficiente para saber como é esse lado não tão legal.{'\n'} {'\n'}
                Evite se mudar para longe de sua família caso possua, isso facilita a vida do agressor e o encoraja a revelar esse lado sombrio de si, já que não tem nenhum parente por perto para te ajudar.
                {'\n'} {'\n'}<Text style={styles.subtitucomo}>APRENDA A FALAR NÃO</Text>{'\n'} {'\n'}
                Muitas vezes ao ouvir não o agressor se revela, fica totalmente agressivo e irredutível, discordando a todo tempo, gritando e muitas vezes agredindo ou começando com empurrões ou tapas
                {'\n'} {'\n'} (mas lembre-se é comum ao ouvir uma opinião contraria da sua a pessoa ficar descontente, triste e coisas do tipo, porém atente-se as coisas citadas acima)
</Text>

                

                </ScrollView>      
        </View>
    )}
