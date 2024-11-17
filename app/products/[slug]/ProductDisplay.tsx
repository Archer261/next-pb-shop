// app/products/[slug]/ProductDisplay.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useCart } from '@/app/context/CartContext';

type Product = {
    _id: string;
    name: string;
    slug: string;
    price: number;
    description: string;
    images: {
        asset: {
            url: string;
        };
    }[];
    variants?: string[];
    stockLevel: number;
    details?: {
        material?: string;
        dimensions?: string;
        weight?: string;
    };
};

type ProductDisplayProps = {
    product: Product;
};

const defaultProductImage = "/api/placeholder/600/600"; // Fallback image URL

export default function ProductDisplay({ product }: ProductDisplayProps) {
    const [selectedVariant, setSelectedVariant] = useState(product.variants?.[0] || '');
    const [quantity, setQuantity] = useState(1);
    const [addedToCart, setAddedToCart] = useState(false);
    const { addToCart } = useCart();

    // Ensure we have a valid images array
    const images = product.images?.length > 0
        ? product.images
        : [{ asset: { url: defaultProductImage } }];

    const handleAddToCart = () => {
        addToCart({
            id: product._id,
            name: product.name,
            price: product.price,
            quantity,
            variant: selectedVariant,
            image: images[0].asset.url,
        });
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 3000);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            {addedToCart && (
                <div className="mb-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-800">
                        Product successfully added to cart!
                    </p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="space-y-4">
                    <div className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                            src={images[0].asset.url}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {images.length > 1 && (
                        <div className="grid grid-cols-4 gap-2">
                            {images.slice(1).map((image, i) => (
                                <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                                    <Image
                                        src={image.asset.url}
                                        alt={`${product.name} ${i + 2}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-2xl font-semibold mt-2">
                            ${product.price.toFixed(2)}
                        </p>
                    </div>

                    <div className="prose max-w-none">
                        <p className="text-gray-600">{product.description}</p>
                    </div>

                    {/* Product Details Table */}
                    {product.details && Object.keys(product.details).length > 0 && (
                        <div className="border rounded-lg overflow-hidden">
                            <table className="w-full">
                                <tbody>
                                    {product.details.material && (
                                        <tr className="border-b">
                                            <td className="px-4 py-2 bg-gray-50 font-medium">Material</td>
                                            <td className="px-4 py-2">{product.details.material}</td>
                                        </tr>
                                    )}
                                    {product.details.dimensions && (
                                        <tr className="border-b">
                                            <td className="px-4 py-2 bg-gray-50 font-medium">Dimensions</td>
                                            <td className="px-4 py-2">{product.details.dimensions}</td>
                                        </tr>
                                    )}
                                    {product.details.weight && (
                                        <tr>
                                            <td className="px-4 py-2 bg-gray-50 font-medium">Weight</td>
                                            <td className="px-4 py-2">{product.details.weight}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}

                    <div className="border rounded-lg p-4 space-y-4">
                        {product.variants && product.variants.length > 0 && (
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Variant
                                </label>
                                <select
                                    value={selectedVariant}
                                    onChange={(e) => setSelectedVariant(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                >
                                    {product.variants.map((variant) => (
                                        <option key={variant} value={variant}>
                                            {variant}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Quantity
                            </label>
                            <select
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value))}
                                className="w-full p-2 border rounded-md"
                            >
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <option key={num} value={num}>
                                        {num}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            disabled={product.stockLevel === 0}
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {product.stockLevel === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}