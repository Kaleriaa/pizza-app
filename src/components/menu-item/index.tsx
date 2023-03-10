import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addItem } from '../../redux/slices/cart-slice'
import { countSelector } from '../../redux/selectors/count-selector'
import { COLORS } from '../../styles/color'
import { Pizza } from '../../types/pizza'
import { ItemLabel } from './menu-item-label'

const typesValue: string[] = ['тонкое', 'классическое']
const coeffValue: number[] = [1, 1.2, 2]

export const MenuItem: React.FC<Pizza> = (props) => {
    const { id, title, imageUrl, price, types, sizes } = props
    const [checkedDough, setCheckedDough] = React.useState<number>(0)
    const [checkedSize, setCheckedSize] = React.useState<number>(0)
    const [coeffPrice, setCoeffPrice] = React.useState<number>(price)
    const currentItem = useSelector(countSelector(id))

    const dispatch = useDispatch()

    const onAddToCart = () => {
        const item = {
            id,
            type: typesValue[checkedDough],
            size: sizes[checkedSize],
            price: coeffPrice,
            title,
            imageUrl,
        }
        dispatch(addItem(item))
    }

    return (
        <WrapperGeneral key={id}>
            <Card>
                <ItemLabel {...{ id, title, imageUrl }} />
                <SelectorBlock>
                    <Wrapper>
                        {types.map((type, i) => {
                            return (
                                <RadioBlock key={i}>
                                    <input
                                        id={`${id}-dough-${i}`}
                                        name={id}
                                        value={type}
                                        type="radio"
                                        onClick={() => setCheckedDough(i)}
                                        defaultChecked={checkedDough === i}
                                    />
                                    <Label htmlFor={`${id}-dough-${i}`}>
                                        {typesValue[type]}
                                    </Label>
                                </RadioBlock>
                            )
                        })}
                    </Wrapper>
                    <Wrapper>
                        {sizes.map((item, i) => {
                            return (
                                <RadioBlock key={item}>
                                    <input
                                        id={`${id}-size-${i}`}
                                        name={id + id}
                                        value={item}
                                        type="radio"
                                        onClick={() => {
                                            setCheckedSize(i)
                                            setCoeffPrice(
                                                Math.ceil(
                                                    price * coeffValue[i],
                                                ),
                                            )
                                        }}
                                        defaultChecked={checkedSize === i}
                                    />
                                    <Label htmlFor={`${id}-size-${i}`}>
                                        {item} см
                                    </Label>
                                </RadioBlock>
                            )
                        })}
                    </Wrapper>
                </SelectorBlock>
                <WrapperBottom>
                    <Price>от {coeffPrice} ₽</Price>
                    <AddButton onClick={onAddToCart}>
                        + Добавить{' '}
                        {currentItem ? <Amount>{currentItem}</Amount> : null}
                    </AddButton>
                </WrapperBottom>
            </Card>
        </WrapperGeneral>
    )
}

const Card = styled.div`
    width: 280px;
    text-align: center;
    margin-bottom: 65px;
    height: fit-content;
`
const SelectorBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    width: 100%;
    height: 100px;
    border-radius: 8px;
    padding: 8px;
    margin-top: 15px;
    background-color: var(${COLORS.grey.light});
`
const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    :first-child {
        margin-bottom: 15px;
    }
`
const WrapperGeneral = styled(Wrapper)`
    :first-child {
        margin-bottom: 0;
    }
`
const WrapperBottom = styled(Wrapper)`
    margin-top: 15px;
    justify-content: space-between;
`
const Label = styled.label`
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
    padding: 0px 25px;
    line-height: 34px;
    background-color: var(${COLORS.grey.light});
    border-radius: 6px;
    user-select: none;
`
const RadioBlock = styled.div`
    display: inline-block;
    input[type='radio'] {
        display: none;
        transition: all 0.3s;
    }
    input[type='radio']:checked + label {
        background-color: #fff;
        box-shadow: 0px 0px 1px rgba(52, 52, 52, 0.2);
    }
`
const Price = styled.span`
    margin-left: 8px;
    font-size: 17px;
    font-weight: 600;
    letter-spacing: 1%;
`
const AddButton = styled.button`
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    padding: 10px 26px;
    width: fit-content;
    height: 40px;
    border-color: var(${COLORS.secondaryColor});
    color: var(${COLORS.secondaryColor});
    background-color: #fff;
    outline: none;
    :hover {
        border-color: var(${COLORS.secondaryColor});
        color: #fff;
        background-color: var(${COLORS.secondaryColor});
        span {
            color: var(${COLORS.secondaryColor});
            background-color: #fff;
        }
    }
    :focus {
        outline: none;
    }
`
const Amount = styled.span`
    display: flex;
    padding: 2px;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
    border-radius: 50%;
    background-color: var(${COLORS.secondaryColor});
    text-align: center;
    color: #fff;
    width: 20px;
    height: 20px;
    font-size: 14px;
    transition: all 0.3s;
`
