// src/components/ui/StripeCheckoutButton.tsx

'use client'

import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeCheckoutButtonProps {
    items: Array<{
        id: string;
        quantity: number;
        price: number;
        name: string;
    }>;
    successUrl?: string;
    cancelUrl?: string;
}

export default function StripeCheckoutButton({
    items,
    successUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
    cancelUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/canceled`,
}: StripeCheckoutButtonProps) {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        try {
            setLoading(true);

            // Create checkout session
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items,
                    successUrl,
                    cancelUrl,
                }),
            });

            const { sessionId } = await response.json();

            // Redirect to Stripe checkout
            const stripe = await stripePromise;
            if (!stripe) throw new Error('Stripe failed to initialize');

            const result = await stripe.redirectToCheckout({
                sessionId,
            });

            if (result.error) {
                throw new Error(result.error.message);
            }
        } catch (error) {
            console.error('Error in checkout:', error);
            alert('Failed to checkout. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleCheckout}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors disabled:opacity-50"
        >
            {loading ? 'Processing...' : 'Checkout'}
        </button>
    );
}