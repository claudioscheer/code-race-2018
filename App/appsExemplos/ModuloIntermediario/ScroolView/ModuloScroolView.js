import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

class ModScroolView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>

                </View>
                <ScrollView pagingEnabled={true}>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                    <View style={styles.quadrado1}></View>
                    <View style={styles.quadrado2}></View>
                </ScrollView>
                <View style={styles.footer}>

                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#0000FF',
        height: 50
    },
    quadrado1: {
        backgroundColor: 'green',
        height: 200
    },
    quadrado2: {
        backgroundColor: 'yellow',
        height: 300
    },
    footer: {
        backgroundColor : 'gray',
        height : 50
    }
});

export default ModScroolView;
