import React from 'react'
import styled from 'styled-components'

import youtube from '../assets/icons/youtubeicon.png'
import gaming from '../assets/icons/YouTubeGaming.png'
import live from '../assets/icons/live.png'

export const MoreFromYoutubeItems = () => {
    return (
        <Container>
            <span style={{ marginLeft:'10px',marginBottom:'10px', fontSize:15,fontWeight:'bold', color:'#333' }} >MORE FROM YOUTUBE</span>
            <ItemContainer> <ItemIcon src={youtube} /> Youtube Premium</ItemContainer>
            <ItemContainer> <ItemIcon src={gaming} /> Gaming</ItemContainer>
            <ItemContainer> <ItemIcon src={live} /> Live</ItemContainer>
        </Container>
    )
}

const Container = styled.div`
    width:100%; 
    height:20%;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`

const ItemContainer = styled.div`
    display: flex;
    color:gray;
    width: 100%;
    height: 40px;
    align-items: center;
    padding-left: 10px;
    margin-bottom: 10px;
`

const ItemIcon = styled.img`
    width: 30px;
    height: 20px;
    padding-right: 10px;
    opacity: 0.7;
`
