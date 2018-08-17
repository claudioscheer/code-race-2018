import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, Button } from 'react-native';

class ModModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible : false
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal animationType="slide" visible={this.state.visible}>
          <View style={styles.modal}>
            <Text>Você é o cara, acredite mais no seu potencial, a vida está ai , basta aproveitar e seguir em frente</Text>
            <Button title="Ok, entendido" onPress={()=> this.setState({visible :false})}></Button>
          </View>
        </Modal>

        <Button title="Abrir modal" onPress={()=> this.setState({visible : true})}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  modal: {

  }
})


export default ModModal;
