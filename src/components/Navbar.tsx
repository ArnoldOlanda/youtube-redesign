import React from 'react'
import styled from 'styled-components'
import {RxHamburgerMenu} from 'react-icons/rx'
import {IoApps, IoChevronDown} from 'react-icons/io5'

import home from '../assets/icons/Home2.png'
import trend from '../assets/icons/trend2.png'
import subs from '../assets/icons/subscriptions.png'
import videoAdd from '../assets/icons/videoadd.png'
import notif from '../assets/icons/notifications.png'
import profile from '../assets/channels logo/pablo.jpg'

interface Props{
  onClick:()=>void;
}

export const Navbar = ({ onClick }:Props) => {

  const onClickMenu = () => {
    onClick()
  }

  return (
    <Container>
      <ButtonsLeftContainer>
        <ButtonBasic onClick={onClickMenu} > <RxHamburgerMenu size={20} /></ButtonBasic>
        <ButtonBasic style={{backgroundColor:'#fdd'}}> <img src={home} style={{opacity:1}} /> </ButtonBasic>
        <ButtonBasic> <img src={ trend } /> </ButtonBasic>
        <ButtonBasic> <img src={ subs } /> </ButtonBasic>
      </ButtonsLeftContainer>

      <SearchBox>
        <input type="text" placeholder='Search...' />
      </SearchBox>

      <ButtonsRightContainer>
        <ButtonBasic> <img src={videoAdd} /> </ButtonBasic>
        <ButtonBasic><IoApps size={20} /></ButtonBasic>
        <ButtonBasic><img src={notif} /></ButtonBasic>
        <ButtonBasic style={{width:'65px'}}> 
          <img src={profile} style={{borderRadius:'12px', opacity:1}} /> 
          <IoChevronDown size={20} color='#000' style={{marginLeft:'4px'}} /> 
        </ButtonBasic>
      </ButtonsRightContainer>
    </Container>
  )
}

const Container = styled.div`
    background-color: #fff;
    width: calc(100% - 40px);
    height: 80px;
    margin-left: 20px;
    border-radius: 25px;
    box-sizing: border-box;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`
const ButtonsLeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 30%;
  width: 300px;
  min-width: 100px;
  margin-left: 30px;
`
const ButtonsRightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 30%;
  width: 300px;
  min-width: 100px;
  margin-right: 30px;
`

const ButtonBasic = styled.div`
  width: 47px;
  height: 45px;
  background-color: #f5f5f5;
  color: gray;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 28px;
    height: 28px;
    opacity: 0.7;
  }
`

const SearchBox= styled.div`
  max-width: 700px;
  width: 30%;
  height: 45px;
  border-radius: 15px;
  background-color: #f5f5f5;
  overflow: hidden;
  margin: 0 5px;
  input{
    background-color: transparent;
    border:none;
    width: 100%;
    height: 100%;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
    
  }
  /* @media (max-width: 1366px) {
    width: 300px;
  }
  @media (max-width: 1024px) {
    width: 150px;
  } */
`