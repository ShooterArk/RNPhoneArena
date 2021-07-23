import React from 'react';
import { Text, View } from 'react-native';
import detailItemStyle from '../styles/detailItemStyle';

const DetailItem = (props) => {
    return (
        <View style={detailItemStyle.container}>
            <Text style={detailItemStyle.label}>{props.label}</Text>
            <Text style={detailItemStyle.value}>{props.value}</Text>
        </View>
    )
}

export default DetailItem;