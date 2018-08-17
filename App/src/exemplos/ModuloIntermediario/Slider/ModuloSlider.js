import React, { Component } from 'react';
import { View, Text, StyleSheet, Slider} from 'react-native';

class ModSlider extends Component {

constructor(props){
    super(props);
    this.state = {value : 50};

}

  render() {
    return (
      <View style={styles.container}>
        <Slider minimumTrackTintColor="red" maximumTrackTintColor="blue" value={this.state.value} minimumValue={0} maximumValue={100} onValueChange={(v)=> this.setState({value : v})}/>
        <Text>{this.state.value.toFixed(0)}%</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
});

export default ModSlider;
