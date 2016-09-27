'use strict'
import React, {PropTypes}  from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

const { width } = Dimensions.get("window");
const imageWidth = (width - 10) / 5 -1;

const propTypes = {
    name: PropTypes.string,
    source: PropTypes.number,
    position: PropTypes.string,
    bg:PropTypes.number,
};


const ProjectMember = (props) => (
    <Image style={{
        flex: 1,
        width: imageWidth,
        height: imageWidth,
        flexDirection: 'column',
        borderRadius: 2,
        borderColor: '#DCD7CD',
        resizeMode:Image.resizeMode.cover,
        borderWidth: 0.5,
        justifyContent: 'center'}}
           source={props.bg}>
        <Image style={{
            flex: 1,
            width: imageWidth,
            height: imageWidth,
            justifyContent: 'flex-start',
            resizeMode:Image.resizeMode.contain
        }} source={props.source}>
            <Text style={{color:'white', fontSize:11, fontWeight:'bold', backgroundColor: 'transparent', textAlign:'left'}}>{props.position}</Text>
        </Image>
    </Image>

);

ProjectMember.propTypes = propTypes;

export default ProjectMember;
