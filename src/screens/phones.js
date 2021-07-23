import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectedPhones } from '../common/strings';
import Header from '../components/Header';
import { fetchPhoneRecords } from '../store/actions';
import PhoneItem from '../components/PhoneItem';
import Loader from '../components/Loader';
import phoneStyle from '../styles/phoneStyle';

const Phones = (props) => {

    const dispatch = useDispatch();
    const records = useSelector((state) => state);

    useEffect(() => {
        fetchPhoneRecords(dispatch);
    }, [])

    useEffect(() => {
        if(records){
            if(records.selectedPhone){
                props.navigation.navigate("product")
            }
            
        }
    }, [ records ])

    const onPress = (item) => {
        try{
            dispatch({
                type: selectedPhones,
                payload: item
            })
        }
        catch(err){
            console.log("Error in onPress of catalogue item", err);
        }
    }

    return (
        <View style={phoneStyle.container}>
            <Header testID={"mainHeader"} title={"Catalogue"} />
            {
                records ? 
                <FlatList
                    testID="catalogueList"
                    data={records.phones}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => {
                        return <PhoneItem data={item} onPress={onPress} />
                    }} 
                />
                : <Loader />
            }
        </View>
    )
}
 
export default Phones;