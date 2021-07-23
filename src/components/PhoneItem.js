import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { images } from '../assets/data/data';
import { ICON_SIZE } from '../common/size';
import config from '../config';
import phoneitemStyle from '../styles/phoneitemStyle';

const PhoneItem = (props) => {
    const { data, onPress } = props;
    return (
            <TouchableOpacity testID={"product"+data.id}
                onPress={() => onPress(data)}
                style={phoneitemStyle.container}
            >
                <Image source={{uri: `${config.images}/${data.imageFileName}`}} style={phoneitemStyle.imageStyle} />
                <View style={phoneitemStyle.description}>
                    <Text style={phoneitemStyle.title}>{data.name}</Text>
                    <Text style={phoneitemStyle.price}>${data.price}</Text>
                </View>
                <View style={phoneitemStyle.iconContainer}>
                    <Icon name="chevron-right" size={ICON_SIZE} color="black" />
                </View>
            </TouchableOpacity>
    )
}

export default PhoneItem;