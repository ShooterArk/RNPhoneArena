import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { images } from '../assets/data/data';
import DetailItem from '../components/DetailItem';
import Header from '../components/Header';

const PhoneView = (props) => {

    const selectedItem = useSelector(state => state);
    
    return (
        <ScrollView testID="phoneView">
            <Header title={""} hasBackButton={true} onBackPress={() => { props.navigation.pop() }} />
            <View style={{padding: 20}}>
                <View style={{justifyContent: "center", alignItems:'center', borderBottomColor: 'lightgray', borderBottomWidth: 1, paddingBottom: 30}}>
                    <Image source={images[selectedItem.selectedPhone.id].image} style={{width: 144, height: 144, resizeMode:"contain"}} />
                    <Text style={{fontSize: 26, fontWeight: 'bold', marginTop: 10}}>{selectedItem.selectedPhone.name}</Text>
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