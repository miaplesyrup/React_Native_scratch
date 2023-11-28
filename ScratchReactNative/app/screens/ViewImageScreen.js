import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <AntdesignIcon name='close' color='white' size={30} />
            </View>
            <View style={styles.deleteIcon}>
                <AntdesignIcon name='delete' color='white' size={30} />
            </View>
            <Image 
                resizeMode='contain'
                style={styles.image}
                source={require('../assets/flobg.webp')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    deleteIcon: {
        position: 'absolute',
        marginTop: 40,
        right: 20,
    },
    image: {
        width: "100%",
        height: "100%",
    }
})
export default ViewImageScreen;