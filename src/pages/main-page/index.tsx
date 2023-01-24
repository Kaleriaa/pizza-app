import React from 'react'
import { Panels } from '../../components/panels'
import { MenuList } from '../../components/menu-list'

export const MainPage: React.FC = () => {
    return (
        <div>
            <Panels />
            <MenuList />
        </div>
    )
}
