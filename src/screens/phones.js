import React, { Component, useEffect } from 'react';
import { ActivityIndicator, FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { images } from '../assets/data/data';
import { selectedPhones } from '../common/strings';
import Header from '../components/Header';
import { fetchPhoneRecords } from '../store/actions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Phones = (props) => {

    const dispatch = useDispatch();
    const records = useSelector((state) => state);

    useEffect(() => {
        fetchPhoneRecords(dispatch);
    }, [])

    useEffect(() => {
        console.log("Records from redux ", records);
    }, [ records ] )

    return (
        <View style={{flex: 1}}>
            <Header title={"catalogue"} />
            {
                records ? 
                <FlatList
                    testID="catalogueList"
                    data={records.phones}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return (
                            <TouchableOpacity testID={"itemClicked"+item.id}
                            onPress={()=> {
                                dispatch({
                                    type: selectedPhones,
                                    payload: item
                                })
                                props.navigation.navigate("product")
                            }}
                            style={{flex: 1, flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottomColor: 'lightgray'}}>
                                <Image source={images[item.id].image} style={{width: 96, height: 96, resizeMode:"contain"}} />
                                <View style={{justifyContent:'center', marginLeft: 15}}>
                                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{item.name}</Text>
                                    <Text style={{fontSize: 16}}>${item.price}</Text>
                                </View>
                                <View style={{position:'absolute', right: 10, top: 0, bottom: 0, justifyContent:'center'}}>
                                    <Icon name="chevron-right" size={30} color="black" />
                                </View>
                            </TouchableOpacity>
                        )
                    }} 
                />
                :
                <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                    <ActivityIndicator size={"large"} color="blue" />
                    <Text>Loading Catelog</Text>
                </View>
            }
        </View>
    )
}
 
export default Phones;