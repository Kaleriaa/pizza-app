import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { menuLoaded } from '../../redux/slices/pizza-slice'
import { SearchContext } from '../app'
import { Container } from '../container'
import { MenuItem } from '../menu-item'
import { Skeleton } from '../menu-item/skeleton'

export const MenuList = () => {
    const pizzas = useSelector((state) => state.pizzas.menu)
    const category = useSelector((state) => state.filters.categoryId)
    const sort = useSelector((state) => state.filters.sort)
    const { searchValue } = React.useContext(SearchContext)
    const dispatch = useDispatch()
    const searchUrl = searchValue ? `&q=${searchValue}` : ''
    const categoryUrl = category ? `&category=${category}` : ''
    const sortUrl = sort.includes('-')
        ? `_sort=${sort.slice(1)}&_order=desc`
        : `_sort=${sort}`
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        setIsLoading(true)
        axios
            .get(
                `http://localhost:3000/pizza?${sortUrl}${categoryUrl}${searchUrl}`,
            )
            .then((response) => {
                dispatch(menuLoaded(response.data))
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [category, sort, searchValue])
    return (
        <Container>
            <Title>Все пиццы</Title>
            <List frame={pizzas.length <= 3 ? 1 : 2}>
                {isLoading ? (
                    [...new Array(6)].map((_, i) => {
                        return (
                            <SkeletonBlock key={i}>
                                <Skeleton />
                            </SkeletonBlock>
                        )
                    })
                ) : (
                    <MenuItem menu={pizzas} />
                )}
            </List>
        </Container>
    )
}
const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 15px;
    @media (max-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(${(props) => props.frame}, 1fr);
    }
    @media (min-width: 2015px) {
        grid-template-columns: repeat(5, 1fr);
    }
    @media (min-width: 2180px) {
        grid-template-columns: repeat(6, 1fr);
    }
    @media (max-width: 1124px) {
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 55px;
    }
    @media (max-width: 804px) {
        grid-template-columns: repeat(1, 1fr);
        grid-row-gap: 5px;
    }
`
const SkeletonBlock = styled.div`
    display: flex;
    justify-content: center;
`
const Title = styled.h2`
    margin-bottom: 45px;
`
