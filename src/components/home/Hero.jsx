import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-success text-sm font-semibold mb-6 animate-fade-in-up">
                        🏆 Premium PSC Coaching in Adoor
                    </span>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
                        Your Trusted Destination for <br />
                        <span className="text-success">Kerala PSC Success</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        10+ Years of Excellence. We provide comprehensive coaching based on school textbooks for LDC, LP/UP, and other Kerala PSC exams.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center gap-2 bg-success text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                        >
                            Join PSC Coaching
                            <ArrowRight size={20} />
                        </Link>

                        <a
                            href="https://wa.me/919400652847"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
                        >
                            <Phone size={20} />
                            Contact on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
