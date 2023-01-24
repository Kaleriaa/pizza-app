import React from 'react'
import styled from 'styled-components'
import { Container } from '../../components/container'
import { COLORS } from '../../styles/color'

export const NotFoundPage: React.FC = () => {
    return (
        <NotFoundBlock>
            <Emoji>
                <i className="fa fa-frown-o" aria-hidden="true" />
            </Emoji>
            <h1>Страница не найдена</h1>
            <Description>
                К сожалению, данной страницы нет на нашем сайте...
            </Description>
        </NotFoundBlock>
    )
}
const NotFoundBlock = styled(Container)`
    max-width: 650px;
    text-align: center;
`
const Emoji = styled.span`
    color: var(${COLORS.orange});
    font-size: 45px;
`
const Description = styled.div`
    color: var(${COLORS.grey.dark});
    font-size: 18px;
    margin-top: 10px;
`
