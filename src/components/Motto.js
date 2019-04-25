import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: 5,
        marginBottom: 15,
    },
    textContainer: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
    },
})

const Motto = () => (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>Join the coins and get to the Bitcoin tile!</Text>
        </View>
    </View>
);

export default Motto
