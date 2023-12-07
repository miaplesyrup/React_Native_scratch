/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, StyleSheet, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Screen from './app/screens/Screen';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import AuthNavigator from './app/navigation/AuthNavigation';

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
      title="View Tweet"
      onPress={() => navigation.navigate('TweetDetails', {id: 1})}
    />
  </Screen>
);

const TweetDetails = ({route}) => (
  <Screen style={styles.container}>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'dodgerblue'},
      headerTintColor: 'white',
    }}>
    <Stack.Screen
      name="Tweets"
      component={Tweets}
      options={{
        headerStyle: {backgroundColor: 'tomato'},
        headerTintColor: 'white',
      }}
    />
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({route}) => ({title: route.params.id})}
    />
  </Stack.Navigator>
);

const Account = () => 
  <Screen>
    <Text>Account</Text>
  </Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveBackgroundColor: 'tomato',
      tabBarActiveTintColor: 'white',
      tabBarInactiveBackgroundColor: '#eee',
      tabBarInactiveTintColor: 'black'
    }}>
    <Tab.Screen 
      name="Feed" 
      component={StackNavigator}
      options={{
        tabBarIcon: ({size,color}) => <AntDesignIcon name="home" size={size} color={color}/>
      }} />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
});

export default App;
