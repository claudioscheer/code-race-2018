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
    excluirLote,
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
        await this.buscarLotes();
    }

    async buscarLotes() {
        const response = await getLotes();
        if (response.status !== 200) {
            Toast.show(response.mensagem);
            return;
        }
        this.setState({ lotes: response.data });
    }

    async excluir(item) {
        let filter = { id: item.id }
        const response = await excluirLote(filter)

        if (response.status === 200) {
            Toast.show(response.mensagem);
            await this.buscarLotes();
        }
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.lotes}
                    ItemSeparatorComponent={() => <Divider />}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <ListItem
                            primaryText={item.nome}
                            right={
                                <IconButton
                                    iconName='trash'
                                    iconColor='#00aced'
                                    onPress={() => this.excluir(item)}
                                />
                            }
                            onPress={() => this.props.navigation.navigate('CadastroLoteProprietario', {
                                item,
                            })}
                        />
                    }
                />
            </View>
        );
    }
}

export default LotesProprietarioScreen;
