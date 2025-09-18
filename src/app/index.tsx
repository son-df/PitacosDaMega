import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
    const [numeros, setNumeros] = useState<number[]>([]);

    useEffect(() => {
        sortearNumeros();
    }, []);

    const sortearNumeros = () => {
        let sorteados: number[] = [];
        while (sorteados.length < 6) {
            const numero = Math.floor(Math.random() * 60) + 1;
            if (!sorteados.includes(numero)) {
                sorteados.push(numero);
            }
        }
        sorteados.sort((a, b) => a - b);
        setNumeros(sorteados);
    };

    return (
        <View style={styles.container}>
            <View style={styles.bolasContainer}>
                {numeros.slice(0, 3).map((num, index) => (
                    <View key={index} style={styles.bola}>
                        <Text style={styles.numero}>{num}</Text>
                    </View>
                ))}
            </View>
            <View style={styles.bolasContainer}>
                {numeros.slice(3, 6).map((num, index) => (
                    <View key={index + 3} style={styles.bola}>
                        <Text style={styles.numero}>{num}</Text>
                    </View>
                ))}
            </View>
            <TouchableOpacity style={styles.botao} onPress={sortearNumeros}>
                <Text style={styles.textoBotao}>Não Gostei do resultado</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    titulo: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    bolasContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 30,
    },
    bola: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#007bff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
        elevation: 4,
    },
    numero: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    botao: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 3,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
