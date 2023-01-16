import React from 'react'
import styled from 'styled-components'
import { Container } from '../container'
import { COLORS } from '../../styles/color'
import Pizza from '../../assets/images/test.jpeg'
import { Link } from 'react-router-dom'

export const CartList = () => {
    return (
        <List>
            <Wrapper>
                <Title>
                    <i className="fa fa-shopping-cart" aria-hidden="true" />{' '}
                    Корзина
                </Title>
                <Trash className="btn btn-trash btn-sm">
                    <i className="fa fa-trash" /> Очистить корзину
                </Trash>
            </Wrapper>
            <Block>
                <img src={Pizza} width={65} height={65} />
                <Content>
                    Сырный цыпленок
                    <br />
                    <span>тонкое тесто, 26 см</span>
                </Content>
                <div>
                    <CountButton>-</CountButton>
                    <Count>2</Count>
                    <CountButton>+</CountButton>
                </div>
                <Content>500 ₽</Content>
                <Close>&times;</Close>
            </Block>
            <Wrapper>
                <Total>
                    Всего пицц: <strong>3 шт</strong>
                </Total>
                <Total>
                    Сумма заказа: <strong>500 ₽</strong>
                </Total>
            </Wrapper>
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
        </List>
    )
}
const List = styled(Container)`
    width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 980px) {
        width: 80%;
    }
`
const Trash = styled.button`
    background-color: #fff;
    color: var(${COLORS.grey.dark});
    transition: all 0.6s;
    :hover {
        color: #dd4c36;
    }
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`
const Title = styled.h2`
    font-weight: 500;
    font-size: 20px;
    margin-bottom: 25px;
`
const Content = styled.span`
    font-weight: 600;
    span {
        color: var(${COLORS.grey.dark});
        font-weight: 400;
        font-size: 14px;
    }
`
const Block = styled(Wrapper)`
    padding: 15px 0;
    border-top: 1.5px solid var(${COLORS.grey.light});
    :first-child {
        margin-top: 10px;
    }
    @media (max-width: 680px) {
        img {
            width: 55px;
            height: 55px;
        }
    }
    @media (max-width: 497px) {
        img {
            display: none;
        }
    }
    @media (max-width: 530px) {
        overflow: auto;
        width: 100%;
    }
`
const CountButton = styled.button`
    border-radius: 50%;
    font-size: 18px;
    width: 30px;
    color: var(${COLORS.secondaryColor});
    height: 30px;
    border: 2px solid var(${COLORS.secondaryColor});
    transition: all 0.5s;
    :hover {
        background-color: var(${COLORS.secondaryColor});
        color: #fff;
    }
    @media (max-width: 680px) {
        width: 25px;
        height: 25px;
        font-size: 16px;
    }
`
const Count = styled.span`
    margin: 0 10px;
`
const Close = styled(CountButton)`
    color: var(${COLORS.grey.dark});
    background-color: #fff;
    border-color: var(${COLORS.grey.light});
    :hover {
        background-color: var(${COLORS.grey.light});
        color: var(${COLORS.grey.dark});
    }
`
const Total = styled.span`
    font-weight: normal;
    font-size: 18px;
    margin-top: 38px;
    :last-child {
        strong {
            color: var(${COLORS.orange});
        }
    }
`
const CartButton = styled.button`
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
