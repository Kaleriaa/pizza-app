import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: 'rating',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filtered: (state, actions) => {
            state.categoryId = actions.payload
        },
        sorted: (state, actions) => {
            state.sort = actions.payload
        },
    },
})

export const { filtered, sorted } = filterSlice.actions
export default filterSlice.reducer
