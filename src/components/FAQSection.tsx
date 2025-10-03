import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is Xeltrix?",
    answer: "Xeltrix is an advanced cybersecurity solution that protects businesses from malware, phishing, ransomware, and other cyber threats in real time."
  },
  {
    question: "How does Xeltrix protect my business?",
    answer: "Xeltrix uses advanced AI-powered threat detection, real-time monitoring, and automated response systems to identify and neutralize threats before they can damage your business infrastructure."
  },
  {
    question: "Is Xeltrix suitable for small businesses?",
    answer: "Yes, Xeltrix is designed to scale with businesses of all sizes. Our flexible pricing and feature sets make it accessible for small businesses while providing enterprise-grade security."
  },
  {
    question: "What kind of threats does Xeltrix prevent?",
    answer: "Xeltrix prevents a wide range of cyber threats including malware, ransomware, phishing attacks, data breaches, DDoS attacks, and advanced persistent threats (APTs)."
  },
  {
    question: "Can Xeltrix integrate with my existing security system?",
    answer: "Absolutely. Xeltrix is built with integration in mind and can seamlessly work alongside your existing security infrastructure, enhancing rather than replacing your current systems."
  }
];

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className="py-20 px-6 text-center" style={{ backgroundColor: '#0A0A0A' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-sans font-bold text-white mb-6 leading-tight">
            Frequently Asked<br/>
            <span className="bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg font-sans font-normal" style={{ color: '#BBBBBB' }}>
            Have another question? Please contact our team!
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl transition-all duration-300"
              style={{ backgroundColor: '#1A1A1A' }}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-center hover:bg-opacity-80 transition-all duration-300 rounded-2xl"
              >
                <h3 className="text-xl font-sans font-bold text-white pr-4 flex-1 text-center">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {expandedIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-white" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-white" />
                  )}
                </div>
              </button>
              
              {expandedIndex === index && (
                <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300 text-center">
                  <p className="text-base font-sans font-normal leading-relaxed" style={{ color: '#BBBBBB' }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}