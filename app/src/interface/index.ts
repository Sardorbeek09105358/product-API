export interface ProductType{
    id: number
    title: string
    price: string
    description: string
    category: string
    quantity: number
    rating: {rate: number, cate: number}
    image: string
}