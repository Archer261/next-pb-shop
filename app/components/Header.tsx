'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navigation = [
        { name: 'Shop', href: '/products' },
        { name: 'Contact', href: '/contact' },
        { name: 'Training', href: '/' },
    ];

    const isActiveLink = (path: string) => {
        if (path === '/') {
            return pathname === path;
        }
        return pathname.startsWith(path);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl font-bold text-black">
                            Pickleball Store
                        </Link>
                    </div>

                    {/* Desktop Navigation - Now with ml-auto to push to right */}
                    <div className="hidden md:flex md:space-x-8 ml-auto">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-colors ${isActiveLink(item.href)
                                    ? 'bg-purple-600 text-white'
                                    : 'text-black hover:bg-purple-100'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button - Now attached to the right */}
                    <div className="flex md:hidden ml-auto">
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-purple-100"
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            <span className="sr-only">
                                {isMenuOpen ? 'Close main menu' : 'Open main menu'}
                            </span>
                            {isMenuOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    id="mobile-menu"
                    className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
                >
                    <div className="space-y-1 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`block py-2 px-4 text-base font-medium rounded-full transition-colors ${isActiveLink(item.href)
                                    ? 'bg-purple-600 text-white mx-2'
                                    : 'text-black hover:bg-purple-100 mx-2'
                                    }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;