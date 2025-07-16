import FeaturesSection from '@/components/FeaturesSection';
import Header from '@/components/Header';
import InsightsSection from '@/components/InsightsSection';
import ReviewSlider from '@/components/ReviewSlider';

export default function Home() {
  return (
    <>
      <Header />
      <FeaturesSection />
      <ReviewSlider />

      <InsightsSection />

      {/* Industry Insights */}
      {/* <section className="bg-[#eaeaee]">
        <div className="container p-10">
          <h2 className="text-center text-3xl font-extrabold text-[#003049] my-10">
            Roofing and Solar Industry Insights
          </h2>
          <div className="my-6 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="hover:scale-105 duration-100 text-center shadow-md p-8 bg-white rounded-3xl">
              <div className="w-full">
                <img
                  className="rounded-md"
                  src="./industry-insights/1.jpg"
                  alt="Reasons to Avoid Manual Lead Generation for Your Roofing Business"
                  loading="lazy"
                />
              </div>
              <h3 className="my-5 text-lg font-semibold text-slate-900">
                Reasons to Avoid Manual Lead Generation for Your Roofing
                Business
              </h3>
              <p className="leading-relaxed font-medium">
                In the fast-paced world of roofing, finding new customers is
                essential for growth and sustainability. However, many roofing
                businesses
              </p>
            </div>
            <div className="hover:scale-105 duration-100 text-center shadow-md p-8 bg-white rounded-3xl">
              <div className="w-full">
                <img
                  className="rounded-md w-full"
                  src="./industry-insights/2.jpg"
                  alt="Reasons to Avoid Manual Lead Generation for Your Roofing Business"
                  loading="lazy"
                />
              </div>
              <h3 className="my-5 text-lg font-semibold text-slate-900">
                The Power of Appointment Setting: How It Can Transform Your
                Business
              </h3>
              <p className="leading-relaxed font-medium">
                Appointment setting is more than just scheduling meetings; it's
                a strategic tool that can dramatically transform your business.
              </p>
            </div>
            <div className="hover:scale-105 duration-100 text-center shadow-md p-8 bg-white rounded-3xl">
              <div className="w-full">
                <img
                  className="w-full rounded-md"
                  src="./industry-insights/3.jpg"
                  alt="Reasons to Avoid Manual Lead Generation for Your Roofing Business"
                  loading="lazy"
                />
              </div>
              <h3 className="my-5 text-lg font-semibold text-slate-900">
                Choosing the Right Lead Generation Partner: Key Factors to
                Consider
              </h3>
              <p className="leading-relaxed font-medium">
                Selecting the ideal lead generation partner is crucial for the
                success of your business. With countless options available
              </p>
            </div>
            <div className="hover:scale-105 duration-100 text-center shadow-md p-8 bg-white rounded-3xl">
              <div className="w-full">
                <img
                  className="rounded-md"
                  src="./industry-insights/4.jpg"
                  alt="Reasons to Avoid Manual Lead Generation for Your Roofing Business"
                  loading="lazy"
                />
              </div>
              <h3 className="my-5 text-lg font-semibold text-slate-900">
                Overcoming Common Challenges in Lead Generation
              </h3>
              <p className="leading-relaxed font-medium">
                DescriGenerating high-quality leads consistently can be a
                daunting task. Many businesses face common challenges
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

// {/* Resume */}
// <section className="bg-[#eaeaee]">
//   <div className="container rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-20 items-center px-12 py-18">
//     <div>
//       <h2 className="text-4xl font-extrabold text-[#003049] mb-5">
//         We don’t just generate leads, we help you close more deals
//       </h2>
//       <ul className="flex flex-col gap-5 mb-5 pl-3  list-disc list-inside text-gray-600">
//         <li>Proven track record with industry-leading results</li>
//         <li>
//           Tailored strategies for roofing, construction, home improvement
//           & more
//         </li>
//         <li>
//           Flexible & cost-effective solutions for every business size
//         </li>
//         <li>Dedicated support & account management</li>
//         <li>Guaranteed lead quality & appointment scheduling</li>
//       </ul>
//       <button className="overflow-hidden px-6 py-4 text-xl font-semibold rounded-full cursor-pointer ease-in duration-75 border text-[#003049] hover:bg-[#003049] hover:text-white">
//         <a
//           href="https://calendly.com/mountainssolutions/30min"
//           target="_blank"
//           className="w-full h-full"
//         >
//           Book appointment
//         </a>
//       </button>
//     </div>
//     <div className="p-10">
//       <img src="./who-we-are.svg" alt="who-we-are" loading="lazy" />
//     </div>
//   </div>
// </section>
