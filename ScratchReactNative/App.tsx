/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View} from 'react-native';
import AppButton from './app/components/AppButton';
// import AppText from './app/components/AppText';
// import Practice from './app/screens/Practice';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';

function App(): JSX.Element {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AppButton title="Login" onPress={() => console.log('tapped')} />
    </View>
  );
}

export default App;
