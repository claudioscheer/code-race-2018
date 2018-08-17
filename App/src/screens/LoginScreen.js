import React from 'react';
import {
    Text,
    Button,
    View,
} from 'react-native';

class LoginScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Login',
    };

    render() {
        const { navigation } = this.props;

        return (
            <View>
                <Text>Login</Text>
                <Button
                    onPress={() => navigation.replace('Drawer')}
                    title="Go to Home"
                />
            </View>
        );
    }
}

export default LoginScreen;
