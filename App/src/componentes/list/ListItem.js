import React from 'react';
import PropTypes from 'prop-types';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';
import Touchable from '../button/Touchable';

class ListItem extends React.Component {
    render() {
        const {
            style,
            primaryText,
            primaryTextStyle,
            primaryTextLines,
            secondaryText,
            secondaryTextLines,
            right,
            onPress,
            primaryActionsStyle,
        } = this.props;

        const item = (
            <View style={[style, styles.item, !right && { paddingRight: 16 }]}>
                <View style={[styles.primaryActions, primaryActionsStyle]}>
                    <Text style={[styles.primaryText, primaryTextStyle]} numberOfLines={primaryTextLines}>{primaryText}</Text>
                    {secondaryText ?
                        <Text style={styles.secondaryText} numberOfLines={secondaryTextLines}>{secondaryText}</Text> :
                        false
                    }
                </View>
                {
                    right &&
                    <View style={[styles.secondaryAction]}>
                        {right}
                    </View>
                }
            </View>
        );

        return onPress ?
            <Touchable onPress={onPress}>
                {item}
            </Touchable> :
            item;
    }
}

ListItem.propTypes = {
    style: PropTypes.object,
    primaryText: PropTypes.string.isRequired,
    primaryTextStyle: PropTypes.object,
    primaryTextLines: PropTypes.number,
    secondaryText: PropTypes.string,
    secondaryTextLines: PropTypes.number,
    right: PropTypes.object,
    onPress: PropTypes.func,
    primaryActionsStyle: PropTypes.object,
};

ListItem.defaultProps = {
    style: {},
    primaryText: '',
    primaryTextLines: undefined,
    secondaryText: null,
    secondaryTextLines: undefined,
};

const styles = StyleSheet.create({
    primaryActions: {
        flex: 1,
        paddingBottom: 20,
        paddingTop: 20,
        justifyContent: 'center',
    },
    item: {
        flexDirection: 'row',
        paddingLeft: 16,
    },
    primaryText: {
        fontSize: 16,
        color: '#000',
    },
    secondaryText: {
        fontSize: 14,
    },
});

export default ListItem;
