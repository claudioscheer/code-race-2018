import React from 'react';
import {
    FlatList,
    View,
    Text,
} from 'react-native';
import Toast from '../../componentes/Toast';
import {
    Divider,
    ListItem,
} from '../../componentes/list';
import {
    getUsuarios,
} from '../../services/HomeService';

class HomeFornecedorScreen extends React.Component {
    static navigationOptions = {
        headerTitle: 'Fornecedor',
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

export default HomeFornecedorScreen;