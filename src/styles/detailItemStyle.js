import { StyleSheet } from "react-native";

const detailItemStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 20,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    label: {
        flex: 0.5,
        fontSize: 16,
        fontWeight: 'bold',
        textTransform:"capitalize"
    },
    value: {
        flex: 0.5,
        fontSize: 16,
        textAlign:"right",
        textTransform:"capitalize",
    }
})

export default detailItemStyle;