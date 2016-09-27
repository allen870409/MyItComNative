import React, {
  PropTypes,
} from 'react';
import {
    View,
    Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const propTypes = {
    selected: PropTypes.bool,
    title: PropTypes.string,
    iconCode: PropTypes.string,
};


const TabIcon = (props) => (
    <View style={{
        flex: 1,
        paddingTop: 8,
        marginBottom:0,
        alignItems:'center',
        justifyContent:'center',
        flexDirection: 'column' }}>
        <Icon name={props.iconCode} size={24} color={ props.selected ? '#FF3F80' : '#3F51B5' }>
        </Icon>
        <Text style={{marginBottom:8, color: props.selected ? '#FF3F80' : '#3F51B5',
            fontSize: props.selected ? 14 : 12}}>{props.title}</Text>
    </View>

);

TabIcon.propTypes = propTypes;

export default TabIcon;
