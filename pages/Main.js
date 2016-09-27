import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";
import {Scene, Reducer, Router, Modal} from "react-native-router-flux";
import TabView from "../component/TabView";
import Project from "../component/Project";
import TabIcon from "../component/TabIcon";

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
        alignItems: 'center',
    },
    tabBarStyle: {
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowOffset: {
            height: 1,
            width: 0
        },
        marginTop:0,
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#F5F5F5',
    },
    tabBarSelectedItemStyle: {
        justifyContent: 'center',
        height: 56,
        backgroundColor: '#F5F5F5',
    },
    navigationBarStyle:{
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        },
        backgroundColor: '#3F51B5'
    }
});

const reducerCreate = params => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    };
};

// define this based on the styles/dimensions you use
const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
    const style = {
        flex: 1,
        shadowColor: 'blue',
        shadowOffset: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};


class Main extends Component {
    render() {
        return (
        <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
            <Scene key="modal" component={Modal} >
                <Scene
                    key="main"
                    tabs
                    tabBarStyle={styles.tabBarStyle}
                    tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
                >
                    <Scene key="CEO" title="CEO" component={Project}
                           iconCode="smile-o" icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={{ color: 'white' }} />
                    <Scene key="HR" component={TabView} title="HR"
                           iconCode="user" icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={{ color: 'white' }}/>
                    <Scene key="Market" component={TabView} title="Market"
                           iconCode="line-chart" icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={{ color: 'white' }}/>
                    <Scene key="Tech" component={TabView} title="Tech"
                           iconCode="sitemap" icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={{ color: 'white' }}/>
                    <Scene key="General" component={TabView} title="General"
                           iconCode="skyatlas" icon={TabIcon}
                           navigationBarStyle={styles.navigationBarStyle}
                           titleStyle={{ color: 'white' }}/>
                </Scene>
            </Scene>
        </Router>
    );
    }
}

export default Main;
