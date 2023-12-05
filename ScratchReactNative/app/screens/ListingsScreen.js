import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import Screen from './Screen';

const listings = [
    {
        id: 1,
        title: "Apple iPhone X",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies",
        price: "900",
        image: require('../assets/dog.png')
    },
    {
        id: 2,
        title: "doggie",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec diam ultricies",
        price: "900",
        image: require('../assets/dog.png')
    },

];

function ListingsScreen(props) {
    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({item}) => (
                    <Card 
                        title={item.title}
                        subTitle={"$" + item.price }
                        image={item.image}
                    />
                    )}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

export default ListingsScreen;