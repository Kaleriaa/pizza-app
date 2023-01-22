import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../../styles/color'

export const Error = () => {
    return (
        <ErrorBlock>
            <Title>Произошла ошибка &#128531;</Title>
            <Message>
                Не удалось загрузить пиццы. Попробуйте зайти позже
            </Message>
        </ErrorBlock>
    )
}
const ErrorBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`
const Message = styled.span`
    color: var(${COLORS.grey.dark});
    text-align: center;
`
const Title = styled.h2`
    text-align: center;
`
