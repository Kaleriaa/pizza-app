import qs from 'qs'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { setParamsUrl } from '../../redux/slices/filter-slice'
import { fetchPizzas } from '../../redux/slices/pizza-slice'
import { Container } from '../container'
import { MenuItem } from '../menu-item'
import { Skeleton } from './skeleton'
import { Pagination } from '../pagination'
import { Error } from './error-block'

const PAGE_SIZE = 6

export const MenuList = () => {
    // const isMount = React.useRef(false)
    // const isSearch = React.useRef(false)
    // const navigate = useNavigate()
    const dispatch = useDispatch()

    const { menu, status } = useSelector((state) => state.pizzas)
    const { categoryId, sort, currentPage, search } = useSelector(
        (state) => state.filters,
    )

    const searchUrl = search ? `&q=${search}` : ''
    const categoryUrl = categoryId ? `&category=${categoryId}` : ''
    const sortUrl = sort.includes('-')
        ? `_sort=${sort.slice(1)}&_order=desc`
        : `_sort=${sort}`

    // React.useEffect(() => {
    //     if (isMount.current) {
    //         const queryString = qs.stringify(
    //             {
    //                 _sort: sort,
    //                 _category: category,
    //                 _page: currentPage,
    //             },
    //             { addQueryPrefix: true },
    //         )
    //         navigate(`${queryString}`)
    //     }
    //     isMount.current = true
    // }, [category, sort, searchValue, currentPage])
    // React.useEffect(() => {
    //     const params = qs.parse(window.location.search.slice(1))

    //     if (params) {
    //         dispatch(setParamsUrl(params))
    //         isSearch.current = true
    //     }
    // }, [])

    React.useEffect(() => {
        dispatch(fetchPizzas({ searchUrl, categoryUrl, sortUrl, currentPage }))
        window.scrollTo(0, 0)
    }, [categoryId, sort, search, currentPage])

    const skeletons = [...new Array(PAGE_SIZE)].map((_, i) => {
        return (
            <SkeletonBlock key={i}>
                <Skeleton />
            </SkeletonBlock>
        )
    })
    return (
        <Container>
            <Title>Все пиццы</Title>
            {status === 'error' ? (
                <Error />
            ) : (
                <List>
                    {status === 'loading'
                        ? skeletons
                        : menu.map((pizza) => (
                              <MenuItem key={pizza.id} menu={pizza} />
                          ))}
                </List>
            )}
            <Pagination pagesCount={2} currentPage={currentPage} />
        </Container>
    )
}
const List = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 15px;
    @media (max-width: 1440px) {
        grid-template-columns: repeat(3, 1fr);
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
