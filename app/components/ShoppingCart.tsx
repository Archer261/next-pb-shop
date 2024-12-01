'use client';

import React, { useState } from 'react';

export default function ShoppingCart() {
    const [isOpen, setIsOpen] = useState(false);
    const [cart, setCart] = useState([
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 39.99, quantity: 2 }
    ]);

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    return (
        <div className="relative">
            {/* Cart Icon and Counter */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-gray-100 rounded-full relative"
            >
                <span className="sr-only">Shopping cart</span>
                {/* Cart Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                </svg>

                {/* Item Counter */}
                {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                        {totalItems}
                    </span>
                )}
            </button>

            {/* Dropdown Cart */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg z-50">
                    <div className="p-4">
                        <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>

                        {cart.length === 0 ? (
                            <p className="text-gray-500">Your cart is empty</p>
                        ) : (
                            <>
                                {/* Cart Items */}
                                <div className="space-y-4 mb-4">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-medium">{item.name}</h4>
                                                <p className="text-sm text-gray-500">
                                                    Qty: {item.quantity} × ${item.price}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-red-500 hover:text-red-700"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* Cart Total */}
                                <div className="border-t pt-4">
                                    <div className="flex justify-between font-semibold">
                                        <span>Total:</span>
                                        <span>${totalPrice.toFixed(2)}</span>
                                    </div>
                                    <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
                                        Checkout
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}