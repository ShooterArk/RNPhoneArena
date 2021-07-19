import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetailItem = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    label: {
        flex: 0.5,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform:"capitalize"
    },
    value: {
        flex: 0.5,
        fontSize: 16,
        textAlign:"right",
        textTransform:"capitalize",
        
    }
})

export default DetailItem;