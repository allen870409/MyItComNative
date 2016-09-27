'use strict';
import React, {PropTypes}  from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import ProjectMember from './ProjectMember';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Project = (props) => {
    return (

        <View style={styles.root}>
            <View style={styles.row}>
                <View style={styles.icon}>
                    <AnimatedCircularProgress
                        size={120}
                        width={8}
                        fill={90}
                        rotation={0}
                        tintColor="#5C6BC0"
                        backgroundColor="#F5F5F5">
                        {
                            (fill) => (
                                <Text style={styles.points}>
                                    { 90 }
                                </Text>
                            )
                        }
                    </AnimatedCircularProgress>
                </View>
                <View style={styles.info}>
                    <Text style={[styles.font14, styles.red]}>超低价值</Text>
                    <Text style={[styles.font14, {fontSize:12, marginTop:14, color: 'black'}]}>十元惠生活</Text>
                </View>
            </View>
            <View style={styles.row2}>
                <ProjectMember name="Kim" position="PM" bg={require('../image/bg/0.png')} source={require('../image/avatar/FOEC03.png')}/>
                <ProjectMember name="Helen" position="SE" bg={require('../image/bg/7.png')} source={require('../image/avatar/FYIT04.png')}/>
                <ProjectMember name="Allen" position="Creator" bg={require('../image/bg/10.png')} source={require('../image/avatar/MYEC03.png')}/>
                <ProjectMember name="Joe" position="PM" bg={require('../image/bg/21.png')} source={require('../image/avatar/MYIT10.png')}/>
                <ProjectMember name="Jim" position="PM" bg={require('../image/bg/25.png')} source={require('../image/avatar/MYWT09.png')}/>
            </View>
        </View>
    );
};
var styles = StyleSheet.create({
    root:{
        flexDirection: 'column',
        padding: 8,
        borderColor: '#DCD7CD',
        borderWidth: 0.5
    },
    row:{
        flexDirection: 'row',
    },
    row2:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8
    },
    info:{
        flex: 2,
        padding: 8,
        flexDirection:'column',
    },
    employee:{
        flex: 1,
        borderColor: '#DCD7CD',
        borderWidth: 0.5,
        justifyContent: 'center',
    },
    marTop18:{
        marginTop:18,
    },
    marTop14:{
        marginTop:14,
    },
    font14:{
        fontSize:14,
    },
    font10:{
        fontSize:12,
    },
    height160:{
        height: 160,
    },
    ii:{
        height: 80,
    },
    ei:{
        flex: 1,
        width: 73,
        height: 73,
        resizeMode:Image.resizeMode.contain
    },
    green:{
        color:'#55A44B',
        fontWeight: '900'
    },
    red:{
        color: '#FF3F0D',
        fontWeight: '900'
    },
    marLeft10:{
        marginLeft:10,
    },
    part_1_left:{
        flex: 1,
        borderColor: '#DCD7CD',
        borderRightWidth: 0.5,
        borderBottomWidth: 1,
    },
    part_1_right:{
        flex:2,
        borderColor: '#DCD7CD',
        borderBottomWidth: 1,
    },
    hanbao:{
        height:55,
        width:55
    },

    points: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 35,
        left: 10,
        width: 100,
        textAlign: 'center',
        color: '#7591af',
        fontSize: 40,
        fontWeight: "100"
    },
});


export default Project;
