import React from 'react';
import {
    FlatList,
    View,
    Text,
} from 'react-native';
import Button from 'react-native-button';
import Toast from '../componentes/Toast';
import {
    Divider,
    ListItem,
} from '../componentes/list';
import {
    getUsuarios,
} from '../services/HomeService';

class HomeScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Home',
    };
    state = {
        usuarios: [],
    };

    async componentWillMount() {
        const response = await getUsuarios();
        if (response.status !== 200) {
            Toast.show(response.mensagem);
            return;
        }
        this.setState({ usuarios: response.data });
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.usuarios}
                    ItemSeparatorComponent={() => <Divider />}
                    keyExtractor={item => item._id}
                    renderItem={({ item }) =>
                        <ListItem
                            primaryText={item.email}
                        />
                    }
                />
            </View>
        );
    }
}

export default HomeScreen;
