export interface Product {
    id: number,
    name: string,
    description: string,
    owner: string,
    price: number
}

export const INITIAL_STATE_PRODUCT = {
    id: 0,
    name: "",
    description: "",
    owner: "",
    price: 0
}