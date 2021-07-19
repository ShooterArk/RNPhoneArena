import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = (props) => {
    return (
        <View style={styles.header}>
            {
                props.hasBackButton && (
                    <TouchableOpacity style={styles.backButton} onPress={props.onBackPress}>
                        <Icon name="chevron-left" color="black" size={30} />
                    </TouchableOpacity>
                )
            }
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems:'center',
        height: 60,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    title: {
        color: "blue",
        fontSize: 18,
        textAlign:'center',
        zIndex: 1, marginLeft: 20
    },
    backButton: {
        padding: 10,
        zIndex: 2
    }
})

export default Header;