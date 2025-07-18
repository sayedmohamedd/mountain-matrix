'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaListUl } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const Nav = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll Hide Header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
        setMenuOpen(false);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed py-2 top-0 left-0 w-full z-50 bg-[#eaeaee] transition-all duration-200 ${
          scrolled ? 'translate-y-[-100px]' : ''
        }`}
      >
        <div className="container flex items-center justify-between h-24 px-4">
          <Link href="/" className="focus:outline-none">
            <img
              src="/dark-logo.png"
              alt="mountain-matrix"
              className="w-36 md:w-40 lg:w-36"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-8 items-center">
            <ul className="flex gap-10 text-lg font-semibold text-[#003049] focus:outline-none">
              <li className={`${pathname === '/' ? 'opacity-30' : ''}`}>
                <Link href="/" className="hover:opacity-80">
                  Home
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link
                  href="/services-of-mountain-matrix"
                  className={`${
                    pathname === '/services-of-mountain-matrix'
                      ? 'text-gray-500'
                      : ''
                  } hover:opacity-85`}
                >
                  Services
                </Link>
              </li>
              <li>|</li>
              <li>
                <Link
                  href="/about-mountain-matrix"
                  className={`${
                    pathname === '/about-mountain-matrix' ? 'text-gray-500' : ''
                  } hover:opacity-85`}
                >
                  About
                </Link>
              </li>
              <li>|</li>
              <li>
                <a href="#contact" className="hover:opacity-85">
                  Contact
                </a>
              </li>
            </ul>
            <button className="overflow-hidden px-6 py-4 text-xl font-semibold rounded-full cursor-pointer border text-[#003049] hover:bg-[#003049] hover:text-white transition">
              <a
                href="https://calendly.com/mountainssolutions/30min"
                target="_blank"
                className="w-full h-full"
              >
                Book appointment
              </a>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <FaListUl
            onClick={() => setMenuOpen(true)}
            className="text-[#003049] text-[34px] lg:hidden cursor-pointer hover:opacity-80 duration-100"
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay & Slide */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          menuOpen ? 'visible bg-black/50' : 'invisible bg-transparent'
        }`}
        onClick={() => setMenuOpen(false)}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#f2f2f6] z-50 p-6 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center">
          <img src="/dark-logo.png" className="w-32" alt="Mountain Matrix" />
          <IoClose
            className="text-3xl text-[#003049] cursor-pointer hover:opacity-70"
            onClick={() => setMenuOpen(false)}
          />
        </div>

        <ul className="flex flex-col gap-5 text-[#003049] font-semibold text-lg">
          <li>
            <Link
              href="/"
              className={`hover:text-blue-600 block ${
                pathname === '/' ? 'opacity-30' : ''
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/services-of-mountain-matrix"
              className={`hover:text-blue-600 block ${
                pathname === '/services-of-mountain-matrix' ? 'opacity-30' : ''
              }`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/about-mountain-matrix"
              className={`hover:text-blue-600 block ${
                pathname === '/about-mountain-matrix' ? 'opacity-30' : ''
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 block">
              Contact
            </a>
          </li>
        </ul>

        <a
          href="https://calendly.com/mountainssolutions/30min"
          target="_blank"
          className="mt-6 inline-block w-full text-center px-4 py-3 bg-[#003049] text-white rounded-full font-semibold hover:bg-[#001f33] transition"
        >
          Book appointment
        </a>
      </div>
    </>
  );
};

export default Nav;
