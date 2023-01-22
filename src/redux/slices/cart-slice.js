import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, actions) {
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
        removeItem(state, actions) {},
        clearCart(state) {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer
