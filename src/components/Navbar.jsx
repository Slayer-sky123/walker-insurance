// src/components/Navbar.jsx

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Contact', path: '/contact' },
        { label: 'Get Started', path: '/get-started' },
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="lg:container mx-auto px-4 md:px-10 lg:px-14 py-2 flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <img className='aspect-video object-contain object-center w-32' src="../images/blue-logo.png" alt="Walker Insurance" />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-10 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`text-sm font-medium transition ${isActive(item.path)
                                ? 'text-[var(--primary__color)]'
                                : 'text-gray-700 hover:text-[var(--primary__color)]'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
                <div className='hidden lg:flex'>
                    <Link draggable="false" onClick={() => setIsOpen(false)} to='/client-portal' className='text-sm lg:text-base inline-flex items-center gap-x-2 text-white font-medium text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 lucide lucide-user-round-cog-icon lucide-user-round-cog"><path d="m14.305 19.53.923-.382" /><path d="m15.228 16.852-.923-.383" /><path d="m16.852 15.228-.383-.923" /><path d="m16.852 20.772-.383.924" /><path d="m19.148 15.228.383-.923" /><path d="m19.53 21.696-.382-.924" /><path d="M2 21a8 8 0 0 1 10.434-7.62" /><path d="m20.772 16.852.924-.383" /><path d="m20.772 19.148.924.383" /><circle cx="10" cy="8" r="5" /><circle cx="18" cy="18" r="3" /></svg>
                        Client Portal</Link>
                </div>

                {/* Mobile Icon */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-800 focus:outline-none"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-md px-4 py-6 border-t border-gray-200 space-y-4">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`block text-base font-medium transition ${isActive(item.path)
                                ? 'text-[var(--primary__color)]'
                                : 'text-gray-700 hover:text-[var(--primary__color)]'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className='lg:hidden flex'>
                        <Link draggable="false" onClick={() => setIsOpen(false)} to='/client-portal' className='text-sm lg:text-base inline-flex items-center gap-x-2 text-white font-medium text-center bg-[var(--primary__color)] hover:scale-95 rounded-md py-3 px-6 transition-all duration-150 ease-linear'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5 lucide lucide-user-round-cog-icon lucide-user-round-cog"><path d="m14.305 19.53.923-.382" /><path d="m15.228 16.852-.923-.383" /><path d="m16.852 15.228-.383-.923" /><path d="m16.852 20.772-.383.924" /><path d="m19.148 15.228.383-.923" /><path d="m19.53 21.696-.382-.924" /><path d="M2 21a8 8 0 0 1 10.434-7.62" /><path d="m20.772 16.852.924-.383" /><path d="m20.772 19.148.924.383" /><circle cx="10" cy="8" r="5" /><circle cx="18" cy="18" r="3" /></svg>
                            Client Portal</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
