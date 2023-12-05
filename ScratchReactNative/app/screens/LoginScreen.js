import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native'
// import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from './Screen';

function LoginScreen(props) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/dog.png')}/>

            {/* <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => console.log(values)}
            >
                {({handleChange, handleBlur, handleSubmit})=>(
                    <></>
                    )}
            </Formik> */}
            <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false}
                icon="mail"
                keyboardType="email-address"
                onChangeText={text => setEmail(text)}
                placeholder="email"
                textContentType="emailAddress"
            />
            <AppTextInput 
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                onChangeText={text => setPassword(text)}
                placeholder="Password"
                textContentType='password'
                secureTextEntry
            />
            <AppButton title="Login" onPress={() => console.log(email, password)}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})

export default LoginScreen;