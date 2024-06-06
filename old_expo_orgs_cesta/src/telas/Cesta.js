import { Dimensions, Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <SafeAreaView>
        <Image source={topo} style={estilos.topo} />
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>
    </SafeAreaView>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%", // Largura
        height: 578 / 768 * width, // Altura | A Altura e a Largura da imagem topo.png é 578 e 768
    },
    titulo: {
        position: "absolute", // Torna a posição absoluta (uma por cima da outra)
        width: "100%", // Torna o texto com o tamanho da largura da tela.
        textAlign: "center", // Centraliza o texto na tela
        fontSize: 16, // Define o tamanho da fonte
        lineHeight: 26, // Define a altura da linha
        color: "white", // Define a cor da fonte
        fontWeight: "bold", // Define o estilo da fonte para negrito
        padding: 16 // Adiciona um espaçamento
    }
});