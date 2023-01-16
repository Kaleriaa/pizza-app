import React from 'react'
import styled from 'styled-components'
import { Container } from '../container'
import { FilterPanel } from '../filter-panel'
import { SortPanel } from '../sort-panel'

export const Panels = () => {
    return (
        <Container>
            <Wrapper>
                <FilterPanel />
                <SortPanel />
            </Wrapper>
        </Container>
    )
}
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
    @media (max-width: 804px) {
        flex-direction: column-reverse;
        gap: 12px;
    }
`
