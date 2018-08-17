import React from 'react';
import {
    Button,
} from 'react-native';

class NotificationScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Notification',
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

export default NotificationScreen;
