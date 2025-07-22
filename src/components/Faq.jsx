import React, { useState } from 'react';

const FaqItem = ({ faq, index, activeIndex, onToggle }) => {
  const isActive = index === activeIndex;

  return (
    <div className="bg-[#1e2030] border border-[#363a4f] rounded-lg mb-4 overflow-hidden transition-shadow duration-300">
      <div
        className="flex justify-between items-center px-6 py-6 cursor-pointer text-base font-medium"
        onClick={() => onToggle(index)}
      >
        <span>{faq.question}</span>
        <span
          className={`transition-transform duration-300 text-sm ${isActive ? 'rotate-180' : ''
            }`}
        >
          ▼
        </span>
      </div>
      <div
        className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        style={{}}
      >
        <div className="overflow-hidden">
          <div className="px-5 pt-5 pb-5 text-[#a9b3c1] leading-relaxed border-t border-[#363a4f]">
            {isActive && <p>{faq.answer}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do you help with relocating projects?",
      answer: "Yes, our support team can assist you with migrating your projects to our servers. Contact us for more details."
    },
    {
      question: "What payment methods are available?",
      answer: "We accept a wide range of payment methods including credit cards, PayPal, cryptocurrencies, and more."
    },
    {
      question: "What type of virtualization are you using?",
      answer: "We use KVM virtualization, which provides excellent performance, security, and isolation for your virtual servers."
    },
    {
      question: "How long does it take to activate the service?",
      answer: "Your service is typically activated within minutes after your payment is successfully processed."
    },
    {
      question: "Is there any possibility of a refund?",
      answer: "Yes, we offer a money-back guarantee. Please refer to our Terms of Service for the specific conditions and period."
    }
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#10111a] text-white py-20 px-4" id="faq">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold mb-2">Frequently Asked Questions</h2>
        <p className="text-[#a9b3c1] text-lg">Find answers to the most common questions</p>
      </div>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <FaqItem
            key={index}
            faq={faq}
            index={index}
            activeIndex={activeIndex}
            onToggle={handleToggle}
          />
        ))}
      </div>
    </section>
  );
};

export default Faq;