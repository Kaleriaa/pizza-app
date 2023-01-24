import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
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

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
