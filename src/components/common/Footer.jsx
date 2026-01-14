import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-300 pt-12 pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

                    {/* About Section */}
                    <div>
                        <h3 className="text-white text-lg font-heading font-bold mb-4">Eduzone PSC Adoor</h3>
                        <p className="text-sm leading-relaxed mb-4">
                            Your trusted partner for Kerala PSC exam preparation. With 10+ years of excellence, we provide structured coaching foundation on school textbooks.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white text-lg font-heading font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-success transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-success transition-colors">About Us</Link></li>
                            <li><Link to="/courses" className="hover:text-success transition-colors">Courses</Link></li>
                            <li><Link to="/facilities" className="hover:text-success transition-colors">Facilities</Link></li>
                            <li><Link to="/contact" className="hover:text-success transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-white text-lg font-heading font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="mt-1 flex-shrink-0 text-success" />
                                <span>Opp. KSRTC Bus Stand, Adoor, Pathanamthitta, Kerala – 691523</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="flex-shrink-0 text-success" />
                                <div className="flex flex-col">
                                    <a href="tel:+919400652847" className="hover:text-white">+91 9400652847</a>
                                    <a href="tel:+918547362847" className="hover:text-white">+91 8547362847</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="flex-shrink-0 text-success" />
                                <a href="mailto:eduzoneadoor@gmail.com" className="hover:text-white">eduzoneadoor@gmail.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Social / Map Placeholder */}
                    <div>
                        <h3 className="text-white text-lg font-heading font-bold mb-4">Follow Us</h3>
                        <div className="flex gap-4 mb-6">
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-success hover:text-primary transition-all">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-success hover:text-primary transition-all">
                                <Instagram size={20} />
                            </a>
                        </div>
                        {/* Small Map Embed (Optional, or just link) */}
                        <div className="bg-white/5 p-4 rounded text-xs text-center">
                            <p>Located conveniently opposite KSRTC Bus Stand</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-6 text-center text-xs">
                    <p>&copy; {new Date().getFullYear()} Eduzone PSC Coaching Centre. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
