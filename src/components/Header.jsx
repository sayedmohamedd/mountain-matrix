import Link from 'next/link';

const Header = () => {
  return (
    <header
      className={`h-[80vh] relative py-20 bg-fixed bg-center bg-cover`}
      style={{ backgroundImage: "url('/header.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="container relative z-10 flex flex-col justify-center items-center py-8">
        <h1 className="pt-10 text-5xl font-bold text-white select-none">
          Grow Your Business with Qualified Appointments
        </h1>
        <p className="my-5 text-white font-medium text-xl select-none">
          Mountains Solutions: Your Trusted Partner in Lead Generation & Sales
          Growth
        </p>
        <div className="flex gap-5 my-5">
          <Link
            href="/about-mountains-matrix"
            // className="px-5 py-3 rounded-full text-black bg-white"
            className="overflow-hidden px-6 py-4 text-xl font-semibold rounded-full cursor-pointer ease-in duration-75 border text-[#003049] hover:bg-[#003049] hover:text-white"
          >
            More About Our Services
          </Link>
          <button className="overflow-hidden px-6 py-4 text-xl font-semibold rounded-full cursor-pointer ease-in duration-75 border text-[#003049] hover:bg-[#003049] hover:text-white">
            <a
              href="https://calendly.com/mountainssolutions/30min"
              target="_blank"
              className="w-full h-full"
            >
              Get Your Free Consultation!
            </a>
          </button>
        </div>
        <p className="my-3 text-white text-lg font-semibold leading-9 md:w-4/6">
          Are you struggling to find high-quality leads and scheduled
          appointments for your roofing, home improvement, or construction
          business? At Mountains Solutions, we take the guesswork out of lead
          generation, connecting you with pre-qualified prospects ready to do
          business.
        </p>
        {/* <ul className="list-disc pl-5 ml-5 text-white">
          <li>100s of guaranteed appointments per month</li>
          <li>40-50% conversion rate on our scheduled appointments</li>
          <li>
            Customized appointment setting strategies tailored to your industry
          </li>
        </ul> */}
      </div>
    </header>
  );
};

export default Header;
