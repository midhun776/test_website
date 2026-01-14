import { Award, BookOpen, Users, Tartan } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <section className="bg-primary text-white py-16 lg:py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About Eduzone</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Empowering Kerala PSC aspirants with discipline, dedication, and proper guidance for over a decade.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Image/Visual Column */}
                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-gray-100 rounded-2xl h-64 w-full flex items-center justify-center p-4 shadow-inner">
                                    <div className="text-center">
                                        <span className="block text-5xl font-bold text-primary mb-2">10+</span>
                                        <span className="text-gray-600 font-medium">Years of Excellence</span>
                                    </div>
                                </div>
                                <div className="bg-success rounded-2xl h-64 w-full flex items-center justify-center p-4 shadow-lg transform translate-y-8">
                                    <div className="text-center text-primary">
                                        <Award size={48} className="mx-auto mb-2" />
                                        <span className="block font-bold text-xl">Top Ranks</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content Column */}
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                                Building Careers Through <span className="text-success">Strong Fundamentals</span>
                            </h2>
                            <div className="space-y-6 text-gray-700 leading-relaxed">
                                <p>
                                    Established with a vision to provide quality education to serious aspirants, <strong>Eduzone PSC Coaching Centre</strong> has grown to become Adoor's most trusted name in PSC coaching.
                                </p>
                                <p>
                                    Unlike others, we don't believe in rote learning. Our unique methodology focuses on building a strong foundation based on <strong>SCERT & NCERT school textbooks</strong>. This approach ensures that our students are not just ready for exams, but are equipped with deep knowledge that sets them apart.
                                </p>
                                <p>
                                    We understand that every student is unique. That's why we prioritize <strong>personal mentoring</strong> and individual attention, ensuring that no one is left behind in their preparation journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values/Methodology Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-heading font-bold text-primary mb-4">Our Approach</h2>
                        <p className="text-gray-600">A systematic path to government service</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-success">
                            <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <BookOpen className="text-primary w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Structured Syllabus</h3>
                            <p className="text-gray-600">
                                Detailed coverage of the entire syllabus with specific focus on high-weightage topics and current patterns.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary">
                            <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Tartan className="text-primary w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Foundation First</h3>
                            <p className="text-gray-600">
                                We start from the basics. Our school textbook-based foundation course is designed to clear all fundamental concepts.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-success">
                            <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                                <Users className="text-primary w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">Personal Mentoring</h3>
                            <p className="text-gray-600">
                                Regular one-on-one sessions to discuss progress, clarify doubts, and keep motivation levels high.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Simple CTA */}
            <section className="py-16 bg-primary text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-heading font-bold mb-6">Start Your Journey With Us</h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                        Join the league of successful government officers who started their journey at Eduzone.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-success text-primary px-8 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
                    >
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
