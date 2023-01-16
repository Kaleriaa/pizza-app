import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menu: [],
}

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {
        menuLoaded: (state, actions) => {
            state.menu = actions.payload
        },
    },
})

export const { menuLoaded } = pizzaSlice.actions
export default pizzaSlice.reducer
