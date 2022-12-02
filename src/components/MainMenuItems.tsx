import React from 'react'
import {IoApps, IoChevronDown} from 'react-icons/io5'

import libray from '../assets/icons/library.png'
import history from '../assets/icons/history.png'
import watchLater from '../assets/icons/watch later.png'
import likedVideos from '../assets/icons/liked videos.png'
import styled from 'styled-components'

export const MainMenuItems = () => {
  return (
    <Container>
        <ItemContainer> <ItemIcon src={libray }/> Library</ItemContainer> 
        <ItemContainer> <ItemIcon src={history }/> History</ItemContainer> 
        <ItemContainer> <ItemIcon src={libray }/> Your videos</ItemContainer> 
        <ItemContainer> <ItemIcon src={watchLater }/> Watch later</ItemContainer> 
        <ItemContainer> <ItemIcon src={likedVideos }/> Liked videos</ItemContainer> 
        <ItemContainer> <IoChevronDown size={20} style={{paddingRight:'10px'}} /> Show more</ItemContainer> 
    </Container>
  )
}

const Container = styled.div`
    width:100%; 
    height:30%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    padding-right: 10px;
    opacity: 0.7;
`

