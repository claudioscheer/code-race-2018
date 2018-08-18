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
    getLotes,
} from '../../services/LoteService';
import IconButton from '../../componentes/button/IconButton';

class LotesProprietarioScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Lotes',
        headerLeft: <IconButton iconName="menu" iconColor="#000" onPress={() => navigation.openDrawer()} />,
        headerRight: <IconButton iconName="add" iconColor="#000" onPress={() => navigation.navigate('CadastroLoteProprietario')} />,
    });
    state = {
        lotes: [],
    };

    async componentWillMount() {
        const response = await getLotes();
        // alert(JSON.stringify(response));
        // if (response.status !== 200) {
        //     Toast.show(response.mensagem);
        //     return;
        // }
        // this.setState({ usuarios: response.data });
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

export default LotesProprietarioScreen;
