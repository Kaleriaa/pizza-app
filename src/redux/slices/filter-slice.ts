import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterSliceType } from './types'

const initialState: FilterSliceType = {
    categoryId: 0,
    sort: 'rating',
    currentPage: 0,
    search: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilterPizza: (state, actions: PayloadAction<number>) => {
            state.categoryId = actions.payload
        },
        setSortPizza: (state, actions: PayloadAction<string>) => {
            state.sort = actions.payload
        },
        setSearch: (state, actions: PayloadAction<string>) => {
            state.search = actions.payload
        },
        setCurrentPage: (state, actions: PayloadAction<number>) => {
            state.currentPage = actions.payload
        },
        setParamsUrl: (state, actions: PayloadAction<FilterSliceType>) => {
            state.categoryId = Number(actions.payload.categoryId)
            state.currentPage = Number(actions.payload.currentPage)
            state.sort = actions.payload.sort
        },
        resetAll: (state) => {
            state = initialState
            return state
        },
    },
})

export const {
    setFilterPizza,
    setSortPizza,
    setSearch,
    setCurrentPage,
    setParamsUrl,
    resetAll,
} = filterSlice.actions
export default filterSlice.reducer
