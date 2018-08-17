import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

class ModFlatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flatData: [
                {
                    key: "1",
                    nome: "Alisson",
                    idade: 21
                },
                {
                    key: "2",
                    nome: "Paulo",
                    idade: 20
                },
                {
                    key: "3",
                    nome: "Diego",
                    idade: 22
                },
                {
                    key: "4",
                    nome: "Marcos",
                    idade: 19
                },
                {
                    key: "5",
                    nome: 'Delci',
                    idade: 56
                }
            ]
        }
    }


    flatRender(item) {
        return (
            <View style={styles.flatItem}>
                <Text style={styles.flatNome}>{item.nome}</Text>
                <Text style={styles.flatIdade}>{item.idade}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList style={styles.flatList} data={this.state.flatData} renderItem={({ item }) => this.flatRender(item)} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex : 1
    },
    flatList: {
        //backgroundColor: 'gray'
        height: 200
    },
    flatNome: {
        fontSize : 26
    },
    flatIdade:{
        fontSize : 14
    },
    flatItem: {
       padding: 10,
       borderWidth: 1,
       borderColor: 'black',
    }
});


export default ModFlatList;
