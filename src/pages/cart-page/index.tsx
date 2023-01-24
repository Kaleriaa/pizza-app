import React from 'react'
import { useSelector } from 'react-redux'
import { EmptyCart, CartList } from '../../components/cart'
import { RootState } from '../../redux/store'

export const CartPage: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items)
    return cartItems.length ? <CartList /> : <EmptyCart />
}
