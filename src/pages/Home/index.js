import React, { useState, useEffect } from 'react'

import { View, Text } from '../Home/style'

const Home = ( { navigation } ) => {
    const [title, setTitle] = useState('Luís Fernando')
    const [subtitle, setSubtitle] = useState('Sistemas de Informação')

    useEffect(() => {
        navigation.setParams({title, subtitle})
    }, [title, subtitle])
    
    return (
        <View>
        </View>
    )
}

export default Home