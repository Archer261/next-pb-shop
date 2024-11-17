import { sanityFetch } from '@/sanity/lib/fetch'
import { getProducts } from '@/sanity/lib/queries'
import { SanityDocument } from '@sanity/client';
import { client } from '@/sanity/lib/client'
import ProductCard from '../components/ProductCard'

import { Product } from '@/types/product'

const page = async () => {

    const products = await client.fetch(getProducts)

    const numberOfProducts = products.length === 1 ? '1 Product' : `${products.length} Products`
    return (
        <div className="container mx-auto px-4 py-2">
            <p>{numberOfProducts}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6">
                {products.map((product: Product) => (
                    <div className="col-span-1" key={product._id}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default page