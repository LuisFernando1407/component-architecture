import React, { useState, useEffect } from 'react'

import { View } from '../Home/style'
import Topic from '../../components/Topic'
import { Dimensions } from 'react-native'

const Home = ( { navigation } ) => {
    const [title, setTitle] = useState('Luís Fernando')
    const [subtitle, setSubtitle] = useState('Sistemas de Informação')
    const topics = [
        {title: "Trabalho de conclusão de Curso II"},
        {title: "Projeto de Interface para Dispositivos Móveis"},
        {title: "Sistemas Distribuidos"},
        {title: "Programação de Scripts"}
    ]
    const { width } = Dimensions.get('window')

    useEffect(() => {
        navigation.setParams({title, subtitle})
    }, [title, subtitle])

    return (
        <View width={(width - 40)}>
            { topics.map( (topic) =>
                <Topic title={topic.title}/>
            )}
        </View>
    )
}

export default Home