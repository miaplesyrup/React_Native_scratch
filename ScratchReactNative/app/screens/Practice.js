import React from 'react';
import { View, Text } from 'react-native';

import AppText from '../components/AppText/AppText';

function Practice(props) {
    return (
        <View 
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <AppText>Practice</AppText>

        </View>
    );
}

export default Practice;