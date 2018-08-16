import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';



class Botao extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        let size = parseInt(props.size) || 1;
        let background = props.background || 'white'

        this.styles = StyleSheet.create({
            area: {
                flex: size,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
                borderColor: '#999999',
                backgroundColor: background
            },
            text: {
                fontSize: 18,
                fontWeight: 'bold',
            }
        })
    }

    render() {
        return (
            <TouchableOpacity style={this.styles.area} onPress={this.props.onPress}>
                <Text style={this.styles.text}>{this.props.number}</Text>
            </TouchableOpacity>
        );
    }
}

class Calculadora extends Component {

    constructor(props) {
        super(props);
        this.state = { resultado: '0' };

        this.btn = this.btn.bind(this);
    }

    btn(b) {
        let s = this.state;
        switch (b) {
            case "C":
                s.resultado = '0'
                break;
            case "=":
                s.resultado = eval(s.resultado)
                break;
            default:

                if (s.resultado == '0') {
                    s.resultado = b;
                } else {
                    s.resultado += b;
                }
                break;
        }

        this.setState(s);
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.linha, styles.center]}>
                    <Text style={styles.res}>{this.state.resultado}</Text>
                </View>
                <View style={styles.linha}>
                    <Botao size="3" number="C" background="#CCCCCC" onPress={() => { this.btn("C") }} />
                    <Botao number="/" background="orange" onPress={() => { this.btn("/") }} />
                </View>
                <View style={styles.linha}>
                    <Botao number="7" onPress={() => { this.btn("7") }} />
                    <Botao number="8" onPress={() => { this.btn("8") }} />
                    <Botao number="9" onPress={() => { this.btn("9") }} />
                    <Botao number="*" background="orange" onPress={() => { this.btn("*") }} />
                </View>
                <View style={styles.linha}>
                    <Botao number="4" onPress={() => { this.btn("4") }} />
                    <Botao number="5" onPress={() => { this.btn("5") }} />
                    <Botao number="6" onPress={() => { this.btn("6") }} />
                    <Botao number="-" background="orange" onPress={() => { this.btn("-") }} />
                </View>
                <View style={styles.linha}>
                    <Botao number="1" onPress={() => { this.btn("1") }} />
                    <Botao number="2" onPress={() => { this.btn("2") }} />
                    <Botao number="3" onPress={() => { this.btn("3") }} />
                    <Botao number="+" background="orange" onPress={() => { this.btn("+") }} />
                </View>

                <View style={styles.linha}>
                    <Botao size="2" number="0" onPress={() => { this.btn("0") }} />
                    <Botao number="." onPress={() => { this.btn(".") }} />
                    <Botao number="=" background="gray" onPress={() => { this.btn("=") }} />
                </View>
            </View>
        );
    }
}

export default Calculadora;


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linha: {
        flex: 1,
        flexDirection: 'row',

    },
    center: {
        //alignItems : 'center',
        justifyContent: 'center'
    },
    res: {
        flex: 1,
        backgroundColor: 'black',
        color: 'white',
        fontSize: 50,
        textAlign: 'right'
    }
})