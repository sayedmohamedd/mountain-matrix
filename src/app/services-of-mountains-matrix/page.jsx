const page = () => {
  return (
    <>
      <header
        className={`h-[70vh] relative py-20 bg-center bg-no-repeat bg-cover`}
        style={{ backgroundImage: "url('/services-cover.jpeg')" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="container text-center text-white relative z-20 h-full flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold my-5 opacity-100">
            Elevate Your Business with Expert Sales & Customer Growth Solutions
          </h2>
          {/* <p className="text-xl font-medium">
            Your Growth Partner in Lead Generation, Appointment Setting &
            Business Success
          </p> */}
        </div>
      </header>

      {/* Our Services */}
      <section>
        <div className="container p-10">
          <h3 className="text-center font-bold text-4xl my-5 text-[#0f222e]">
            Our Services
          </h3>
          <p className="text-center text-gray-600 mb-16 mt-2">
            Boost Sales, Drive Conversions & Improve Customer Retention
          </p>
          {/* three services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20 md:p-10 bg-gray-100 rounded-xl">
            <div className="flex flex-col bg-white hover:scale-105 duration-150 shadow-md p-8 rounded-3xl">
              <div className="w-3/4 mx-auto mb-3">
                <img
                  src="./services/appointment-setting.png"
                  alt="Appointment Setting"
                  className="object-contain aspect-square"
                />
              </div>
              <h3 className="text-center text-xl font-bold mb-3 text-[#0f222e]">
                Appointment Setting
              </h3>
              <p className="text-gray-800 my-3 font-semibold">
                Streamline your sales process and boost conversions.
              </p>
              <p className="text-gray-700">
                Our appointment setters identify qualified leads and schedule
                meetings, freeing up your sales team to focus on closing deals
                and maximizing revenue.
              </p>
            </div>
            <div className="flex flex-col bg-white hover:scale-105 duration-150 shadow-md p-8 rounded-3xl">
              <div className="w-3/4 mx-auto mb-3">
                <img
                  src="./services/lead-generation.png"
                  alt="lead-generation"
                  className="object-contain aspect-square"
                />
              </div>
              <h3 className="text-center text-xl font-bold mb-3 text-[#0f222e]">
                Lead Generation
              </h3>
              <p className="text-gray-800 my-3 font-semibold">
                Expand your customer base with our targeted lead generation.
              </p>
              <p className="text-gray-700">
                We identify qualified prospects and optimize your marketing for
                maximum results.
              </p>
            </div>
            <div className="flex flex-col bg-white hover:scale-105 duration-150 shadow-md p-8 rounded-3xl">
              <div className="w-3/4 mx-auto mb-3">
                <img
                  src="./services/customer-service.png"
                  alt="Customer Service"
                  className="object-contain aspect-square"
                />
              </div>
              <h3 className="text-center text-xl font-bold mb-3 text-[#0f222e]">
                Customer Service
              </h3>
              <p className="text-gray-800 my-3 font-semibold">
                Improve customer satisfaction and loyalty.
              </p>
              <p className="text-gray-700">
                Our dedicated team provides excellent support, resolves issues,
                and prevents customer churn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section>
        <div className="container p-10">
          <h3 className="text-center font-bold text-4xl my-5 text-[#0f222e]">
            How do Our Appointment Setting Services Work?
          </h3>
          <p className="text-center text-gray-600 text-lg leading-9 mb-20 mt-2">
            Are you tired of spending countless hours handling leads and
            scheduling appointments? Let Mountains Solutions handle the
            time-consuming task of appointment setting, allowing you to focus on
            what you do best: closing deals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
            {/* one */}
            <div className="hover:rotate-z-2 duration-150 shadow-md rounded-md bg-gray-200 p-10">
              <h3 className="text-lg font-bold">
                1- Qualified Lead Generation
              </h3>
              <p className="pl-3 mt-3 leading-relaxed text-slate-900">
                Our team of experienced professionals will identify and target
                potential customers who are likely to convert into paying
                customers.
              </p>
            </div>
            <div className="hover:scale-95 duration-150 hidden md:block">
              <img src="./arrow-1.png" alt="arrow" />
            </div>
            {/* two */}
            <div className="hover:scale-95 duration-150 justify-end hidden md:flex">
              <img src="./arrow-2.png" alt="arrow" />
            </div>
            <div className="hover:rotate-z-2 duration-150 shadow-md rounded-md bg-gray-200 p-10">
              <h3 className="text-lg font-bold">2- Personalized Outreach</h3>
              <p className="pl-3 mt-3 leading-relaxed text-slate-900">
                We'll tailor our approach to each prospect, ensuring that your
                brand message resonates and builds trust.
              </p>
            </div>
            {/* three */}
            <div className="hover:rotate-z-2 duration-150 shadow-md rounded-md bg-gray-200 p-10">
              <h3 className="text-lg font-bold">3- Efficient Scheduling</h3>
              <p className="pl-3 mt-3 leading-relaxed text-slate-900">
                We'll schedule appointments at times that are convenient for
                both you and your potential clients, maximizing your sales
                team's productivity.
              </p>
            </div>
            <div className="hover:scale-95 duration-150 hidden md:flex"></div>
            {/* four */}
            <div className="hover:scale-95 duration-150 hidden md:flex justify-end">
              <img src="./arrow-3.png" alt="arrow" />
            </div>
            <div className="hover:rotate-z-2 duration-150 shadow-md rounded-md bg-gray-200 p-10">
              <h3 className="text-lg font-bold">4 - Comprehensive Reporting</h3>
              <p className="pl-3 mt-3 leading-relaxed text-slate-900">
                You'll receive detailed reports on appointment scheduling
                activities, allowing you to track performance and optimize your
                sales strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leads Generation */}
      <section>
        <div className="container p-10">
          <h3 className="text-center font-bold text-4xl my-5 text-[#0f222e]">
            Drive Sales Growth with Our Lead Generation
          </h3>
          <p className="text-center text-gray-600 text-lg leading-9 mb-20 mt-2">
            Are you struggling to attract new customers and grow your business?
            Mountains Solutions offers comprehensive lead generation services
            designed to help you identify, target, and convert qualified
            prospects into paying customers.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
