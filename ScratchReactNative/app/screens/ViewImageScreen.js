import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}>
            </View>
            <Image 
                resizeMode='contain'
                style={styles.image}
                source={require('../assets/flobg.webp')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        position: 'absolute',
        width: 50,
        height: 50,
        marginTop: 40,
        right: 30,
        backgroundColor: colors.secondary,
    },
    image: {
        width: "100%",
        height: "100%",
    }
})
export default ViewImageScreen;