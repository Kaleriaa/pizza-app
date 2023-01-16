import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Logo from '../../assets/images/3d.png'
import CartIcon from '../../assets/images/shopping-cart.png'
import { COLORS } from '../../styles/color'
import { Container } from '../container'
import { SearchPanel } from '../search-panel'

export const AppHeader = () => {
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
            <SearchPanel />
            <Nav>
                <Link to="/cart">
                    <CartBlock>
                        <Content>500₽</Content>
                        <img src={CartIcon} width={20} height={20} />
                        <Content>3</Content>
                    </CartBlock>
                </Link>
            </Nav>
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
const Nav = styled(Wrapper)`
    gap: 5px;
`
const CartBlock = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 135px;
    height: 45px;
    border-radius: 30px;
    background-color: var(${COLORS.secondaryColor});
    box-shadow: 2px 2px 2px 1px rgba(41, 97, 186, 0.2);
    transition: all 0.3s;
    :hover {
        box-shadow: 2px 2px 3px 2px rgba(41, 96, 186, 0.4);
        width: 137px;
    }
`
const Content = styled.span`
    color: #fff;
    :first-child {
        ::after {
            content: '|';
            width: 1px;
            height: 40px;
            color: #fff;
            padding: 0 7px;
        }
    }
    :last-child {
        margin-left: 5px;
    }
`
