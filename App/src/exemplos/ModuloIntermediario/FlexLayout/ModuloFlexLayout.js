class FlexLayout extends Component {
    render() {
  
      return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'stretch' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'blue' }}></View>
          <View style={{ width: 50, backgroundColor: 'green' }}></View>
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }}></View>
          <View style={{ width: 50, backgroundColor: 'red' }}></View>
  
        </View>
      );
    }
  }
  