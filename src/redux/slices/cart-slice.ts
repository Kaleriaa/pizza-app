import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemType, CartSliceType } from './types'

const initialState: CartSliceType = {
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, actions: PayloadAction<CartItemType>) {
            state.totalPrice += actions.payload.price

            const newItem = state.items.find((it) => {
                return (
                    it.id === actions.payload.id &&
                    it.type === actions.payload.type &&
                    it.size === actions.payload.size
                )
            })
            newItem
                ? newItem.count++
                : state.items.push({
                      ...actions.payload,
                      count: 1,
                  })
        },
        removeItem(state, actions: PayloadAction<CartItemType>) {
            let idx = 0
            const newItem = state.items.find((it, i) => {
                idx = i
                return (
                    it.id === actions.payload.id &&
                    it.type === actions.payload.type &&
                    it.size === actions.payload.size
                )
            })
            if (newItem && newItem.count) {
                newItem.count--
            } else {
                state.items = [
                    ...state.items.slice(0, idx),
                    ...state.items.slice(idx + 1, state.items.length),
                ]
            }
        },
        removeAllItems(state, actions: PayloadAction<CartItemType>) {
            const index = state.items.findIndex((it) => {
                return (
                    it.id === actions.payload.id &&
                    it.type === actions.payload.type &&
                    it.size === actions.payload.size
                )
            })
            state.items = [
                ...state.items.slice(0, index),
                ...state.items.slice(index + 1, state.items.length),
            ]
        },
        clearCart(state) {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const { addItem, removeItem, clearCart, removeAllItems } =
    cartSlice.actions
export default cartSlice.reducer
