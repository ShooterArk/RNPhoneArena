import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectedPhones } from '../common/strings';
import Header from '../components/Header';
import { fetchPhoneRecords } from '../store/actions';
import PhoneItem from '../components/PhoneItem';

const Phones = (props) => {

    const dispatch = useDispatch();
    const records = useSelector((state) => state);

    useEffect(() => {
        fetchPhoneRecords(dispatch);
    }, [])

    const onPress = () => {
        try{
            dispatch({
                type: selectedPhones,
                payload: item
            })
            props.navigation.navigate("product")
        }
        catch(err){
            console.log("Error in onPress of catalogue item", err);
        }
    }

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
                        return <PhoneItem data={item} onPress={onPress} />
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