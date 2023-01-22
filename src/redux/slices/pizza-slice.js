import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
    'pizzas/fetchPizzas',
    async (params) => {
        const { searchUrl, categoryUrl, sortUrl, currentPage } = params
        const { data } = await axios.get(
            `http://localhost:3000/pizza?${sortUrl}&_page=${
                currentPage + 1
            }&_limit=${6}${categoryUrl}${searchUrl}`,
        )
        return data
    },
)

const initialState = {
    menu: [],
    status: 'loading',
}

export const pizzaSlice = createSlice({
    name: 'pizzas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'loading'
        }),
            builder.addCase(fetchPizzas.fulfilled, (state, action) => {
                state.menu = action.payload
                state.status = 'success'
            }),
            builder.addCase(fetchPizzas.rejected, (state) => {
                state.menu = []
                state.status = 'error'
            })
    },
})

export default pizzaSlice.reducer
