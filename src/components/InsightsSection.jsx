'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const blogData = [
  {
    image: './industry-insights/1.jpg',
    title: 'Reasons to Avoid Manual Lead Generation for Your Roofing Business',
    description:
      'In the fast-paced world of roofing, finding new customers is essential for growth and sustainability. However, many roofing businesses rely on outdated and time-consuming manual methods that limit scalability, waste valuable resources, and reduce efficiency.',
  },
  {
    image: './industry-insights/2.jpg',
    title:
      'The Power of Appointment Setting: How It Can Transform Your Business',
    description:
      "Appointment setting is more than just scheduling meetings; it's a strategic tool that can dramatically transform your business by ensuring your sales team talks only to pre-qualified, interested prospects.",
  },
  {
    image: './industry-insights/3.jpg',
    title:
      'Choosing the Right Lead Generation Partner: Key Factors to Consider',
    description:
      'Selecting the ideal lead generation partner is crucial for the success of your business. With countless options available, understanding what truly matters — quality, transparency, and industry expertise — makes all the difference.',
  },
  {
    image: './industry-insights/4.jpg',
    title: 'Overcoming Common Challenges in Lead Generation',
    description:
      'Generating high-quality leads consistently can be a daunting task. Many businesses face common challenges like unqualified leads, poor targeting, and lack of follow-up — but there are ways to overcome all that.',
  },
];

const InsightsSection = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="bg-[#eaeaee] py-20 px-6 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-center text-4xl font-extrabold text-[#003049] mb-16">
          Roofing and Solar Industry Insights
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {blogData.map((item, index) => {
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-200 group"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-left flex flex-col justify-between h-[340px]">
                  <h3 className="text-lg font-semibold text-[#003049] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm transition-all duration-300">
                    {isExpanded
                      ? item.description
                      : item.description.slice(0, 100) + '...'}
                  </p>
                  <button
                    onClick={() => toggleCard(index)}
                    className="mt-4 text-sm font-semibold text-[#003049] hover:underline"
                  >
                    {isExpanded ? 'Read less' : 'Read more'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
