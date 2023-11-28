/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Screen from './app/screens/Screen';
import ListItem from './app/components/ListItem';
import Icon from './app/components/Icon';

function App(): JSX.Element {
  return (
    <Screen>
      <ListItem
        title="My title"
        subTitle="My subtitle"
        ImageComponent={<Icon name='mail' />}
      />
    </Screen>
  );
}

export default App;
