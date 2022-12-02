import React from 'react'
import styled from 'styled-components'
import {IoApps, IoChevronDown} from 'react-icons/io5'

import abo from '../assets/channels logo/abo elrokab.jpg'
import ala from '../assets/channels logo/ALA.jpg'
import chilled from '../assets/channels logo/ChilledCow.jpg'
import elzero from '../assets/channels logo/Elzero.jpg'
import eminem from '../assets/channels logo/Eminem.jpg'
import verified from '../assets/icons/verified.png'

export const SubscriptionsMenuItems = () => {
    return (
        <Container>
            <span style={{ marginLeft:'10px', fontSize:15,fontWeight:'bold', color:'#333' }} >SUBSCRIPTIONS</span>
            <ItemContainer> <ItemIcon src={abo} /> Marwan Pablo</ItemContainer>
            <ItemContainer> <ItemIcon src={ala} /> Mamdouh NasrAllah</ItemContainer>
            <ItemContainer> <ItemIcon src={chilled} /> Elzero Web School</ItemContainer>
            <ItemContainer> <ItemIcon src={elzero} /> Mahmound</ItemContainer>
            <ItemContainer> <ItemIcon src={eminem} /> Mneu</ItemContainer>
            <ItemContainer> <IoChevronDown size={20} style={{paddingRight:'10px'}} /> Show 70 more</ItemContainer>
        </Container>
    )
}

const Container = styled.div`
    width:100%; 
    height:30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 30px;
`

const ItemContainer = styled.div`
    display: flex;
    color:gray;
    width: 100%;
    height: 40px;
    align-items: center;
    padding-left: 10px;
`

const ItemIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-right: 10px;
    clip-path: circle();
`