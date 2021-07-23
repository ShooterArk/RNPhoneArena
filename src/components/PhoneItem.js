import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { images } from '../assets/data/data';

const PhoneItem = (props) => {
    const { data, onPress } = props;
    return (
            <TouchableOpacity testID={"itemClicked"+data.id}
                onPress={onPress}
                style={{flex: 1, flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray'}}
            >
                <Image source={images[data.id].image} style={{width: 96, height: 96, resizeMode:"contain"}} />
                <View style={{justifyContent:'center', marginLeft: 15}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{data.name}</Text>
                    <Text style={{fontSize: 16}}>${data.price}</Text>
                </View>
                <View style={{position:'absolute', right: 10, top: 0, bottom: 0, justifyContent:'center'}}>
                    <Icon name="chevron-right" size={30} color="black" />
                </View>
            </TouchableOpacity>
    )
}

export default PhoneItem;