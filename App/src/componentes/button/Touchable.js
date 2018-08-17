import React from 'react';
import PropTypes from 'prop-types';
import {
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback,
} from 'react-native';

class Touchable extends React.Component {

    render() {
        const {
            children,
        } = this.props;

        return (
            Platform.OS === "ios" ?
                <TouchableOpacity activeOpacity={.6} {...this.props}>
                    {children}
                </TouchableOpacity> :
                <TouchableNativeFeedback {...this.props}>
                    {children}
                </TouchableNativeFeedback>
        );
    }
}

Touchable.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Touchable;