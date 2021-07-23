import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import DetailItem from '../components/DetailItem';
import Header from '../components/Header';
import config from '../config';
import phoneViewStyle from '../styles/phoneViewStyle';

const PhoneView = (props) => {

    const selectedItem = useSelector(state => state);
    
    const onBackPress = () => {
        try{
            props.navigation.pop()
        }
        catch(err){
            console.log("Error in backpress", err);
        }
    }

    return (
        <ScrollView testID="phoneView">
            <Header testID={"phoneViewBack"} title={""} hasBackButton={true} onBackPress={onBackPress} />
            <View style={{padding: 20}}>
                <View style={phoneViewStyle.imageContainer}>
                    <Image source={{uri: `${config.images}/${selectedItem.selectedPhone.imageFileName}`}} style={phoneViewStyle.image} />
                    <Text style={phoneViewStyle.title}>{selectedItem.selectedPhone.name}</Text>
                </View>
                <View>
                    <DetailItem label={"Color"} value={selectedItem.selectedPhone.color} />
                    <DetailItem label={"Price"} value={"$" + selectedItem.selectedPhone.price} />
                    <DetailItem label="Ram" value={selectedItem.selectedPhone.ram + "gb"} />
                    <DetailItem label="Processor" value={selectedItem.selectedPhone.processor} />
                    <DetailItem label="Manufacturer" value={selectedItem.selectedPhone.manufacturer} />
                </View>
            </View>
        </ScrollView>
    )
}

export default PhoneView;