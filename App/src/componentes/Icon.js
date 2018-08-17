import React from 'react';
import {
    Platform,
    PixelRatio,
} from 'react-native';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Icon extends React.Component {

    render() {
        const {
            name,
            size,
            color,
        } = this.props;
        const isIOS = Platform.OS === 'ios';

        return (
            <Ionicons name={`${isIOS ? 'ios' : 'md'}-${name}`} size={size} color={color} />
        );
    }
}

Icon.defaultProps = {
    size: Platform.OS === 'ios' ? 54 / PixelRatio.get() : 24,
    color: "#FFF",
};

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    color: PropTypes.string,
};

export default Icon;
