import React from 'react';
import ListItem from '../components/ListItem';
import Screen from './Screen';
import { StyleSheet, View, FlatList } from 'react-native'
import colors from '../config/colors';
import Icon from '../components/Icon';


const menuItems =[
    {title: "My listings",
    icon: {
        name:'bars',
        backgroundColor: colors.primary
    }
    },
    {title: "My messages",
    icon: {
        name:'mail',
        backgroundColor: colors.secondary
    }
    },
]

function AccountScreen(props) {
    return (
        <Screen>
            <View style={styles.container}>
                <ListItem 
                    title="Mai Delgado"
                    subTitle="delmai@gmail.com"
                    image={require('../assets/flower.png')}/>
            </View>
            <View style={styles.container}>
                <FlatList 
                   data={menuItems}
                   keyExtractor={menuItem => menuItem.title} 
                   renderItem={({item}) =>
                        <ListItem 
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                                }
                        />
                        }
                />
            </View>
        </Screen> 
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    }
})
export default AccountScreen;