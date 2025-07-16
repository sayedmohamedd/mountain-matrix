'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

// Icons
import { FaListUl } from 'react-icons/fa';
// import DropDownList from './DropDownList';

const Nav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`h-22 top-0 fixed w-full bg-[#eaeaee] duration-150 ease-in z-20 ${
          scrolled ? 'translate-y-[-100px]' : ''
        }`}
      >
        <div className={`container flex items-center justify-between h-full`}>
          <Link href="/" className="focus:outline-none">
            <img
              src="./nav-logo.png"
              alt="mountain-matrix"
              className="w-36 md:w-40 lg:w-48"
            />
          </Link>
          <div className="hidden lg:flex gap-8 items-center">
            <ul className="flex gap-10 text-lg font-semibold text-[#003049] focus:outline-none">
              <li
                className={`${
                  pathname === '/' ? 'text-gray-500 border-blue-600' : ''
                }`}
              >
                <Link href="/" className={`hover:opacity-80`}>
                  Home
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link
                  href="/services-of-mountains-matrix"
                  className={`${
                    pathname === '/services-of-mountains-matrix'
                      ? 'text-gray-500 border-blue-600'
                      : ''
                  } cursor-pointer hover:opacity-85 duration-75`}
                >
                  Services
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link
                  href="/about-mountains-matrix"
                  className={`${
                    pathname === '/about-mountains-matrix'
                      ? 'text-gray-500 border-blue-600'
                      : ''
                  } cursor-pointer hover:opacity-85 duration-75`}
                >
                  About
                </Link>
              </li>
              <li>|</li>
              <li>
                <a
                  href="#contact"
                  className="hover:opacity-85 duration-75 cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
            <button className="overflow-hidden px-6 py-4 text-xl font-semibold rounded-full cursor-pointer ease-in duration-75 border text-[#003049] hover:bg-[#003049] hover:text-white">
              <a
                href="https://calendly.com/mountainssolutions/30min"
                target="_blank"
                className="w-full h-full"
              >
                Book appointment
              </a>
            </button>
          </div>
          <FaListUl className="text-[#003049] text-3xl lg:hidden cursor-pointer hover:opacity-80 duration-100" />
        </div>
      </nav>
      {/* <DropDownList /> */}
    </>
  );
};

export default Nav;
