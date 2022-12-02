import React from 'react'
import styled from 'styled-components'

import youtubeLogo from '../assets/icons/youtubelogo.png'
import { MainMenuItems } from './MainMenuItems'
import { MoreFromYoutubeItems } from './MoreFromYoutubeItems'
import { SubscriptionsMenuItems } from './SubscriptionsMenuItems'
import {IoClose} from 'react-icons/io5'

interface Props{
  colapsed?: boolean;
  onClose:()=>void
}

interface SidebarProps{
  colapsed?:boolean;
}

export const Sidebar = ({ colapsed, onClose }:Props) => {
  return (
    <Container colapsed={colapsed}>
        <div style={{ width:'100%', display:'flex', justifyContent:'center', position:'relative' }} >
            <YoutubeLogo src={ youtubeLogo } />
            <div className='close' onClick={onClose}><IoClose size={25} /></div>
        </div>
        <MainMenuItems />
        <SubscriptionsMenuItems />
        <MoreFromYoutubeItems />

    </Container>
  )
}


const Container = styled.div<SidebarProps>`
    position: relative;
    width:${({colapsed})=> colapsed ? '0px':'20vw'};
    height: calc(100vh - 40px);
    background-color: #fff;
    border-radius: 25px;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    transition: all .2s ease-in-out;
    transform: ${ ({colapsed})=> colapsed ? 'translateX(-200%)':'translateX(0px)'};
    z-index: 100;
    div{
      .close{
        position: absolute;
        bottom: 20px;
        right: 10px;
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    @media (max-width: 1600px) {
      position: absolute;
      left: 0;
      top:0;
      min-width: 250px;
      height: 100vh;
      div{
        .close{
          opacity: 1;
        }
      }
    
    }
`

const YoutubeLogo = styled.img`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 50%;
    align-self: flex-start;
`