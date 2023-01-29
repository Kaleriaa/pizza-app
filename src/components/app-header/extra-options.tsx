import React from 'react'
import { SearchPanel } from '../search-panel'
import CartIcon from '../../assets/images/shopping-cart.png'
import { totalCountSelector } from '../../redux/selectors/count-selector'
import { RootState } from '../../redux/store'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { COLORS } from '../../styles/color'

export const ExtraOptions: React.FC = () => {
    const totalPrice = useSelector((state: RootState) => state.cart.totalPrice)
    const totalCount = useSelector(totalCountSelector())
    const { pathname } = useLocation()
    return (
        <>
            {pathname !== '/cart' ? <SearchPanel /> : null}
            <Nav>
                {pathname !== '/cart' ? (
                    <Link to="/cart">
                        <CartBlock>
                            <Content>{totalPrice} ₽</Content>
                            <img src={CartIcon} width={20} height={20} />
                            <Content>{totalCount}</Content>
                        </CartBlock>
                    </Link>
                ) : null}
            </Nav>
        </>
    )
}

const Nav = styled.div`
    gap: 5px;
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    height: 50px;
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
