// import Link from 'next/link';

// const Header = () => {
//   return (
//     <header
//       className={`h-[80vh] relative py-20 bg-fixed bg-center bg-cover`}
//       style={{ backgroundImage: "url('/header.jpg')" }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
//       <div className="container relative z-10 flex flex-col justify-center items-center py-8">
//         <h1 className="pt-10 text-5xl font-bold text-white select-none">
//           Grow Your Business with Qualified Appointments
//         </h1>
//         <p className="my-5 text-white font-medium text-xl select-none">
//           Mountains Solutions: Your Trusted Partner in Lead Generation & Sales
//           Growth
//         </p>
//         <div className="flex gap-5 my-5">
//           <Link
//             href="/about-mountains-matrix"
//             // className="px-5 py-3 rounded-full text-black bg-white"
//             className="overflow-hidden px-6 py-4 text-xl font-semibold rounded-full cursor-pointer ease-in duration-75 border text-[#003049] hover:bg-[#003049] hover:text-white"
//           >
//             More About Our Services
//           </Link>
//           <button className="overflow-hidden px-6 py-4 text-xl font-semibold rounded-full cursor-pointer ease-in duration-75 border text-[#003049] hover:bg-[#003049] hover:text-white">
//             <a
//               href="https://calendly.com/mountainssolutions/30min"
//               target="_blank"
//               className="w-full h-full"
//             >
//               Get Your Free Consultation!
//             </a>
//           </button>
//         </div>
//         <p className="my-3 text-white text-lg font-semibold leading-9 md:w-4/6">
//           Are you struggling to find high-quality leads and scheduled
//           appointments for your roofing, home improvement, or construction
//           business? At Mountains Solutions, we take the guesswork out of lead
//           generation, connecting you with pre-qualified prospects ready to do
//           business.
//         </p>
//         {/* <ul className="list-disc pl-5 ml-5 text-white">
//           <li>100s of guaranteed appointments per month</li>
//           <li>40-50% conversion rate on our scheduled appointments</li>
//           <li>
//             Customized appointment setting strategies tailored to your industry
//           </li>
//         </ul> */}
//       </div>
//     </header>
//   );
// };

// export default Header;

'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Header = () => {
  return (
    <header
      className="relative min-h-[85vh] bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('/header.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/30"></div>

      <div className="container relative z-10 flex flex-col justify-center items-center h-full text-center px-4 pt-24 pb-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 drop-shadow-md"
        >
          Grow Your Business with
          <br />
          <span className=" text-[#59a1c7]">
            <Typewriter
              words={[
                ' Qualified Appointments',
                ' High-Quality Leads',
                ' Real Conversions',
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-white text-lg sm:text-xl font-medium max-w-2xl mb-6 drop-shadow"
        >
          Mountains Solutions: Your Trusted Partner in Lead Generation & Sales
          Growth
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-8"
        >
          <Link
            href="/about-mountains-matrix"
            className="px-6 py-3 text-lg font-semibold rounded-full border border-white text-white hover:bg-white hover:text-[#003049] transition"
          >
            More About Our Services
          </Link>
          <a
            href="https://calendly.com/mountainssolutions/30min"
            target="_blank"
            className="px-6 py-3 text-lg font-semibold rounded-full bg-[#003049] text-white hover:bg-white hover:text-[#003049] border border-[#003049] transition"
          >
            Get Your Free Consultation!
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-white text-base sm:text-lg font-medium leading-relaxed max-w-3xl"
        >
          Are you struggling to find high-quality leads and scheduled
          appointments for your roofing, home improvement, or construction
          business? At Mountains Solutions, we take the guesswork out of lead
          generation, connecting you with pre-qualified prospects ready to do
          business.
        </motion.p>
      </div>
    </header>
  );
};

export default Header;
