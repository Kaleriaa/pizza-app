import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Cart from '../../assets/images/shopping-store.png'
import { COLORS } from '../../styles/color'

export const EmptyCart = () => {
    return (
        <Wrapper>
            <img src={Cart} alt="empty cart" width={220} height={220} />
            <h2 style={{ marginTop: '20px' }}>Ваша корзина пуста</h2>
            <MenuLink to="/">Перейти в меню</MenuLink>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const MenuLink = styled(Link)`
    display: block;
    cursor: pointer;
    width: fit-content;
    height: 40px;
    background-color: #fff;
    color: var(${COLORS.orange});
    padding: 10px;
    line-height: 13px;
    border-radius: 30px;
    border: 2px solid var(${COLORS.orange});
    transition: all 0.3s;
    :hover {
        color: #fff;
        background-color: var(${COLORS.orange});
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3s);
    }
`
