import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/flobg.webp')}
        >
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo1}
                    source={require('../assets/free.png')} />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='Login' onPress={() => navigation.navigate('Login')} />
                <AppButton title='Register' color='secondary' onPress={() => navigation.navigate('Register')} />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    buttonContainer: {
        padding: 20,
        width: '100%',
    },
    logo1: {
        width: 100,
        height: 100,    
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }
})
export default WelcomeScreen;