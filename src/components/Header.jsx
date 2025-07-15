import Link from 'next/link';

const Header = () => {
  return (
    <header
      className={`h-[80vh] py-20 bg-fixed bg-center bg-cover`}
      style={{ backgroundImage: "url('/header.jpg')" }}
    >
      <div className="container flex flex-col justify-center">
        <h1 className="pt-8 text-6xl font-bold text-white select-none">
          Grow Your Business with Qualified Appointments
        </h1>
        <p className="my-5 text-white font-medium text-xl select-none">
          Mountains Solutions: Your Trusted Partner in Lead Generation & Sales
          Growth
        </p>
        <div className="flex gap-5 my-5">
          <Link
            href="/about"
            className="px-5 py-3 rounded-full text-black bg-white"
          >
            More About Our Services
          </Link>
          <button className="px-5 py-3 rounded-full text-black bg-white">
            <a>Get Your Free Consultation!</a>
          </button>
        </div>
        <p className="my-3 text-white text-lg">
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
