import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

class Cronometro extends Component {

    constructor(props) {
        super(props);
        this.state = { n: 0, botao: "VAI" };
        this.timer = null;
        this.vai = this.vai.bind(this);
        this.limpar = this.limpar.bind(this);
    }

    vai() {
        let s = this.state;
        if (this.timer) {
            //Parar o timer
            clearInterval(this.timer);
            this.timer = null;
            s.botao = "VAI";
            
        } else {
            //Começar o timer
        
            this.timer = setInterval(() => {
                let s = this.state;
                s.n += 0.1;
                this.setState(s);
              
            }, 100);
            s.botao = "PARAR";
     
        }
        this.setState(s);
    }

    limpar() {

        if (this.timer) {
            //Parar o timer
            clearInterval(this.timer);
            this.timer = null;
        }
        let s = this.state;
        s.n = 0;
        s.botao = "VAI";
        this.setState(s);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.relogio} source={require('./relogio.png')} />
                <Text style={styles.timer}>{this.state.n.toFixed(1)}</Text>
                <View style={styles.botaoArea}>
                    <TouchableOpacity style={styles.botao} onPress={this.vai}>
                        <Text style={styles.botaoText}>{this.state.botao}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.botao} onPress={this.limpar}>
                        <Text style={styles.botaoText}>LIMPAR</Text>
                    </TouchableOpacity>


                </View>
            </View>
        );
    }
}

export default Cronometro;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#592E83'
    },
    relogio: {
        width: 220,
        height: 220
    },
    timer: {
        color: 'black',
        fontSize: 50,
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: -90
    },
    botaoArea: {
        flexDirection: 'row',
        height: 40,
        marginTop: 80
    },
    botao: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B27C66',
        height: 40,
        borderRadius: 5,
        margin: 20
    },
    botaoText: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'

    }
});