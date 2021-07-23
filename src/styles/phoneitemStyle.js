import { StyleSheet } from "react-native";

const phoneItem = StyleSheet.create({
    container: {
        flex: 1, 
        flexDirection: 'row', 
        padding: 10, 
        borderBottomWidth: 1, 
        borderBottomColor: 'lightgray'
    },
    imageStyle: {
        width: 96, 
        height: 96, 
        resizeMode:"contain"
    },
    description: {
        justifyContent:'center', 
        marginLeft: 15
    },
    title: {
        fontSize: 20, 
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16
    },
    iconContainer: {
        position:'absolute', 
        right: 10, 
        top: 0, 
        bottom: 0, 
        justifyContent:'center'
    }
})

export default phoneItem;