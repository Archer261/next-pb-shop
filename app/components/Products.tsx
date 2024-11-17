import { SanityDocument } from '@sanity/client'
// import Link from 'next/link'
import React from 'react'
// import Image from 'next/image'
// import imageUrlBuilder from '@sanity/image-url'
// import { client } from '../../sanity/lib/client' // Assuming you have your Sanity client configured in this file
import ProductCard from './ProductCard'
// import product from '@/sanity/schemaTypes/product'
import { Product } from '@/types/product'

// Initialize the imageUrlBuilder with your Sanity client
// const builder = imageUrlBuilder(client)

// Helper function to build image URLs
// function urlFor(source: any) {
//     return builder.image(source)
// }

const Products = ({ products = [] }: { products: SanityDocument }) => {
    const numberOfProducts = products.length === 1 ? `1 Product` : `${products.length}`
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-full">
            {/* <p>{numberOfProducts}</p> */}
            {products.map((product: Product) =>
                // <Link
                //     key={product._id}
                //     href={`products/${product.slug}`}
                // >
                //     <div
                //         className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-2"
                //     >
                //         {product.image && (
                //             <Image
                //                 src={urlFor(product.image)
                //                     .width(400)
                //                     .height(600)
                //                     .url()}
                //                 alt={product.name}
                //                 width={400}
                //                 height={600}
                //                 className="w-full h-48 object-cover"
                //             />
                //         )}
                //         <div className="p-4">
                //             <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                //             <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                //             <div className="flex justify-between items-center">
                //                 <span className="text-lg font-bold">${product.price}</span>
                //                 <span className={`px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                //                     {product.inStock ? 'In Stock' : 'Out of Stock'}
                //                 </span>
                //             </div>
                //         </div>
                //     </div>
                // </Link>
                <ProductCard key={product._id} product={product} />
            )}


        </div>
    )
}

export default Products