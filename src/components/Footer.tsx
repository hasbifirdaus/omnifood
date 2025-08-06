import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className=" bg-gray-50 border-t border-[#eee] ">
      <div className="px-[2rem] sm:px-[2.4rem] md:px-[3.2rem] mx-auto md:max-w-[120rem] py-20 md:flex gap-10">
        <div className=" flex gap-x-10 mb-20 mr-20">
          <div id="logo-col" className="flex flex-col ">
            <a href="#" id="footer-logo" className="block mb-10 w-56">
              <img id="logo" alt="Omnifood logo" src="img/omnifood-logo.png" />
            </a>

            <ul id="social-links" className="list-none flex gap-[2.4rem]">
              <li>
                <a
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  <Image
                    src="/img/footer/instagram.svg"
                    alt="logo instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  <Image
                    src="/img/footer/facebook.svg"
                    alt="logo instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
              <li>
                <a
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  <Image
                    src="/img/footer/x.svg"
                    alt="logo instagram"
                    width={20}
                    height={20}
                  />
                </a>
              </li>
            </ul>

            <p
              id="copyright"
              className="text-xl md:text-[1.4rem] leading-[1.6] text-[#767676] mt-auto"
            >
              Copyright &copy; <span id="year">2027</span> by Omnifood, Inc. All
              rights reserved.
            </p>
          </div>

          <div id="address-col" className="">
            <p id="footer-heading" className="text-[1.8rem] font-bold mb-10">
              Contact us
            </p>
            <address
              id="contacts"
              className="not-italic text-[1.6rem] leading-[1.6]"
            >
              <p id="address" className="mb-[2.4rem] text-2xl">
                623 Harrison St., 2nd Floor, San Francisco, CA 94107
              </p>
              <p>
                <a
                  id="footer-link"
                  href="tel:415-201-6370"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  415-201-6370
                </a>
                <br />
                <a
                  id="footer-link"
                  href="mailto:hello@omnifood.com"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  hello@omnifood.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="flex gap-10">
          <nav id="nav-col">
            <p
              id="footer-heading"
              className="text-[1.8rem] font-bold mb-9 md:mb-10 "
            >
              Account
            </p>
            <ul
              id="footer-nav"
              className="list-none flex flex-col gap-[2.4rem]"
            >
              <li>
                <Link
                  id="footer-link"
                  href="/register"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  Create account
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link"
                  href="/login"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  iOS app
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  Android app
                </Link>
              </li>
            </ul>
          </nav>

          <nav id="nav-col">
            <p
              id="footer-heading"
              className="text-[1.8rem] mb-9 md:mb-mb-10 font-bold"
            >
              Company
            </p>
            <ul
              id="footer-nav"
              className="list-none flex flex-col gap-[2.4rem]"
            >
              <li>
                <Link
                  id="footer-link"
                  href="/about"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  About Omnifood
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  For Business
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  Cooking partners
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link"
                  href="/teams"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  Teams
                </Link>
              </li>
            </ul>
          </nav>

          <nav id="nav-col">
            <p
              id="footer-heading"
              className="text-[1.8rem] mb-9 md:mb-10 font-bold"
            >
              Resources
            </p>
            <ul
              id="footer-nav"
              className="list-none flex flex-col gap-[2.4rem]"
            >
              <li>
                <Link
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  Recipe directory{" "}
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  Help center
                </Link>
              </li>
              <li>
                <Link
                  id="footer-link"
                  href="#"
                  className="no-underline text-[1.6rem] text-[#767676] transition-all duration-300 hover:text-[#555]"
                >
                  Privacy & terms
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
