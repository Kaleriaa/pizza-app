import React from 'react'
import styled from 'styled-components'
import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { searched } from '../../redux/slices/filter-slice'

export const SearchPanel = () => {
    const [value, setValue] = React.useState('')
    const inputRef = React.useRef()
    const dispatch = useDispatch()

    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }
    const updateSearchValue = React.useCallback(
        debounce((str) => {
            dispatch(searched(str))
        }, 1000),
        [],
    )
    const onClear = () => {
        dispatch(searched(''))
        setValue('')
        inputRef.current.focus()
    }
    return (
        <Search>
            <SearchIcon>
                <i className="fa fa-search" aria-hidden="true"></i>
            </SearchIcon>
            <SearchInput
                ref={inputRef}
                value={value}
                placeholder="Поиск пицц"
                onChange={onChangeInput}
            />
            {value ? <ClearIcon onClick={onClear}>&times;</ClearIcon> : null}
        </Search>
    )
}
const Search = styled.div`
    position: relative;
`
const SearchInput = styled.input`
    border: 1px solid rgba(0, 0, 0, 0.1);
    height: 40px;
    padding: 10px 30px;
    width: 300px;
    font-size: 14px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    :focus {
        outline: none;
    }
`
const SearchIcon = styled.span`
    position: absolute;
    left: 10px;
    top: 11px;
    opacity: 0.2;
    font-size: 15px;
`
const ClearIcon = styled.span`
    position: absolute;
    right: 10px;
    top: 7px;
    opacity: 0.2;
    font-size: 25px;
    cursor: pointer;
`
