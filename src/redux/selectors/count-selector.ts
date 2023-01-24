import { RootState } from '../store'

export const countSelector = (id: string) => (state: RootState) => {
    const findId = state.cart.items.filter((it) => it.id === id)
    return findId?.reduce((count, el) => {
        return (count += el.count)
    }, 0)
}

export const totalCountSelector = () => (state: RootState) =>
    state.cart.items.reduce((count, el) => {
        return (count += el.count)
    }, 0)
