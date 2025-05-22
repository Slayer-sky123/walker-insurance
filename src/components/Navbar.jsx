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
    ];

    const isActive = (path) => pathname === path;

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 md:px-10 lg:px-14 py-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-blue-700 tracking-wide">
                    Walker<span className="text-gray-800">Insurance</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-6 items-center">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            className={`text-sm font-medium transition ${isActive(item.path)
                                    ? 'text-blue-700'
                                    : 'text-gray-700 hover:text-blue-700'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
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
                                    ? 'text-blue-700'
                                    : 'text-gray-700 hover:text-blue-700'
                                }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
