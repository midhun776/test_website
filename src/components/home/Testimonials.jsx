import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Lakshmi Priya",
            role: "LDC Rank Holder",
            content: "Eduzone's systematic approach helped me clear the LDC exam. The daily exams and revision classes were a game changer.",
            rating: 5
        },
        {
            name: "Rahul K.",
            role: "CPO Selected",
            content: "Best coaching centre in Adoor. The faculty is very supportive and the study material is excellent.",
            rating: 5
        },
        {
            name: "Anjali S.",
            role: "LP School Assistant",
            content: "I started from scratch and Eduzone helped me build a strong foundation. Highly recommended for beginners.",
            rating: 4
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-heading font-bold text-primary text-center mb-16">
                    What Our Students Say
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                            <div className="flex gap-1 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        fill={i < item.rating ? "currentColor" : "none"}
                                        className={i < item.rating ? "text-yellow-400" : "text-gray-300"}
                                    />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-6 italic">"{item.content}"</p>
                            <div>
                                <h4 className="font-bold text-primary">{item.name}</h4>
                                <p className="text-sm text-gray-500">{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
