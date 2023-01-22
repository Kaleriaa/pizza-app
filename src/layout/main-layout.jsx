import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { AppHeader } from '../components/app-header'

export const MainLayout = () => {
    return (
        <MainBlock>
            <AppHeader />
            <Outlet />
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
