import {
	NativeModules,
	findNodeHandle,
	ActionSheetIOS,
	Platform,
} from 'react-native';

class PopupMenu {

	static show(ref, actions, onItemPress, onError = () => { }) {
		if (Platform.OS === 'ios') {
			actions.push('Fechar');
			ActionSheetIOS.showActionSheetWithOptions({
				options: actions,
				cancelButtonIndex: actions.length - 1,
				tintColor: '#1B1E24',
			}, index => onItemPress(index));
		} else {
			NativeModules.UIManager.showPopupMenu(
				findNodeHandle(ref),
				actions,
				(e) => onError(e),
				(eventName, index) => {
					if (eventName !== 'itemSelected') {
						return;
					}
					onItemPress(index);
				},
			);
		}
	}
}

export default PopupMenu;