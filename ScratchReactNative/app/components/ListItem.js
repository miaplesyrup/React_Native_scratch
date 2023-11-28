import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText/AppText';

function ListItem({ title, subTitle, image, ImageComponent, onPress}) {
    return (
        <TouchableHighlight 
            underlayColor={colors.light}
            onPress={onPress}>
            <View style={styles.container}>
                {ImageComponent}
                {image && <Image style={styles.image} source={image} />}
                <View>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 16,
    },
    subTitle: {
        color: colors.medium
    },
    title: {
        fontWeight: '500',
    }
})
export default ListItem;