import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { secondaryColor } from '../common/colors';
import { ICON_SIZE } from '../common/size';
import headerStyle from '../styles/headerStyle';

const Header = (props) => {
    return (
        <View style={headerStyle.container}>
            {
                props.hasBackButton && (
                    <TouchableOpacity style={headerStyle.backButton} onPress={props.onBackPress}>
                        <Icon name="chevron-left" color={secondaryColor} size={ICON_SIZE} />
                    </TouchableOpacity>
                )
            }
            <Text style={headerStyle.title}>{props.title}</Text>
        </View>
    )
}


export default Header;