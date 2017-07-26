// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
// whenever we use javascript object in jsx we put it in curly braces  
const Header = ( props ) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
);
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to other parts of the app
// only root component use Appregistry
// header is a child component
// will be available to other
export default Header;
// Flexbox is a system of position element in the container
// Flexbox css positioning technology

// by default top left
// justifyContent to make content vertical
//"flex-start" default
// alignItems to move horizontally
