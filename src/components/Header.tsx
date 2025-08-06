"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const sideMenuRef = useRef<HTMLUListElement>(null);
  const [isScroll, setIsScroll] = useState(false);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`sticky top-0 z-50 flex justify-between items-center bg-[#fdf2e9] h-[9.6rem] px-[4.8rem] transition-all duration-300 ${
        isScroll ? "shadow-md" : ""
      }`}
    >
      <a href="#">
        <img
          id="logo"
          alt="Omnifood logo"
          src="img/omnifood-logo.png"
          className="h-9"
        />
      </a>

      <nav id="main-nav" className="flex items-center">
        <ul id="main-nav-list" className="hidden md:flex items-center gap-10">
          <li>
            <Link
              href="/"
              className="inline-block no-underline text-[#333] font-medium text-[1.8rem] transition-all duration-300 hover:text-[#cf711f]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="inline-block no-underline text-[#333] font-medium text-[1.8rem] transition-all duration-300 hover:text-[#cf711f]"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/product"
              className="inline-block no-underline text-[#333] font-medium text-[1.8rem] transition-all duration-300 hover:text-[#cf711f]"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="inline-block no-underline text-[#333] font-medium text-[1.8rem] transition-all duration-300 hover:text-[#cf711f]"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/#section-cta"
              className="inline-block no-underline text-white font-medium text-[1.8rem] transition-all duration-300 bg-[#e67e22] hover:bg-[#cf711f] py-[1.2rem] px-[2.4rem] rounded-[9px]"
            >
              Try for free
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button className="block md:hidden ml-3" onClick={openMenu}>
          <Image src="/img/menu-black.png" width={24} height={24} alt="menu" />
        </button>
      </nav>

      {/* Mobile side menu */}

      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-10 py-40 px-10 fixed -right-[16rem] top-0 bottom-0  z-50 h-screen bg-neutral-100  transition-transform duration-500"
      >
        <div
          className="absolute right-9 top-15 z-[60] cursor-pointer md:hidden"
          onClick={closeMenu}
        >
          <Image
            src="/img/close-black.png"
            height={18}
            width={18}
            alt="close menu"
          />
        </div>

        <li>
          <a
            href="#section-how"
            className="inline-block no-underline text-[#333] font-medium text-[1.8rem] hover:text-[#cf711f]"
            onClick={closeMenu}
          >
            How it works
          </a>
        </li>
        <li>
          <Link
            href="/about"
            className="inline-block no-underline text-[#333] font-medium text-[1.8rem] transition-all duration-300 hover:text-[#cf711f]"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/product"
            className="inline-block no-underline text-[#333] font-medium text-[1.8rem] transition-all duration-300 hover:text-[#cf711f]"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            className="inline-block no-underline text-[#333] font-medium text-[1.8rem] transition-all duration-300 hover:text-[#cf711f]"
          >
            Blog
          </Link>
        </li>
        <li>
          <a
            href="/#section-cta"
            className="inline-block no-underline text-white font-medium text-[1.8rem] transition-all duration-300 bg-[#e67e22] hover:bg-[#cf711f] py-[1.2rem] px-[2.4rem] rounded-[9px]"
          >
            Try for free
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
