import { BookOpen, Users, Clock, Trophy, Book, Smartphone } from 'lucide-react';

const Highlights = () => {
    const highlights = [
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Experienced Faculty",
            description: "Learn from the best mentors with years of PSC coaching experience."
        },
        {
            icon: <BookOpen className="w-8 h-8 text-primary" />,
            title: "Textbook Foundation",
            description: "Strict adherence to SCERT school textbooks for strong fundamentals."
        },
        {
            icon: <Trophy className="w-8 h-8 text-primary" />,
            title: "Weekly Revision Tests",
            description: "Regular assessment to track your progress and improve scores."
        },
        {
            icon: <Smartphone className="w-8 h-8 text-primary" />,
            title: "Digital Library",
            description: "Access to study materials and resources anytime."
        },
        {
            icon: <Clock className="w-8 h-8 text-primary" />,
            title: "Flexible Timings",
            description: "Morning, Day, Evening, and Sunday batches to suit your schedule."
        },
        {
            icon: <Book className="w-8 h-8 text-primary" />,
            title: "Individual Attention",
            description: "Personalized mentoring to address specific learning needs."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-primary mb-4">Why Choose Eduzone?</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        We focus on building a strong foundation and providing consistent training to ensure your success in government exams.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Highlights;
