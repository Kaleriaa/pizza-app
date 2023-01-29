import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../../styles/color'
import { Wrapper } from './cart-list'

export const CartButtons: React.FC = React.memo(() => {
    return (
        <Wrapper>
            <Link to="/">
                <CartButton color={COLORS.grey.dark}>
                    &lt; Вернуться назад
                </CartButton>
            </Link>
            <CartButton bg={COLORS.orange} border={COLORS.orange}>
                Оплатить
            </CartButton>
        </Wrapper>
    )
})

const CartButton = styled('button')<{ bg?: string; border?: string }>`
    width: fit-content;
    margin-top: 30px;
    padding: 10px 18px;
    height: 45px;
    border-radius: 30px;
    transition: all 0.5s;
    background-color: var(${(props) => props.bg || COLORS.white});
    color: var(${(props) => props.color || COLORS.white});
    border: 2px solid var(${(props) => props.border || props.color});
    :hover {
        background-color: var(${(props) => props.color || COLORS.white});
        color: var(${(props) => props.bg || COLORS.white});
    }
`
