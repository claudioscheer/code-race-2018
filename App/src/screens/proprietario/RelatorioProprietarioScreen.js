import React from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    Text,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Toast from '../../componentes/Toast';
import {
    Divider,
    ListItem,
} from '../../componentes/list';
import {
    getRelatorio,
} from '../../services/UsuarioService';
import IconButton from '../../componentes/button/IconButton';

class RelatorioProprietarioScreen extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerTitle: 'Relatório',
        headerLeft: <IconButton iconName="menu" iconColor="#000" onPress={() => navigation.openDrawer()} />,
    });
    state = {
        relatorio: [],
    };

    async componentWillMount() {
        const response = await getRelatorio();
    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Lote 01 - R$ 48.00</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Lote 02 -  R$ 75.00</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>Lote 03 - R$ 340.00</Text>
                </View>
            </Swiper>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default RelatorioProprietarioScreen;
