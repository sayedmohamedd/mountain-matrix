'use client';
// Icons
import { FaXTwitter } from 'react-icons/fa6';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoCall } from 'react-icons/io5';
import { CiLocationOn, CiMail } from 'react-icons/ci';

const Footer = () => {
  return (
    <footer className="text-white bg-[#0f222e]" id="contact">
      <div className="container px-10 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* First */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="./white-logo-croped.png"
            alt="mountain-matrix"
            loading="lazy"
            className="w-30"
          />
          <p className="text-gray-300 leading-relaxed text-center">
            Mountains Solutions is your trusted partner in business growth. We
            provide flexible outsourcing services to businesses of all sizes,
            including appointment setting, lead generation, and customer
            service. all handled by our experienced team to help you reach your
            goals efficiently.
          </p>
        </div>
        {/* Second */}
        <div className="flex md:justify-center">
          <div>
            <h3 className="text-xl font-semibold mb-3">Services</h3>
            <ul className="flex flex-col gap-5 pl-2 text-gray-300">
              <li>Appointment Setting</li>
              <li>Lead Generation</li>
              <li>Customer Service</li>
            </ul>
          </div>
        </div>
        {/* Third */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center gap-3 text-gray-300">
              <CiMail className="text-lg" />
              <span>Info@MountainsSolutions.com</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <IoCall />
              <span>(302) 364-6577</span>
            </li>
            <li className="flex items-center gap-3 text-gray-300">
              <CiLocationOn />
              <span>1111B S Governors Ave STE 25844 Dover, DE 19904</span>
            </li>
            <span className="text-center text-lg font-bold border-b-2 w-fit mx-auto">
              Follow Us
            </span>
            <li className="flex justify-center items-center gap-7">
              <a
                href="https://www.facebook.com/mountainssolutions/"
                target="_blank"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/mountianssolutions/"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a href="https://x.com/MountainsSolns" target="_blank">
                <FaXTwitter />
              </a>
              <a
                href="https://www.linkedin.com/company/mountainssolutions/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center pb-5 text-gray-300">
        © 2025 Mountain Matrix. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
