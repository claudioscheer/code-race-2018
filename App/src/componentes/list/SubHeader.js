import React from 'react';
import PropTypes from 'prop-types';
import {
	StyleSheet,
	View,
	Text,
} from 'react-native';

class SubHeader extends React.Component {
	render() {
		const {
			text,
		} = this.props;

		return (
			<View style={styles.subHeader}>
				<Text style={styles.text}>{text}</Text>
			</View>
		);
	}
}

SubHeader.propTypes = {
	text: PropTypes.string.isRequired,
}

const styles = StyleSheet.create({
	subHeader: {
		padding: 16,
	},
	text: {
		fontSize: 14,
		color: 'rgba(0, 0, 0, 0.54)',
	}
});

export default SubHeader;
