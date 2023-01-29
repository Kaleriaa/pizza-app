import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/3d.png'
import { COLORS } from '../../styles/color'
import { Container } from '../container'
import { ExtraOptions } from './extra-options'

export const AppHeader: React.FC = () => {
    return (
        <Header>
            <Link to="/">
                <Wrapper>
                    <img src={Logo} width={45} height={45} />
                    <LogoBlock>
                        <h1>pizza</h1>
                        <Label>лучшая пицца в мире</Label>
                    </LogoBlock>
                </Wrapper>
            </Link>
            <ExtraOptions />
        </Header>
    )
}

const Header = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 45px;
    @media (max-width: 395px) {
        flex-direction: column;
        gap: 10px;
    }
`
const LogoBlock = styled.div`
    display: flex;
    flex-direction: column;
`
const Wrapper = styled.div`
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    height: 50px;
`
const Label = styled.span`
    color: var(${COLORS.grey.dark});
    font-size: 16px;
    line-height: normal;
`
