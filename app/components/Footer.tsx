'use client';

import Link from 'next/link';

const Footer = () => {
    const footerLinks = {
        shop: [
            { name: 'All Products', href: '/products' },
            { name: 'New Arrivals', href: '/products?category=new' },
            { name: 'Best Sellers', href: '/products?category=best-sellers' },
        ],
        support: [
            { name: 'Contact Us', href: '/contact' },
            { name: 'Shipping Info', href: '/shipping' },
            { name: 'Returns', href: '/returns' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'Privacy Policy', href: '/privacy-policy' },
            { name: 'Terms & Conditions', href: '/terms' },
        ],
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t mt-auto">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand column */}
                    <div className="space-y-4">
                        <Link href="/" className="text-xl font-bold text-black">
                            Pickleball Store
                        </Link>
                        <p className="text-gray-600 text-sm mt-2">
                            Your premier destination for all things pickleball.
                        </p>
                    </div>

                    {/* Links columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="space-y-4">
                            <h3 className="text-black font-semibold uppercase tracking-wider text-sm">
                                {category}
                            </h3>
                            <ul className="space-y-2">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-600 hover:text-purple-600 text-sm transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} Pickleball Store. All rights reserved.
                        </p>

                        {/* Social links */}
                        <div className="flex space-x-6">
                            <a
                                href="#"
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                                aria-label="Facebook"
                            >
                                Facebook
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                                aria-label="Instagram"
                            >
                                Instagram
                            </a>
                            <a
                                href="#"
                                className="text-gray-600 hover:text-purple-600 transition-colors"
                                aria-label="Twitter"
                            >
                                Twitter
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;