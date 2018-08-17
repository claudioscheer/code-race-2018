import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import Icon from '../Icon';

class IconButton extends React.Component {

    render() {
        const {
            style,
            onPress,
            onLongPress,
            iconName,
            iconColor,
            iconSize,
        } = this.props;

        return (
            <TouchableOpacity activeOpacity={.7} onLongPress={onLongPress} onPress={onPress} style={[styles.button, style]}>
                <Icon name={iconName} color={iconColor} size={iconSize} />
            </TouchableOpacity>
        );
    }
}

IconButton.propTypes = {
    style: PropTypes.object,
    onPress: PropTypes.func,
    onLongPress: PropTypes.func,
    iconName: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.number,
};

const styles = StyleSheet.create({
    button: {
        padding: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default IconButton;
