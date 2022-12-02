import React, { useState } from 'react'
import styled from 'styled-components'

const chipsData: string[] = [
    'All', 'Stronghold Kingdoms', 'Beast', 'Rapping', 'Inter', 'JavaScript', 'Live', 'Mixes', 'Soul Music'
]

interface ChipSelectedProps {
    selected?: boolean;
}

export const ChipList = () => {

    const [currentSelected, setCurrentSelected] = useState<string>('All')

    const onClickChip = (value: string) => {
        setCurrentSelected(value)
    }
    return (
        <Container>
            {
                chipsData.map(e => (
                    <ChipBasic
                        key={e}
                        onClick={() => onClickChip(e)}
                        selected={currentSelected === e}
                    >
                        {e}
                    </ChipBasic>
                ))
            }
        </Container>
    )
}

const Container = styled.div`
    width: calc(100% - 40px);
    height: 35px;
    margin-left: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    display: flex;
`
const ChipBasic = styled.div<ChipSelectedProps>`
    margin-right: 10px;
    user-select: none;
    border-radius: 10px;
    background-color:${({ selected }) => selected ? '#2c2c2c' : '#fff'};
    color:${({ selected }) => selected ? '#fff' : '#2c2c2c'};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    cursor: pointer;
    &:hover{
        background-color: ${({ selected }) => selected ? '#2e2e2e' : '#eeeeee'};
    }
`