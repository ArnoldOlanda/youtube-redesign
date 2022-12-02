import { useState } from 'react'
import styled from 'styled-components'
import { AddSection } from "./components/AddSection"
import { ChipList } from "./components/ChipList"
import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"
import { VideosList } from "./components/VideosList"

interface StyledContentProps{
  colapsed:boolean;
}

interface StyledContainerProps{
  colapsed:boolean
}

function App() {
  const [sidebarColapsed, setSidebarColapsed] = useState(true)

  const onClickSidebarColapseButton = () => {
    setSidebarColapsed(!sidebarColapsed);
  }

  return (
    <Container colapsed={sidebarColapsed}>
      <div className='foreground' />
      <Sidebar colapsed={sidebarColapsed} onClose={()=> setSidebarColapsed(true) } />
      <Content colapsed>
        <Navbar onClick={onClickSidebarColapseButton} />
        <ChipList />
        <AddSection />
        <VideosList />
      </Content>
    </Container>
  )
}

const Container = styled.div<StyledContainerProps>`
  padding:20px;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  max-height: 400vh;
  position: absolute;
  display: flex;
  .foreground{
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
    background-color: #000000ac;
    opacity: 0;
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: 1600px) {
    .foreground{
      z-index: ${({colapsed})=> colapsed ? '-1':'99' };
      opacity: ${({colapsed})=> colapsed ? '0':'1' };
    }
  }
`

const Content = styled.div<StyledContentProps>`
  width:${ ({colapsed})=> colapsed ? '100vw' : 'calc(80vw - 40px)' };

  @media (max-width: 1600px) {
    position: absolute;
  }
`

export default App
