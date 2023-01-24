import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { PizzaSliceType, Status } from './types'
import { Pizza } from '../../types/pizza'

export const fetchPizzas = createAsyncThunk<Pizza[], Record<string, string>>(
    'pizzas/fetchPizzas',
    async (params) => {
        const { searchUrl, categoryUrl, sortUrl, currentPage } = params
        const { data } = await axios.get<Pizza[]>(
            `http://localhost:3000/pizza?${sortUrl}&_page=${
                currentPage + 1
            }&_limit=${6}${categoryUrl}${searchUrl}`,
        )
        return data
    },
)

const initialState: PizzaSliceType = {
    menu: [],
    status: Status.LOADING,
}

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = Status.LOADING
        }),
            builder.addCase(
                fetchPizzas.fulfilled,
                (state, action: PayloadAction<Pizza[]>) => {
                    state.menu = action.payload
                    state.status = Status.SUCCESS
                },
            ),
            builder.addCase(fetchPizzas.rejected, (state) => {
                state.menu = []
                state.status = Status.ERROR
            })
    },
})

export default pizzaSlice.reducer
