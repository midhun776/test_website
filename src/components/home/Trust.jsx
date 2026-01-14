import { CheckCircle } from 'lucide-react';

const Trust = () => {
    return (
        <section className="bg-primary py-16 text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-heading font-bold mb-8">
                    Trusted by Serious Aspirants
                </h2>

                <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8 text-left">
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="text-success w-8 h-8 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-xl text-white mb-2">Consistent Training</h3>
                                <p className="text-gray-300">
                                    We believe in consistency. Our daily schedules and regular exams keep you on track throughout your preparation journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                            <CheckCircle className="text-success w-8 h-8 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-xl text-white mb-2">Focus on Fundamentals</h3>
                                <p className="text-gray-300">
                                    Shortcuts don't work without a strong base. We cover SCERT & NCERT textbooks thoroughly before moving to advanced topics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-12">
                    <p className="text-2xl font-light italic opacity-90">
                        "Your Success is Our Tradition"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Trust;
