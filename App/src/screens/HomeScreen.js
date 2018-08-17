import React from 'react';
import {
} from 'react-native';
import Button from 'react-native-button';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Home',
    };

    render() {
        return (
            <Button
                activeOpacity={.7}
                onPress={() => this.props.navigation.navigate('Notification')}
            >
                Go to notification
            </Button>
        );
    }
}

export default HomeScreen;
