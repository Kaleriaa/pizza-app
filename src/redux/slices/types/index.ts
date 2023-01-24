import { Pizza } from '../../../types/pizza'

export interface FilterSliceType {
    categoryId: number
    sort: string
    currentPage: number
    search: string
}

export type CartItemType = {
    id: string
    title?: string
    imageUrl?: string
    size: number
    type: string
    count: number
    price: number
}

export interface CartSliceType {
    items: CartItemType[]
    totalPrice: number
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

export interface PizzaSliceType {
    menu: Pizza[]
    status: Status
}
