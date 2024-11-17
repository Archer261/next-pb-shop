/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Product } from '@/types/product';
import Image from 'next/image';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../sanity/lib/client';

// Initialize the imageUrlBuilder with your Sanity client
const builder = imageUrlBuilder(client)

// Helper function to build image URLs
function urlFor(source: any) {
    return builder.image(source)
}

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div>
            <Link
                key={product._id}
                href={`products/${product.slug}`}
            >
                <div
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow p-2"
                >
                    {product.image && (
                        <Image
                            src={urlFor(product.image)
                                .width(400)
                                .height(600)
                                .url()}
                            alt={product.name}
                            width={400}
                            height={600}
                            className="w-full h-48 object-cover"
                        />
                    )}
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                        <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                        <div className="flex justify-between items-center">
                            <span className="text-lg font-bold">${product.price}</span>
                            <span className={`px-2 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                {product.inStock ? 'In Stock' : 'Out of Stock'}
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;