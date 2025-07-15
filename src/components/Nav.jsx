'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
    <nav
      className={`h-22 top-0 fixed w-full bg-[#eaeaee] duration-150 ease-in ${
        scrolled ? 'translate-y-[-100px]' : ''
      }`}
    >
      <div className={`container flex items-center justify-between h-full`}>
        <img src="./nav-logo.png" alt="mountain-matrix" className="w-48" />
        <div className="hidden lg:flex gap-8 items-center">
          <ul className="flex gap-8 text-lg font-semibold text-[#003049] focus:outline-none">
            <li
              className={`${
                pathname === '/' ? 'border-b-2 border-blue-600' : ''
              }`}
            >
              <Link href="/" className={`hover:opacity-80`}>
                Home
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link
                href="/services"
                className={`${
                  pathname === '/services' ? 'border-b-2 border-blue-600' : ''
                } cursor-pointer`}
              >
                Services
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link
                href="/about"
                className={`${
                  pathname === '/about' ? 'border-b-2 border-blue-600' : ''
                } cursor-pointer`}
              >
                About
              </Link>
            </li>
            <li>|</li>
            <li>
              <a href="#contact">Contact</a>
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
      </div>
    </nav>
  );
};

export default Nav;
