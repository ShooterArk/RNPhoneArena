import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { primaryColor } from '../common/colors';
import { loadingCatalogue } from '../common/strings';
import LoaderStyle from '../styles/loaderStyle';

const Loader = () => {
    return (
        <View style={LoaderStyle.Container}>
            <ActivityIndicator size={"large"} color={primaryColor} />
            <Text>{loadingCatalogue}</Text>
        </View>
    )
}

export default Loader;