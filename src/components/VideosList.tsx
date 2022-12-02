import React from 'react'
import styled from 'styled-components'

import thum1 from '../assets/thumbnails/vide1.webp'
import thumb2 from '../assets/thumbnails/video2.webp'
import thumb3 from '../assets/thumbnails/video3.webp'
import thumb4 from '../assets/thumbnails/Video4.webp'
import thumb5 from '../assets/thumbnails/video5.webp'
import thumb6 from '../assets/thumbnails/video6.webp'
import thumb7 from '../assets/thumbnails/video7.webp'
import thumb8 from '../assets/thumbnails/video8.webp'

import channel1 from '../assets/channels logo/abo elrokab.jpg'
import channel2 from '../assets/channels logo/ALA.jpg'
import channel3 from '../assets/channels logo/ChilledCow.jpg'
import channel4 from '../assets/channels logo/Elzero.jpg'
import channel5 from '../assets/channels logo/Eminem.jpg'
import channel6 from '../assets/channels logo/mamdouh nasrallah.jpg'
import channel7 from '../assets/channels logo/MNEU.jpg'
import channel8 from '../assets/channels logo/pablo.jpg'
import channel9 from '../assets/channels logo/sanfara.jpg'
import channel10 from '../assets/channels logo/Seriea.jpg'

interface VideoData {
    thumbail: any;
    channelLogo:any;
    title: string;
    subtitle: string;
    viewsTimeText: string
}


const videosListData:VideoData[] =[
    {
        thumbail: thum1,
        channelLogo: channel1,
        title: 'Super Intelligence: Memory Music, Improve Memory and Concerto',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quam minus odit, obcaecati harum dicta ',
        viewsTimeText: '22M views . 3 years ago'
    },
    {
        thumbail: thumb2,
        channelLogo: channel2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quis dolores perferendis explicabo ea porro dolor, ',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, explicabo.',
        viewsTimeText: '2.9M views . 2 months ago'
    },
    {
        thumbail: thumb3,
        channelLogo: channel3,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, incidunt!',
        subtitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, earum.',
        viewsTimeText: '8.8k watching'
    },
    {
        thumbail: thumb4,
        channelLogo: channel4,
        title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, iusto!',
        subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis aut impedit quibusdam?',
        viewsTimeText: '8.1M Views . 3 months ago'
    },
    {
        thumbail: thumb5,
        channelLogo: channel5,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum, commodi.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        viewsTimeText: '2,7M views . 3 days ago'
    },
    {
        thumbail: thumb6,
        channelLogo: channel6,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, esse.',
        subtitle: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ratione!',
        viewsTimeText: '4.9M view . 5 years ago'
    },
    {
        thumbail: thumb7,
        channelLogo: channel7,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, veniam.',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, at!',
        viewsTimeText:'2,7M views . 3 days ago'
    },
    {
        thumbail: thumb8,
        channelLogo: channel8,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, minus.',
        subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, consequuntur.',
        viewsTimeText: '8.1M Views . 3 months ago'
    },
    {
        thumbail: thum1,
        channelLogo: channel9,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, minus.',
        subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, consequuntur.',
        viewsTimeText: '8.8k watching'
    },
    {
        thumbail:thumb2,
        channelLogo: channel10,
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, minus.',
        subtitle: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, consequuntur.',
        viewsTimeText: '8.8k watching'
    },
]

export const VideosList = () => {
  return (
    <Container>
        {
            videosListData.map((e,i)=>(
                <CardVideo key={i}>
                    <ThumbailImage src={e.thumbail} />
                    <div style={{position:'relative'}}>
                    <ChannelLogoImage src={e.channelLogo} />
                    </div>
                    <Title>{e.title.substring(0,58) + '...'}</Title>
                    <Subtitle>{e.subtitle.substring(0,30) + '...'}</Subtitle>
                    <Subtitle style={{ marginTop:'5px' }}>{ e.viewsTimeText }</Subtitle>
                </CardVideo>
            ))
        }
    </Container>
  )
}

const Container = styled.div`
    width: calc(100% - 40px);
    margin-left: 20px;
    margin-top: 30px;
    display: grid;
    height: calc(64vh - 40px);
    grid-row-gap: 25px;
    grid-column-gap: 20px;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-auto-rows: 1fr;
    @media (max-width: 1366px) {
        grid-template-columns: repeat(4,1fr);
    }
    @media (max-width: 1024px) {
        grid-template-columns: repeat(3,1fr);
    }
`
const CardVideo = styled.div`
    width: 100%;
    height: 95%;
    background-color: #fff;
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 10px;
    box-sizing: border-box;
    transition: all .3s ease-in-out;
    position: relative;
    &:hover{
        transform: translateY(-3px);
        box-shadow: -1px 9px 16px 0px #00000039;
    }
`

const ThumbailImage = styled.img`
    width: 100%;
    border-radius: 20px;
`

const ChannelLogoImage = styled.img`
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 20px;
    position: absolute;
    bottom:-15px;
    left: 5px;
    
`
const Title=styled.p`
    margin-top: 15px;
    font-size: 15px;
    font-weight: bold;
    width: 100%;
`
const Subtitle = styled.p`
    font-size: 13px;
    color: gray
`