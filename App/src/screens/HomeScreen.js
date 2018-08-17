import React from 'react';
import {
    Button,
} from 'react-native';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Home',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notification')}
                title="Go to notification"
            />
        );
    }
}

export default HomeScreen;
