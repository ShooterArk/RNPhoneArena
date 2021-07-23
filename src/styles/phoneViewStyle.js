import { StyleSheet } from "react-native";

const phoneViewStyle = StyleSheet.create({
    imageContainer: {
        justifyContent: "center", 
        alignItems:'center', 
        borderBottomColor: 'lightgray', 
        borderBottomWidth: 1, 
        paddingBottom: 30
    },
    image: {
        width: 144, 
        height: 144, 
        resizeMode:"contain"
    },
    title: {
        fontSize: 26, 
        fontWeight: 'bold', 
        marginTop: 10
    }
})

export default phoneViewStyle;