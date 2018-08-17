import React, { Component } from 'react';
import { View, Text, AsyncStorage, TextInput, StyleSheet } from 'react-native';

class ModAsyncStorage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome : ''
        };

        AsyncStorage.getItem("nome").then(nome => {
            this.setState({nome});
        });

        this.setNome = this.setNome.bind(this);
    }

    setNome(nome){
        let s = this.state;
        s.nome = nome;
        this.setState(s);

        AsyncStorage.setItem("nome", nome);
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} value={this.state.nome} onChangeText={this.setNome} ></TextInput>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        padding : 10,
        margin: 10
    }
});

export default ModAsyncStorage;
