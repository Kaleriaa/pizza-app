import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Pizza } from '../../types/pizza'

type ItemLabelProps = Pick<Pizza, 'id' | 'imageUrl' | 'title'>

export const ItemLabel: React.FC<ItemLabelProps> = React.memo(
    ({ id, imageUrl, title }) => {
        return (
            <Link to={`/pizza/${id}`}>
                <img src={imageUrl} width={240} />
                <Title>{title}</Title>
            </Link>
        )
    },
)
const Title = styled.span`
    font-size: 20px;
    color: #000;
    font-weight: 700;
    letter-spacing: 1%;
    margin-bottom: 15px;
`
