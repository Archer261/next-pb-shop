// app/context/CartContext.tsx
'use client';

import { createContext, useContext, useEffect, useState } from 'react';

// Types
export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image?: string;
    variant?: string;
};

type CartContextType = {
    items: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (itemId: string, variant?: string) => void;
    updateQuantity: (itemId: string, quantity: number, variant?: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    getItemCount: () => number;
};

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export function CartProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (error) {
                console.error('Error loading cart:', error);
                setItems([]);
            }
        }
    }, []);

    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (newItem: CartItem) => {
        setItems(currentItems => {
            // Check if item already exists with same variant
            const existingItemIndex = currentItems.findIndex(
                item => item.id === newItem.id && item.variant === newItem.variant
            );

            if (existingItemIndex > -1) {
                // Update quantity of existing item
                const updatedItems = [...currentItems];
                updatedItems[existingItemIndex].quantity += newItem.quantity;
                return updatedItems;
            }

            // Add new item
            return [...currentItems, newItem];
        });
    };

    const removeFromCart = (itemId: string, variant?: string) => {
        setItems(currentItems =>
            currentItems.filter(
                item => !(item.id === itemId && item.variant === variant)
            )
        );
    };

    const updateQuantity = (itemId: string, quantity: number, variant?: string) => {
        setItems(currentItems =>
            currentItems.map(item =>
                item.id === itemId && item.variant === variant
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const getCartTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getItemCount = () => {
        return items.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider
            value={{
                items,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                getCartTotal,
                getItemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

// Custom hook to use cart context
export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}