import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { filtered } from '../../redux/slices/filter-slice'
import { COLORS } from '../../styles/color'
import { filters } from './filters'

export const FilterPanel = () => {
    const filtersState = useSelector((state) => state.filters.categoryId)
    const dispatch = useDispatch()
    return (
        <Filters>
            {filters.map(({ value, text, category }, i) => {
                return (
                    <Wrapper key={value}>
                        <input
                            id={`filter-${i}`}
                            type="radio"
                            name="filter"
                            onClick={() => dispatch(filtered(category))}
                            defaultChecked={filtersState === i}
                            value={value}
                        />
                        <Label htmlFor={`filter-${i}`}>{text}</Label>
                    </Wrapper>
                )
            })}
        </Filters>
    )
}
const Filters = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 14px;
    @media (max-width: 1138px) {
        overflow: auto;
        width: 70%;
    }
    @media (max-width: 804px) {
        width: 100%;
    }
`
const Wrapper = styled.div`
    display: inline-block;
    input[type='radio'] {
        display: none;
        transition: all 0.3s;
    }
    input[type='radio']:checked + label {
        border-radius: 30px;
        background-color: #000;
        color: var(${COLORS.grey.light});
        box-shadow: none;
        border: 2px solid black;
    }
`
const Label = styled.label`
    background-color: var(${COLORS.grey.light});
    border: 2px solid var(${COLORS.grey.light});
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
    padding: 0px 25px;
    line-height: 34px;
    border-radius: 30px;
    user-select: none;
`
