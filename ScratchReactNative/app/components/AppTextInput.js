import React from 'react';
import { View, TextInput, StyleSheet, Platform } from 'react-native';

import AntDesignIcon from "react-native-vector-icons/AntDesign"
import colors from '../config/colors';

function AppTextInput({icon, ...otherProps}) {
    return (
        <View style={styles.container}>
            {icon && <AntDesignIcon name={icon} size={20}  color={colors.medium} style={styles.icon}/>}
            <TextInput style={styles.textInput} {...otherProps}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        color: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    textInput:{
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',    
    }
})

export default AppTextInput;