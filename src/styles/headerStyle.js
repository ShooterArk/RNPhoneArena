import { StyleSheet } from "react-native";

const headerStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        height: 60,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    title: {
        color: "blue",
        fontSize: 18,
        textAlign:'center',
        zIndex: 1, marginLeft: 20
    },
    backButton: {
        padding: 10,
        zIndex: 2
    }
})

export default headerStyle;