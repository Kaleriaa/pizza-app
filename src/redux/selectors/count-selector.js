export const countSelector = (id) => (state) => {
    const findId = state.cart.items.filter((it) => it.id === id)
    return findId?.reduce((count, el) => {
        return (count += el.count)
    }, 0)
}

export const totalCountSelector = () => (state) =>
    state.cart.items.reduce((count, el) => {
        return (count += el.count)
    }, 0)
