import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Header from '../src/components/Header'
import Home from '../src/pages/Home'

const Router = createStackNavigator({
        HomeScreen: Home,
    }, {
        headerMode: 'screen',
        defaultNavigationOptions: ({ navigation }) => ({
            header: <Header title={navigation.getParam('title', 'Content-Title')} subtitle={navigation.getParam('subtitle', 'Content-Subtitle')} navigation={navigation}/>
        }),
    }
)

export default createAppContainer(Router)