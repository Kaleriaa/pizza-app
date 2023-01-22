import axios from 'axios'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from '../../styles/color'
import { Container } from '../container'

export const FullPizzaPage = () => {
    const { id } = useParams()
    const [pizzaItem, setPizzaItem] = React.useState()
    const navigate = useNavigate()
    //TODO: redirect to main page
    React.useEffect(() => {
        axios
            .get(`http://localhost:3000/pizza/${id}`)
            .then((res) => setPizzaItem(res.data))
            .catch((e) => {
                console.error(e)
                navigate('/')
            })
    }, [])

    {
        return pizzaItem ? (
            <FullInfo>
                <img src={pizzaItem.imageUrl} width={350} />
                <div>
                    <h2>{pizzaItem.title}</h2>
                    <Content>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ullam, incidunt voluptate accusamus rem ut facilis
                        quod ab repudiandae, corrupti architecto exercitationem.
                        Dolores consequuntur ad nihil nulla! Ipsum corporis
                        quisquam dicta.
                        <br />
                    </Content>
                    <Info>от {pizzaItem.price} ₽</Info>
                </div>
            </FullInfo>
        ) : (
            <h2>Загрузка...</h2>
        )
    }
}
const FullInfo = styled(Container)`
    width: 80%;
    margin-top: 70px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Content = styled.span`
    color: var(${COLORS.grey.dark});
`
const Info = styled.span`
    display: block;
    margin-top: 30px;
    font-weight: 700;
    font-size: 20px;
`
