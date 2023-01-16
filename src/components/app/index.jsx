import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { NotFoundPage } from '../../pages/not-found'
import { AppHeader } from '../app-header'
import { CartPage } from '../../pages/cart-page'
import { MainPage } from '../../pages/main-page'

export const SearchContext = React.createContext()
export const App = () => {
    const [searchValue, setSearchValue] = React.useState('')
    return (
        <MainBlock>
            <SearchContext.Provider value={{ searchValue, setSearchValue }}>
                <AppHeader />
                <Routes>
                    <Route index path="/" element={<MainPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </SearchContext.Provider>
        </MainBlock>
    )
}
const MainBlock = styled.div`
    margin: 30px auto;
    width: calc(100vw - 150px);
    height: fit-content;
    max-width: 1400px;
    background-color: #fff;
    border-radius: 5px;
    padding: 45px 0;
    @media (max-width: 645px) {
        width: calc(100vw - 20px);
    }
`
