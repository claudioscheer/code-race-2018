import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, StatusBar } from 'react-native';

class ModStatusBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusStyle: "light-content",
            statusHidden: false,
            bgColor: 'white'
        };

        this.alternar = this.alternar.bind(this);
    }


    alternar() {
        let s = this.state;
        if(s.statusStyle == 'dark-content'){
            s.statusStyle = 'light-content';
            s.bgColor = 'white'
        }else{
            s.statusStyle = 'dark-content';
            s.bgColor = 'black'
        }
        this.setState(s);
    }

    render() {
        return (
            <View style={[styles.container, { backgroundColor: this.state.bgColor }]}>
                <StatusBar barStyle={this.state.statusStyle} hidden={this.state.statusHidden} />
                <Button title="alternar" onPress={this.alternar} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default ModStatusBar;
