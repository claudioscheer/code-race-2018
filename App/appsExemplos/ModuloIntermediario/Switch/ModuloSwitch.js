import React, { Component } from 'react';
import { View, Text, StyleSheet,Switch } from 'react-native';

class ModSwitch extends Component {

constructor(props){
    super(props);
    this.state = {active :false}
}

  render() {
    return (
      <View style={styles.container}>
        <Switch thumbTintColor="blue" onTintColor="red" value={this.state.active} onValueChange={(v)=> this.setState({active : v })}/>
        <Text>{this.state.active.toString()}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start', 
    }
});

export default ModSwitch;
