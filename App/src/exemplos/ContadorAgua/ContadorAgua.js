import React, { Component } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button} from 'react-native';

class ContadorAgua extends Component {

 constructor(props){
    super(props);
    this.state = {consumido:0, status: 'ruim', pct: 0}
    this.adicionarCopo = this.adicionarCopo.bind(this);
    this.atualizar = this.atualizar.bind(this);
 }

adicionarCopo(){
    let s= this.state;
    s.consumido += 200;
    this.setState(s);
    this.atualizar();
}

atualizar(){
    let s = this.state;
    s.pct = Math.floor(((s.consumido/2000)*100));

    if(s.pct >= 100){
        s.status = 'Bom';
    }else{
        s.status = 'Ruim';
    }

    this.setState(s);
}


  render() {
    return (
      <View style={styles.body}>
        <ImageBackground source={require('./bgWater.jpg')} style={styles.background}>
            
            <View>
                <View style={styles.contentInfo}>
                    <View style={styles.info}>
                        <Text style={styles.infoTitulo}>Meta</Text>
                        <Text style={styles.infoData}>2 litros</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoTitulo}> Consumido</Text>
                        <Text style={styles.infoData}>{this.state.consumido}</Text>
                    </View>
                    <View style={styles.info}> 
                        <Text style={styles.infoTitulo}>Status</Text>
                        <Text style={styles.infoData}>{this.state.status}</Text>
                    </View>
                </View>

                <View style={styles.pctInfo}>
                    <Text style={styles.pctTexto}>{this.state.pct}%</Text>
                </View>

                <View style={styles.btnInfo}>
                    <Button title="Adicionar copo" onPress={this.adicionarCopo} ></Button>
                </View>

            </View>
        </ImageBackground>
      </View>
    );
  }
}

export default ContadorAgua;


const styles = StyleSheet.create({
    body:{
        flex: 1
    },
    background : {
        flex: 1,
        width : null
    },
    contentInfo:{
        flex : 1,
        flexDirection: 'row',
        marginTop: 50
    },
    info: {
        flex: 1,
        alignItems: 'center'
    },
    infoTitulo:{
        fontSize : 20,
        color: '#768fe2'
    },
    infoData:{
        fontSize : 22,
        fontWeight: 'bold',
    },
    pctInfo:{
        marginTop: 90,
        alignItems: 'center'
    },
    pctTexto:{
        fontSize: 70,
        color : 'black',
        backgroundColor : 'transparent'
    },
    btnInfo:{
        marginTop: 280,
        alignItems : 'center'
    }
});