import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker } from 'react-native';

class ModPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            servico: 0,
            listServices: [
                {
                    name: "Alinhamento",
                    value: 30
                },
                {
                    name: "Balanceamento",
                    value: 40
                },
                {
                    name: "Geometria",
                    value: 50
                },
                {
                    name: "Rodízio de pneus",
                    value: 70
                },
                {
                    name: "Recapagem",
                    value: 90
                }
            ]
        };
    }

    render() {

        let servicosItems = this.state.listServices.map((value, index) => {
            return <Picker.Item key={index} value={index} label={value.name} />
        });

        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Auto peças José</Text>
                <Picker selectedValue={this.state.servico} onValueChange={(itemValue, itemIndex) => this.setState({ servico: itemValue })}>
                    {servicosItems}
                </Picker>
                <View style={styles.valueContainer}>
                    <Text style={styles.value}>R$ {this.state.listServices[this.state.servico].value.toFixed(2)}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent : 'center',
        // alignItems: 'center',
    },
    logo: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    valueContainer:{
        justifyContent : 'center',
        alignItems: 'center',
    },
    value: {
        fontSize: 25,

    }
});

export default ModPicker;
