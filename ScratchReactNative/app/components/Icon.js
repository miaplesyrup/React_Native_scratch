import React from 'react';
import { View } from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

function Icon({
    name,
    size = 40,
    backgroundColor = '#000',
    iconColor = '#fff'
}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <AntdesignIcon name={name} color={iconColor} size={size * 0.5}></AntdesignIcon>
        </View>
    );
}


export default Icon;