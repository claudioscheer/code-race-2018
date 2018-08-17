import {
    ToastAndroid,
    Platform,
    AlertIOS,
} from 'react-native';

class Toast {

    static show(text) {
        const isAndroid = Platform.OS === 'android';
        if (isAndroid) {
            ToastAndroid.show(text, ToastAndroid.SHORT);
        } else {
            AlertIOS.alert(text);
        }
    }
}

export default Toast;
