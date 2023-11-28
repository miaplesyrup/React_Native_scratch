import React from 'react';
import { FlatList, StyleSheet, Platform, StatusBar } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from './Screen';

const messages = [
    { 
        id: 1, 
        title: 'T1',
        description: 'D1',
        image: require('../assets/flower.png'),
    },
    { 
        id: 2, 
        title: 'T2',
        description: 'D2',
        image: require('../assets/flower.png'),
    },
];

function MessagesScreen(props) {
    return (
        <Screen>
            <FlatList 
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem 
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('message selected', item)}
                    />
                    )}
                ItemSeparatorComponent={ListItemSeparator}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight :0
    }
})

export default MessagesScreen;