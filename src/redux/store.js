import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart-slice'
import filterReducer from './slices/filter-slice'
import pizzaReducer from './slices/pizza-slice'

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        pizzas: pizzaReducer,
        cart: cartSlice,
    },
})
