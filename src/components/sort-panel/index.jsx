import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { sorted } from '../../redux/slices/filter-slice'
import { COLORS } from '../../styles/color'

const sortTypes = [
    { value: 'rating', content: 'популярности' },
    { value: 'price', content: 'возрастанию цены 🠑' },
    { value: '-price', content: 'убыванию цены 🠓' },
    { value: 'title', content: 'алфавиту 🠑' },
    { value: '-title', content: 'алфавиту 🠓' },
]
export const SortPanel = () => {
    const dispatch = useDispatch()
    return (
        <Sorts>
            <Label>Сортировка по</Label>
            <Selection onChange={(e) => dispatch(sorted(e.target.value))}>
                {sortTypes.map((type) => {
                    return (
                        <Option key={type.value} value={type.value}>
                            {type.content}
                        </Option>
                    )
                })}
            </Selection>
        </Sorts>
    )
}
const Sorts = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Label = styled.span`
    font-weight: 500;
    @media (max-width: 1138px) {
        display: none;
    }
`
const Selection = styled.select`
    border: none;
    width: fit-content;
    margin-left: 4px;
    cursor: pointer;
    font-size: 16px;
    color: var(${COLORS.orange});
    outline: none;
`
const Option = styled.option`
    color: black;
    :checked {
        color: var(${COLORS.orange});
    }
`
