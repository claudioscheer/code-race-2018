import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image } from 'react-native';

class Memes extends Component {

  constructor(props){
    super(props);
    this.state = {
      texto1 : 'Texto1',
      texto2 : 'Texto2'
    }

    this.escrever = this.escrever.bind(this);
  }

  mudarVogais(texto){
    let novoTexto = texto.toLowerCase();
    novoTexto = novoTexto.replace(/(a|e|i|o|u)/g, 'i');
    novoTexto = novoTexto.replace(/(á|à|â|ã|é|ê|è|ó|ò|ô|ú|ù|û)/g, 'i');

    return novoTexto;
  }

  escrever(t){
    let s = this.state;
    s.texto1 = t;
    s.texto2 = this.mudarVogais(t);
    this.setState(s);  
  }


  render() {
    return (
      <View style={styles.body}>
        <View>
          <Text style={styles.titulo}>Criador de Mimimi</Text>
        </View>
        <View style={styles.inputArea}>
          <TextInput style={styles.input} placeholder="Digite seu mimimi" onChangeText={this.escrever}></TextInput>
        </View>
        <View style={styles.container}>
          <Text style={[styles.texto, styles.texto1]}>{this.state.texto1.toUpperCase()}</Text>
          <Image style={styles.image} source={require('./mimimi.jpg')} />
          <Text style={[styles.texto, styles.texto2]}>{this.state.texto2.toUpperCase()}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    body:{
        backgroundColor : 'gray',
        paddingTop: 30,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    titulo:{
      fontSize: 30,
      color:'white'
    },
    inputArea:{
      alignSelf: 'stretch',
    },
    input:{
      height : 40,
      margin:10,
      padding:10,
      borderWidth: 1,
      backgroundColor : 'white',
      color: 'gray'
    },
    container:{
      width: 300,
      height: 300

    },
    image : {
      width : 300,
      height: 300,
      marginTop: -70,
      zIndex : 0,
    },
    texto: {
      fontSize : 20,
      color : 'white',
      padding: 10,
      backgroundColor : 'transparent',
      fontWeight: 'bold',
      textAlign : 'center',
      height : 70
    },
    texto1:{
      zIndex: 1
    },
    texto2: {
      zIndex : 1,
      marginTop: -70
    }
});


export default Memes;
