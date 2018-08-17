import React from 'react';
import PropTypes from 'prop-types';
import {
	Modal,
	ActivityIndicator,
	Text,
	StyleSheet,
	View,
} from 'react-native';

class Loading extends React.Component {

	render() {
		const {
			visible,
			text,
		} = this.props;

		return (
			<Modal
				transparent={true}
				visible={visible}
				onRequestClose={() => { }}>
				<View style={styles.container}>
					<View style={styles.content} elevation={10}>
						<ActivityIndicator size="large" color="#1B1E24" />
						<Text style={styles.text}>{text}</Text>
					</View>
				</View>
			</Modal>
		);
	}
}

Loading.defaultProps = {
	visible: false,
	text: 'Carregando...',
};

Loading.propTypes = {
	visible: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'rgba(0,0,0,0.5)',
	},
	content: {
		padding: 24,
		backgroundColor: '#FFF',
		marginLeft: 16,
		marginRight: 16,
		flexDirection: 'row',
	},
	text: {
		fontSize: 16,
		textAlign: 'center',
		marginLeft: 24,
		alignSelf: 'center',
	},
});

export default Loading;