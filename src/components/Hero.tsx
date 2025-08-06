import React from "react";

const Hero = () => {
  return (
    <section
      id="section-hero"
      className=" bg-[#fdf2e9]  pt-[4.8rem] pb-[9.6rem] min-h-screen "
    >
      <div
        id="hero"
        className="max-w-[130rem] mx-auto px-[3.2rem] grid md:grid-cols-2 gap-10 md:gap-0 lg:gap-[9.6rem] items-center"
      >
        <div id="hero-text-box " className="text-center lg:text-left">
          <h1
            id="heading-primary"
            className="text-[3em] sm:text-[3.2rem] md:text-[4rem] lg:text-[5.2rem] font-bold leading-tight text-gray-600 mb-8 md:mb-20 lg:mb-[3.2rem] tracking-[-0.5px]"
          >
            A healthy meal delivered to your door,every single day
          </h1>
          <p
            id="hero-description"
            className="text-2xl md:text-3xl lg:text-[2rem] leading-[1.6] mb-9 md:mb-[4.8rem] "
          >
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a
            href="#cta"
            id="btn"
            className="btn text-white bg-[#e67e22] py-[1rem] px-6 rounded-lg font-semibold"
          >
            Start eating well
          </a>
          <a
            href="/product"
            id="btn"
            className="btn text-[#e67e22] bg-neutral-50 py-[1rem] px-6 rounded-lg font-semibold ml-10"
          >
            Learn more &darr;
          </a>
          <div
            id="delivered-meals"
            className="flex  items-center gap-10 md:gap-20 lg:gap-[1.6rem] mt-[3rem] md:mt-[8rem] justify-center lg:justify-normal"
          >
            <div id="delivered-imgs" className="flex">
              <img
                src="/img/customers/customer-1.jpg"
                alt="Customer photo"
                className="h-[4rem] w-[4rem] md:w-[4.4rem] md:h-[4.4rem] lg:h-[4.8rem] lg:w-[4.8rem] rounded-full border-[3px] border-[#fdf2e9] -mr-[1.6rem]"
              />
              <img
                src="/img/customers/customer-2.jpg"
                alt="Customer photo"
                className="h-[4rem] w-[4rem] md:w-[4.4rem] md:h-[4.4rem] lg:h-[4.8rem] lg:w-[4.8rem] rounded-full border-[3px] border-[#fdf2e9] -mr-[1.6rem]"
              />
              <img
                src="/img/customers/customer-3.jpg"
                alt="Customer photo"
                className="h-[4rem] w-[4rem] md:w-[4.4rem] md:h-[4.4rem] lg:h-[4.8rem] lg:w-[4.8rem] rounded-full border-[3px] border-[#fdf2e9] -mr-[1.6rem]"
              />
              <img
                src="/img/customers/customer-4.jpg"
                alt="Customer photo"
                className="h-[4rem] w-[4rem] md:w-[4.4rem] md:h-[4.4rem] lg:h-[4.8rem] lg:w-[4.8rem] rounded-full border-[3px] border-[#fdf2e9] -mr-[1.6rem]"
              />
              <img
                src="/img/customers/customer-5.jpg"
                alt="Customer photo"
                className="h-[4rem] w-[4rem] md:w-[4.4rem] md:h-[4.4rem] lg:h-[4.8rem] lg:w-[4.8rem] rounded-full border-[3px] border-[#fdf2e9] -mr-[1.6rem]"
              />
              <img
                src="/img/customers/customer-6.jpg"
                alt="Customer photo"
                className="h-[4rem] w-[4rem] md:w-[4.4rem] md:h-[4.4rem] lg:h-[4.8rem] lg:w-[4.8rem] rounded-full border-[3px] border-[#fdf2e9] -mr-[1.6rem]"
              />
            </div>
            <p
              id="delivered-text"
              className="text-xl md:text-xl lg:text-[1.8rem]  lg:ml-0 font-semibold"
            >
              <span className="text-[#cf711f] font-bold">250,000+</span> meals
              delivered last year!
            </p>
          </div>
        </div>
        <div id="hero-img-box" className="px-20">
          <picture>
            <source srcSet="/hero.webp" type="image/webp" />
            <source srcSet="/hero-min.png" type="image/png" />
            <img
              id="hero-img"
              src="/hero-min.png"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              className="w-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
