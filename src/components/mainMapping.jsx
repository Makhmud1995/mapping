
import React from 'react'
import { Container,Img,Logo,Text,Wrapper } from './style'
import data from '../mock/sports.json'


console.log("data:",data)

const MainMapping = ({value}) => {
  return (
    <Wrapper>
    <Container>
        <Img src={value.node.banner} alt='data is broken'/>
        <Logo src={value.node.logo} alt='logo is here'/>
        <Text>{value.node.name}</Text>
        <Text>{value.node.slug}</Text>
        <Text>{value.node.description}</Text>
        <Text>{value.node.address}</Text>
    </Container>
    </Wrapper>
  )
}

export default MainMapping