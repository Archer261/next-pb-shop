export interface Product {
    [x: string]: any
    _id: string
    name: string
    description: string
    price: number
    category: string
    image: string
    brand: string
    inStock: boolean
    specifications?: {
        weight?: string
        dimensions?: string
        material?: string
    }
    createdAt: Date
    updatedAt: Date
}