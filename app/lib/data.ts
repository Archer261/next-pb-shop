// app/lib/data.ts
export const products = [
    {
        _id: "1",
        name: "Pro Spin Paddle X1000",
        slug: {
            current: "pro-spin-paddle-x1000"
        },
        price: 129.99,
        description: "Professional-grade pickleball paddle featuring advanced carbon fiber face and polymer honeycomb core. Perfect for players seeking superior control and power.",
        images: [
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            },
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            }
        ],
        variants: [
            "Blue/Black",
            "Red/Black",
            "Green/White"
        ],
        stockLevel: 15,
        details: {
            material: "Carbon Fiber Face, Polymer Core",
            dimensions: "15.5\" x 8.26\" x 0.5\"",
            weight: "8.2 oz"
        }
    },
    {
        _id: "2",
        name: "Control Master Elite Paddle",
        slug: {
            current: "control-master-elite-paddle"
        },
        price: 89.99,
        description: "Mid-range paddle designed for intermediate players. Features textured surface for enhanced spin control and comfortable grip for extended play.",
        images: [
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            },
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            }
        ],
        variants: [
            "Purple/White",
            "Orange/Black",
            "All Black"
        ],
        stockLevel: 23,
        details: {
            material: "Composite Face, Nomex Core",
            dimensions: "15.75\" x 8\" x 0.5\"",
            weight: "7.8 oz"
        }
    },
    {
        _id: "3",
        name: "Tournament Pro Balls",
        slug: {
            current: "tournament-pro-balls"
        },
        price: 29.99,
        description: "USAPA approved tournament balls. Pack of 6 high-visibility balls with consistent bounce and durability. Perfect for both indoor and outdoor play.",
        images: [
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            }
        ],
        variants: [
            "Yellow",
            "Orange",
            "Green"
        ],
        stockLevel: 42,
        details: {
            material: "Premium Plastic",
            dimensions: "2.874\" diameter",
            weight: "0.9 oz per ball"
        }
    },
    {
        _id: "4",
        name: "Premium Pickleball Bag",
        slug: {
            current: "premium-pickleball-bag"
        },
        price: 69.99,
        description: "Spacious pickleball bag with dedicated paddle compartments, ball storage, and personal item pockets. Features comfortable shoulder strap and water bottle holder.",
        images: [
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            },
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            }
        ],
        variants: [
            "Navy",
            "Black",
            "Red"
        ],
        stockLevel: 18,
        details: {
            material: "600D Polyester",
            dimensions: "20\" x 12\" x 8\"",
            weight: "1.8 lbs"
        }
    },
    {
        _id: "5",
        name: "Performance Grip Tape",
        slug: {
            current: "performance-grip-tape"
        },
        price: 12.99,
        description: "High-quality replacement grip tape with superior moisture absorption. Pack includes 3 grip tapes and finishing tape.",
        images: [
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            }
        ],
        variants: [
            "Black",
            "Blue",
            "White"
        ],
        stockLevel: 56,
        details: {
            material: "Premium Synthetic",
            dimensions: "1.8mm thickness",
            weight: "25g per grip"
        }
    },
    {
        _id: "6",
        name: "Beginner's Training Set",
        slug: {
            current: "beginners-training-set"
        },
        price: 149.99,
        description: "Complete beginner's set including two recreational paddles, four balls, and a basic carrying case. Perfect for those just starting their pickleball journey.",
        images: [
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            },
            {
                asset: {
                    url: "/api/placeholder/600/600"
                }
            }
        ],
        variants: [
            "Standard Set",
            "Premium Set",
            "Deluxe Set"
        ],
        stockLevel: 10,
        details: {
            material: "Composite Paddles",
            dimensions: "16\" x 10\" x 3\" (case)",
            weight: "2.5 lbs (complete set)"
        }
    }
];

// Helper function to get a single product by slug
export function getProductBySlug(slug: string) {
    return products.find(product => product.slug.current === slug);
}

// Helper function to get all product slugs
export function getAllProductSlugs() {
    return products.map(product => ({
        slug: product.slug.current
    }));
}