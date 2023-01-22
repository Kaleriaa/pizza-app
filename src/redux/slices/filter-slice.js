import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sort: 'rating',
    currentPage: 0,
    search: '',
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
        searched: (state, actions) => {
            state.search = actions.payload
        },
        setCurrentPage: (state, actions) => {
            state.currentPage = actions.payload
        },
        setParamsUrl: (state, actions) => {
            state.categoryId = Number(actions.payload._category)
            state.currentPage = Number(actions.payload._page)
            state.sort = actions.payload._sort
        },
        resetAll: (state) => {
            state = initialState
            return state
        },
    },
})

export const {
    filtered,
    sorted,
    searched,
    setCurrentPage,
    setParamsUrl,
    resetAll,
} = filterSlice.actions
export default filterSlice.reducer
