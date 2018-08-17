import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    Text,
} from 'react-native';

class RightText extends React.Component {
    render() {
        const {
            text,
            style,
        } = this.props;

        return (
            <Text style={[styles.text, style]}>{text}</Text>
        );
    }
}

RightText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
};

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        marginRight: 16,
        paddingLeft: 16,
        fontSize: 12,
    },
});

export default RightText;
