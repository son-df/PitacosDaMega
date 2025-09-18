import React, { useEffect, useState } from 'react'; // Importa React e hooks
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // Importa componentes do React Native

export default function Index() {
    const [numeros, setNumeros] = useState<number[]>([]); // Estado para armazenar os números sorteados

    useEffect(() => {
        sortearNumeros(); // Sorteia os números ao montar o componente
    }, []); // Executa apenas uma vez

    const sortearNumeros = () => {
        let sorteados: number[] = []; // Array para armazenar os números sorteados
        while (sorteados.length < 6) { // Repete até ter 6 números
            const numero = Math.floor(Math.random() * 60) + 1; // Gera número aleatório entre 1 e 60
            if (!sorteados.includes(numero)) { // Garante que não repete número
                sorteados.push(numero); // Adiciona número ao array
            }
        }
        sorteados.sort((a, b) => a - b); // Ordena os números
        setNumeros(sorteados); // Atualiza o estado
    };

    // Renderização do componente
    return (
        <View style={styles.container}> {/* Container principal centralizado */}
            <View style={styles.bolasContainer}> {/* Linha de cima com 3 bolas */}
                {numeros.slice(0, 3).map((num, index) => (
                    <View key={index} style={styles.bola}> {/* Bola individual */}
                        <Text style={styles.numero}>{num}</Text> {/* Número dentro da bola */}
                    </View>
                    
                ))}
            </View>
            <View style={styles.bolasContainer}> {/* Linha de baixo com 3 bolas */}
                {numeros.slice(3, 6).map((num, index) => (
                    <View key={index + 3} style={styles.bola}> {/* Bola individual */}
                        <Text style={styles.numero}>{num}</Text> {/* Número dentro da bola */}
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.botao} onPress={sortearNumeros}> {/* Botão para sortear novamente */}
                <Text style={styles.textoBotao}>Não Gostei do resultado</Text> {/* Texto do botão */}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1, // Ocupa toda a tela
        backgroundColor: '#F5F5F5', // Cor de fundo
        alignItems: 'center', // Centraliza horizontalmente
        justifyContent: 'center', // Centraliza verticalmente
        padding: 20, // Espaçamento interno
    },
    titulo: {
        fontSize: 35, // Tamanho da fonte do título
        fontWeight: 'bold', // Negrito
        marginBottom: 20, // Espaço abaixo
    },
    subtitulo: {
        fontSize: 20, // Tamanho da fonte do subtítulo
        fontWeight: 'bold', // Negrito
        marginBottom: 20, // Espaço abaixo
    },
    bolasContainer: {
        flexDirection: 'row', // Organiza em linha
        flexWrap: 'wrap', // Permite quebrar linha se necessário
        justifyContent: 'center', // Centraliza os itens
        marginBottom: 30, // Espaço abaixo
    },
    bola: {
        width: 60, // Largura da bola
        height: 60, // Altura da bola
        borderRadius: 30, // Deixa redonda
        backgroundColor: '#007bff', // Cor de fundo da bola
        alignItems: 'center', // Centraliza conteúdo horizontalmente
        justifyContent: 'center', // Centraliza conteúdo verticalmente
        margin: 8, // Espaço entre bolas
        elevation: 4, // Sombra (Android)
    },
    numero: {
        color: '#fff', // Cor do número
        fontSize: 20, // Tamanho do número
        fontWeight: 'bold', // Negrito
    },
    botao: {
        backgroundColor: '#28a745', // Cor do botão
        paddingVertical: 12, // Espaço vertical interno
        paddingHorizontal: 30, // Espaço horizontal interno
        borderRadius: 25, // Bordas arredondadas
        elevation: 3, // Sombra (Android)
    },
    textoBotao: {
        color: '#fff', // Cor do texto do botão
        fontSize: 18, // Tamanho do texto
        fontWeight: 'bold', // Negrito
    },
});
