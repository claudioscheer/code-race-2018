import React, { Component } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

class ModSectionList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listData :[
                {
                    title: 'A', data: [
                        { key: '1', nome: 'Alisson', idade: 21 }
                    ]
                },
                {
                    title: 'C', data: [
                        { key: '2', nome: 'Claudio', idade: 20 },
                        { key: '3', nome: 'Cíntia', idade: 30 },
                        { key: '4', nome: 'Cleber', idade: 56 },
                    ]
                },
                {
                    title: 'D', data: [
                        { key: '5', nome: 'Djoni', idade: 20 },
                        { key: '6', nome: 'Diego', idade: 30 },
                        { key: '7', nome: 'Delci', idade: 56 },
                    ]
                },
            ]
        }
    }

    listSectionRender(section){
        return(
            <Text style={styles.sectionRender}>{section.title}</Text>
        );
    }

    listRender(item){
        return(
            <Text style={styles.itemRender}>{item.nome} - {item.idade}</Text>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <SectionList stickySectionHeadersEnabled={true} style={styles.sectionList} sections={this.state.listData} renderItem={({item})=>this.listRender(item)} renderSectionHeader={({section})=> this.listSectionRender(section)}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1
    },
    sectionList:{
        height : 120
    },
    sectionRender:{
        backgroundColor: 'gray',
        fontSize : 20,
        fontWeight: 'bold',
        padding: 2
    },
    itemRender:{
        fontSize: 16
    }
})

export default ModSectionList;
