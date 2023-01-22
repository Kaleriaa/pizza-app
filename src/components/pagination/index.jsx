import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setCurrentPage } from '../../redux/slices/filter-slice'
import { COLORS } from '../../styles/color'

export const Pagination = ({ pagesCount, currentPage }) => {
    const dispatch = useDispatch()

    const onPrev = () => {
        currentPage && dispatch(setCurrentPage(currentPage - 1))
    }
    const onNext = () => {
        currentPage !== pagesCount - 1 &&
            dispatch(setCurrentPage(currentPage + 1))
    }

    return (
        <PaginationPanel>
            <li onClick={onPrev}>&lt;</li>
            {[...Array(pagesCount)].map((_, index) => (
                <li
                    key={index}
                    className={currentPage === index ? 'selected' : ''}
                    onClick={() => dispatch(setCurrentPage(index))}>
                    {index + 1}
                </li>
            ))}
            <li onClick={onNext}>&gt;</li>
        </PaginationPanel>
    )
}
const PaginationPanel = styled.ul`
    margin: 0;
    display: inline-flex;
    gap: 10px;
    li {
        cursor: pointer;
        text-align: center;
        line-height: 42px;
        font-size: 18px;
        list-style: none;
        height: 45px;
        width: 45px;
        border-radius: 50%;
        color: var(${COLORS.orange});
        border: 1px solid var(${COLORS.orange});
        transition: all 0.2s;
        :hover {
            background-color: var(${COLORS.orange});
            color: #fff;
        }
    }
    .selected {
        background-color: var(${COLORS.orange});
        color: #fff;
    }
`
