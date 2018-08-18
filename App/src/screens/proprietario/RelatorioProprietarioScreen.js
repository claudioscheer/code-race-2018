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

class RelatorioProprietarioScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Relatório',
        headerLeft: <IconButton iconName="menu" iconColor="#000" onPress={() => navigation.openDrawer()} />,
    });
    state = {
    };

    async componentWillMount() {
    }

    render() {
        return (
            <View>
                <Text>Relório</Text>
            </View>
        );
    }
}

export default RelatorioProprietarioScreen;
