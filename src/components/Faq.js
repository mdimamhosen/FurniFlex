import React, { useState } from "react";
import Heading from "../common/Heading";

const faqs = [
  {
    question: "What are your delivery options?",
    answer:
      "We offer multiple delivery options, including standard shipping, express delivery, and in-store pickup. Delivery times may vary based on your location and the selected service. You can check the exact options during checkout.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes, once your order has been shipped, we will send you a tracking link via email. You can use this link to monitor the delivery status in real-time.",
  },
  {
    question: "Do you offer assembly services?",
    answer:
      "We provide assembly services for select furniture items. If applicable, this option will be available at checkout for an additional fee. Our professional team will ensure your furniture is assembled correctly.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on all furniture items, provided they are in their original condition. Please contact our support team for assistance with returns or exchanges.",
  },
  {
    question: "What should I do if my furniture arrives damaged?",
    answer:
      "If your furniture arrives damaged, please contact our customer service team immediately. We will assist you with the return or replacement process and ensure that the issue is resolved promptly.",
  },
];

const FrequentQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className=" -mt-10">
      <div className=" container mx-auto px-6 lg:px-16 pb-12    ">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="order-2 lg:order-1     ">
            <div className="space-y-4">
              <h2 className=" text-xl lg:text-4xl font-bold text-gray-800">
                Frequently Asked{" "}
                <span className="text-blue-600">Questions</span>
              </h2>
              <p className="text-sm text-gray-600">
                Welcome to our FAQ section! Here, we answer some of the most
                common questions about our furniture store, products, and
                services. If you need further assistance, please don't hesitate
                to contact us.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl cursor-pointer shadow-md transition duration-300 ease-in-out"
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="text-lg font-semibold p-4 bg-[#fffff5]">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-600 p-4 bg-white">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center order-1 lg:order-2   ">
            <img
              src="https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="FAQ illustration"
              className="w-full max-w-md max-h-96 lg:max-w-full   object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentQuestions;
