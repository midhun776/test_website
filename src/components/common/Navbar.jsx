import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Facilities', path: '/facilities' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="bg-primary text-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                        <span className="font-heading font-bold text-xl tracking-wider">EDUZONE</span>
                        <span className="text-sm bg-accent px-2 py-0.5 rounded text-white font-semibold">PSC</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-gray-200 hover:text-success transition-colors font-medium text-sm lg:text-base"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div className="hidden md:flex items-center gap-4">
                        <a
                            href="https://wa.me/919400652847"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-success text-primary px-4 py-2 rounded-md font-bold hover:bg-yellow-400 transition-colors"
                        >
                            <Phone size={18} />
                            <span>Join Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-300 focus:outline-none p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-primary border-t border-gray-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-success hover:bg-white/10"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/919400652847"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full text-center mt-4 bg-success text-primary px-3 py-2 rounded-md font-bold"
                        >
                            Join Admission
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
