import React from 'react'

import { Title, Subtitle, View } from '../Header/style'
import SafeAreaView from 'react-native-safe-area-view'

export default class Header extends React.Component {
    render(){
        return (
            <SafeAreaView>
                <View >
                    <Title>{this.props.title}</Title>
                    <Subtitle>{this.props.subtitle}</Subtitle>
                </View>
            </SafeAreaView>
        )
    }
}