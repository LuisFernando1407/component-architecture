import React from 'react'

import { Title, Container, Content } from '../Topic/style'

export default class Topic extends React.Component {
    render(){
        return (
            <Container>
                <Content >
                    <Title>{this.props.title}</Title>
                </Content>
            </Container>
        )
    }
}