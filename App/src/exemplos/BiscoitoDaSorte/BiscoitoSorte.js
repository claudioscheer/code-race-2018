import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

class Botao extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao: {
        width: 250,
        height: 50,
        borderWidth: 2,
        borderColor: props.borderColor,
        backgroundColor: props.color,
        borderRadius: parseInt(props.radius)
      },
      botaoArea: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      texto: {
        color: props.textColor,
        fontSize: 16,
      }
    });
  }



  render() {
    return (
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.texto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class BiscoitoSorte extends Component {

  constructor(props) {
    super(props);
    this.state = { texto: 'Frase do dia é...' };
    this.frases = [
      "A vida trará coisas boas se tiveres paciência.",
      "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
      "Não compense na ira o que lhe falta na razão.",
      "Defeitos e virtudes são apenas dois lados da mesma moeda.",
      "A maior de todas as torres começa no solo.",
      "Não há que ser forte. Há que ser flexível."
    ]

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);

  }

  quebrarBiscoito() {
    let s = this.state;
    let r = Math.floor(Math.random() * this.frases.length);
    s.texto = this.frases[r];
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.cookie} source={require('./cookie.jpg')} />
        <Text style={styles.texto}>{this.state.texto}</Text>
        <Botao radius="5" color="#B59619" textColor="white" borderColor="#B59619" onPress={this.quebrarBiscoito} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cookie: {
    width: 250,
    height: 250
  },
  texto: {
    fontSize: 17,
    color: '#B59619',
    margin: 30,
    fontStyle: 'italic',
    textAlign :'center'
  }
});


export default BiscoitoSorte;
