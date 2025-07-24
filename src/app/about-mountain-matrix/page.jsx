// Icons
import { IoMdCheckmark } from 'react-icons/io';

const page = () => {
  return (
    <>
      <header
        className={`h-[70vh] relative py-20 bg-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: "url('/about-cover.jpeg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="container text-center text-white relative z-20 h-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold my-5 opacity-100">
            About Mountain Matrix
          </h2>
          <p className="text-xl font-medium">
            Your Growth Partner in Lead Generation, Appointment Setting &
            Business Success
          </p>
        </div>
      </header>

      {/* Who We Are */}
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-20 px-12 py-18">
          <div>
            <h2
              className="text-4xl font-extrabold text-[#003049] mb-5"
              // className="text-4xl font-extrabold text-[#2b0200] mb-5"
            >
              Who We Are
            </h2>
            <p
              className="text-slate-600 text-2xl font-medium"
              // className="text-slate-700 text-2xl font-medium"
            >
              Driving Business Growth with Data-Driven Lead Generation & Sales
              Solutions
            </p>

            <p className="mt-6 mb-3 text-slate-700 text-lg">
              With years of experience in lead generation, telesales, and
              customer engagement, Mountain Matrix is dedicated to helping
              businesses:
            </p>
            <ul className="flex flex-col gap-5 mb-5 pl-3  list-disc list-inside text-gray-600">
              <li>
                Increase revenue with high-quality leads & scheduled
                appointments
              </li>
              <li>Reduce sales cycle time & maximize conversion rates</li>
              <li>Improve customer satisfaction & long-term retention</li>
            </ul>
            <p className="text-gray-800 mt-8 text-lg">
              We’re not just another lead generation company—we’re your
              strategic growth partner
            </p>
            <p className="text-gray-800 my-4 text-lg">
              Looking to scale your business faster?
            </p>
          </div>
          <div className="p-10">
            <img src="./who-we-are.svg" alt="who-we-are" loading="lazy" />
          </div>
        </div>
      </section>

      {/* our mession */}
      <section className="bg-[#eaeaee]">
        <div className="container p-10">
          <div className="hover:scale-105 hover:-rotate-z-1 duration-150 bg-white md:w-4/5 lg:w-[90%] px-6 md:px-16 py-10 mx-auto rounded-4xl">
            <h3
              className="text-center text-3xl font-extrabold text-[#003049] mb-5"
              // className="text-center text-3xl font-extrabold text-[#2b0200] mb-5"
            >
              Our Mission
            </h3>
            <p className="text-center text-gray-800 mb-3">
              Empowering Businesses with Scalable Sales & Lead Generation
              Strategies
            </p>
            <p className="text-center text-gray-800 mb-3 text-xl">
              “Our mission is simple: help businesses generate more revenue
              through efficient and customized appointment setting and sales
              solutions.”
            </p>
            <ul className="text-gray-800 my-6 flex flex-col gap-4">
              <li className="text-lg font-medium">We achieve this by:</li>
              <li className="flex items-center gap-3">
                <IoMdCheckmark />
                <span>
                  Providing high-intent, pre-qualified leads tailored to your
                  industry
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IoMdCheckmark />
                <span>
                  Ensuring a seamless sales process with strategic appointment
                  setting
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IoMdCheckmark />
                <span>
                  Offering expert customer service solutions to enhance brand
                  loyalty
                </span>
              </li>
            </ul>
            <p className="text-gray-600 my-7 text-lg text-center">
              We’re committed to delivering results-driven solutions that help
              businesses scale.
            </p>
            <div className="flex justify-center items-center">
              <button
                className="px-5 py-3 rounded-full text-lg font-medium mt-3 text-white bg-[#003049] cursor-pointer hover:opacity-80 duration-100"
                // className="px-5 py-3 rounded-full text-lg font-medium mt-3 text-white bg-[#2b0200] cursor-pointer hover:opacity-80 duration-100"
              >
                <a
                  href="https://calendly.com/mountainssolutions/30min"
                  target="_blank"
                >
                  Book appointment
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* our values */}
      <section className="bg-[#eaeaee]">
        <div className="container p-10">
          <div className="hover:scale-105 hover:rotate-z-1 duration-150 bg-white md:w-4/5 lg:w-[90%] px-6 md:px-16 py-10 mx-auto rounded-4xl">
            <h3
              className="text-center text-3xl font-extrabold text-[#003049] mb-5"
              // className="text-center text-3xl font-extrabold text-[#2b0200] mb-5"
            >
              Our Values
            </h3>
            <ul className="text-gray-800 my-6 flex flex-col gap-4">
              <li className="text-lg font-medium">We achieve this by:</li>
              <li className="flex items-center gap-3">
                <IoMdCheckmark />
                <span>
                  Providing high-intent, pre-qualified leads tailored to your
                  industry
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IoMdCheckmark />
                <span>
                  Ensuring a seamless sales process with strategic appointment
                  setting
                </span>
              </li>
              <li className="flex items-center gap-3">
                <IoMdCheckmark />
                <span>
                  Offering expert customer service solutions to enhance brand
                  loyalty
                </span>
              </li>
            </ul>
            <p className="text-gray-600 my-7 text-lg text-center">
              We don’t just generate leads .. we help you convert them into
              paying customers.
            </p>
            <div className="flex justify-center items-center">
              <button
                className="px-5 py-3 rounded-full text-lg font-medium mt-3 text-white bg-[#003049] cursor-pointer hover:opacity-80 duration-100"
                // className="px-5 py-3 rounded-full text-lg font-medium mt-3 text-white bg-[#2b0200] cursor-pointer hover:opacity-80 duration-100"
              >
                <a
                  href="https://calendly.com/mountainssolutions/30min"
                  target="_blank"
                >
                  Book appointment
                  {/* Talk to an Expert */}
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
