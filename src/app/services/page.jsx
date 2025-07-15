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
          <p className="text-center text-gray-600">
            Boost Sales, Drive Conversions & Improve Customer Retention
          </p>
          {/* three services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 p-10 bg-gray-100 rounded-xl">
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
          </div>
          {/* <button className="overflow-hidden px-6 py-4 text-xl font-semibold rounded-full cursor-pointer ease-in duration-75 border text-[#003049] hover:bg-[#003049] hover:text-white">
            <a
              href="https://calendly.com/mountainssolutions/30min"
              target="_blank"
              className="w-full h-full"
            >
              Book appointment
            </a>
          </button> */}
        </div>
      </section>
    </>
  );
};

export default page;
