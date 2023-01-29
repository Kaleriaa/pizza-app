import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { clearCart } from '../../redux/slices/cart-slice'
import { COLORS } from '../../styles/color'
import { Wrapper } from './cart-list'

export const CartLabels: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const onClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <Wrapper>
            <Title>
                <i className="fa fa-shopping-cart" aria-hidden="true" /> Корзина
            </Title>
            <Trash onClick={onClearCart} className="btn btn-trash btn-sm">
                <i className="fa fa-trash" /> Очистить корзину
            </Trash>
        </Wrapper>
    )
})

const Title = styled.h2`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 25px;
`
const Trash = styled.button`
    background-color: #fff;
    color: var(${COLORS.grey.dark});
    transition: all 0.6s;
    :hover {
        color: #dd4c36;
    }
`
