import { User } from 'lucide-react';
import { useState, useEffect } from 'react';

interface Testimonial {
  quote: string;
  body: string;
  name: string;
  title: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Hoory has completely transformed the way we manage time and productivity",
    body: "With its seamless time tracking and real-time insights, we've seen a significant improvement in both efficiency and project management.",
    name: "Sarah Julian",
    title: "Operations Manager"
  },
  {
    quote: "The security features are absolutely outstanding and give us complete peace of mind",
    body: "Our team can focus on what matters most knowing that our data is protected by industry-leading security measures and real-time monitoring.",
    name: "Michael Chen",
    title: "Security Director"
  },
  {
    quote: "Integration was seamless and the results were immediate across all our platforms",
    body: "Within hours of implementation, we saw improved workflow efficiency and our team collaboration reached new heights with the unified dashboard.",
    name: "Emma Rodriguez",
    title: "Product Manager"
  }
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentTestimonial = testimonials[activeIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold text-white mb-6 leading-tight">
            Trusted by Teams,<br/>
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Loved by Users
            </span>
          </h2>
          <p className="text-lg font-sans font-normal" style={{ color: '#BBBBBB' }}>
            Teams trust us, users rave about us
          </p>
        </div>

        {/* Testimonial Stack */}
        <div className="flex items-center justify-center min-h-[400px] relative">
          <div className="relative max-w-2xl">
            {/* Background Cards (Stacked and Tilted) */}
            <div 
              className="absolute inset-0 rounded-2xl transform rotate-3 translate-x-6 translate-y-4 opacity-20 transition-all duration-500"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <div className="p-8 h-full">
                <div className="text-white text-xl font-bold mb-4 opacity-30">
                  {testimonials[(activeIndex + 2) % testimonials.length].quote.split(' ').slice(0, 3).join(' ')}...
                </div>
              </div>
            </div>
            
            <div 
              className="absolute inset-0 rounded-2xl transform -rotate-2 -translate-x-3 translate-y-2 opacity-40 transition-all duration-500"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <div className="p-8 h-full">
                <div className="text-white text-xl font-bold mb-4 opacity-50">
                  {testimonials[(activeIndex + 1) % testimonials.length].quote.split(' ').slice(0, 3).join(' ')}...
                </div>
              </div>
            </div>

            {/* Main Testimonial Card (Front) */}
            <div 
              className="relative rounded-2xl p-8 shadow-2xl z-10 transition-all duration-500"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              {/* Quote */}
              <blockquote className="text-white text-2xl font-bold mb-6 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Body Text */}
              <p className="text-lg font-sans font-normal mb-8 leading-relaxed" style={{ color: '#BBBBBB' }}>
                {currentTestimonial.body}
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-sans font-normal text-base">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-sm font-sans font-light" style={{ color: '#BBBBBB' }}>
                    {currentTestimonial.title}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <div className="flex items-center justify-center space-x-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-8 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-white' 
                  : 'border border-white bg-transparent hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}