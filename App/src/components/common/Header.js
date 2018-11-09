import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { TextStyle, ViewStyle } = styles;

    return (
        <View style={ViewStyle}>
            <Text style={TextStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    ViewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#FFF',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2
    },
    TextStyle: {
        fontSize: 20
    }
};

export default Header;