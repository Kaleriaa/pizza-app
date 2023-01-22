import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from '../../pages/not-found'
import { CartPage } from '../../pages/cart-page'
import { MainPage } from '../../pages/main-page'
import { FullPizzaPage } from '../full-pizza'
import { MainLayout } from '../../layout/main-layout'

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path="" element={<MainPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="pizza/:id" element={<FullPizzaPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}
