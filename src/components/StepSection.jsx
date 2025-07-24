// Example with 4 cards
export default function StepsSection() {
  const steps = [
    {
      title: 'Targeted Lead Generation',
      description:
        'We use advanced techniques to identify and target your ideal customers, ensuring that your marketing efforts are focused and effective.',
    },
    {
      title: 'Data-Driven Campaigns',
      description:
        'Our lead generation campaigns are based on data-driven insights, allowing us to optimize your marketing efforts and maximize ROI.',
    },
    {
      title: 'Lead Nurturing',
      description:
        'We implement effective lead nurturing strategies to build relationships with potential customers and increase the likelihood of conversion.',
    },
    {
      title: 'Comprehensive Reporting',
      description:
        "You'll receive detailed reports on lead generation performance, enabling you to track your progress and make data-driven decisions.",
    },
  ];

  return (
    <div
      className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-50 dark:bg-gray-900 rounded-lg"
      // className="py-16 px-4 sm:px-8 lg:px-16 rounded-lg"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group"
            // className="bg-stone-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300 group"
          >
            <div
              className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition"
              // className="w-12 h-12 mb-4 rounded-full bg-gradient-to-br from-[#fdf3f2] to-[#2b0200] flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition"
            >
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
