import React, { useState, useEffect }  from 'react'
import { SafeAreaView, KeyboardAvoidingView, View, TextInput, Image, Animated, StyleSheet, Text, Button, TouchableOpacity} from 'react-native'

export default function Login(){

    const [offset] = useState(new Animated.ValueXY({x:50, y: 0}));
    const [opacity] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.parallel([
            Animated.spring(offset.x, {
                toValue: 0,
                speed: 2,
                bounciness: 20,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true
            })
        ]).start();
    }, []);

    return(
        <SafeAreaView>
            <KeyboardAvoidingView style={styles.geral}>
                <Image source={require('../assets/logo.png')} style={{marginBottom: 10}}/>

                <Animated.View style={{width: '100%', alignItems: 'center', opacity: opacity, transform: [{translateX: offset.x}]}}>
                    <View style={styles.caixaInfo}>
                        <Text style={styles.textoCaixa}>Usuário</Text>
                        <TextInput style={styles.input}></TextInput>
                    </View>
                    <View style={styles.caixaInfo}>
                        <Text style={styles.textoCaixa}>Senha</Text>
                        <View style={styles.input}>
                          <TextInput secureTextEntry={true}></TextInput>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.btnEntrar}>
                        <Text style={styles.textoBtn}>Entrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.link}>
                        <Text style={{color: '#DCDCDC'}}>Ainda não tem cadastro?</Text>
                        <Text style={{color: '#B81F00'}}> Cadastre-se</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.link}>
                        <Text style={{color: '#B81F00'}}>Esqueceu senha?</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    geral: {
        flexGrow: 1,
        padding: '10%',
        backgroundColor: '#211F1C',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    caixaInfo:{
        width: '100%',
        margin: 10
    },
    textoCaixa:{
        color: '#DCDCDC',
        fontSize: 14,
        marginBottom: 15
    },
    input: {
        borderColor: "#DCDCDC",
        borderRadius: 6,
        borderWidth: 1,
        padding: 10,
        color: '#DCDCDC'
    },
    btnEntrar: {
        width: '100%',
        backgroundColor: '#B81F00',
        borderRadius: 6,
        marginTop: 20,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBtn:{
        color: '#DCDCDC'
    },
    link:{
        flexDirection: 'row',
        marginTop: 20
    }
})