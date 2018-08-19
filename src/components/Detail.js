import React from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Buton from './Button';

export default Detail = ({ data }) => {
    const { containerStyle, subContainerStyle, imageStyle, titleStyle } = styles;
    return (
        <View style={containerStyle}>
            <View style={subContainerStyle}>
                <Text style={titleStyle}>{data.title}</Text>
            </View>
            <View style={subContainerStyle}>
                <Image style={imageStyle} source={{ url: data.image }}></Image>
            </View>
            <View style={subContainerStyle}>
                <Buton onPress={() => Linking.openURL(data.url)}>Satın Al</Buton>
            </View>
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    imageStyle: {
        height: 300,
        flex: 1
    },
    titleStyle: {
        fontSize: 18
    }
};