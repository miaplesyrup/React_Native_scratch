/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Screen from './app/screens/Screen';

// const Link = () => {
//   const navigation = useNavigation();
//   return(
//   <Button 
//     title='Click' 
//     onPress={() => navigation.navigate('TweetDetails') }/>

// )
// }


const Tweets = ({navigation}) => (
  <Screen style={styles.container}>
    <Text>Tweets</Text>
    <Button 
      title='View Tweet'
      onPress={() => navigation.navigate('TweetDetails', {id:1})}/>
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen style={styles.container}>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue'},
      headerTintColor: 'white',
    }}>
    <Stack.Screen 
      name="Tweets" 
      component={Tweets} 
      options={{
        headerStyle: { backgroundColor: 'tomato'},
        headerTintColor: 'white',
      }}/>
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails} 
      options={({route}) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default App;
