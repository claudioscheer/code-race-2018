import React from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    View,
} from 'react-native';

class Divider extends React.Component {
    render() {
        const {
            style,
        } = this.props;

        return (
            <View style={[styles.divider, style]} />
        );
    }
}

Divider.propTypes = {
    style: PropTypes.object,
}

const styles = StyleSheet.create({
    divider: {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        height: 1,
    },
});

export default Divider;