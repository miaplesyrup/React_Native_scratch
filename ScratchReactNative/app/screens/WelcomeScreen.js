import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/dog.png')}
        >
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo1}
                    source={require('../assets/free.png')} />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        position: 'absolute',
        bottom: 20,
        left: 30,
        width: 80,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        position: 'absolute',
        bottom: 20,
        right: 30,
        width: 80,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#000'
    },
    logo1: {
        width: 100,
        height: 100,    
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    }
})
export default WelcomeScreen;