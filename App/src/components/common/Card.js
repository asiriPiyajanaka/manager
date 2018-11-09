import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={style.containerStyle}>
           {props.children} 
        </View>
    );
};

const style = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10

        // backgroundColor: '#F8F8F8',
        // justifyContent: 'center',
        // alignItems: 'center',
        // height: 60,
        // shadowColor: '#FFF',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.2,
      
    },
    TextStyle: {
        fontSize: 20
    }
};

export default Card;
