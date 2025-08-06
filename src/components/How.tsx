import React from "react";

const How = () => {
  return (
    <section id="section-how" className="py-[6rem] md:py-[9.6rem] bg-gray-50">
      <div id="container" className="container-box">
        <span
          id="subheading"
          className="block text-[1.6rem] font-medium text-[#cf711f] uppercase mb-[1.6rem] tracking-[0.75px]"
        >
          How it works
        </span>
        <h2
          id="heading-secondary"
          className="heading-secondary text-[3rem] md:text-[4.4rem] leading-[1.2] mb-[9.6rem]"
        >
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div
        id="container"
        className="max-w-[120rem] px-[3.2rem] mx-auto gap-x-[6.4rem] gap-y-[9.6rem] flex flex-col items-center"
      >
        {/*STEP 01 */}
        <div className="flex flex-col-reverse md:flex md:flex-row items-center gap-10 md:gap-0">
          <div id="step-text-box" className="  md:w-1/2 p-5">
            <p
              id="step-number"
              className="  text-[8.6rem] font-semibold text-[#ddd] mb-[1.2rem]"
            >
              01
            </p>
            <h3 id="heading-tertiary" className="heading-tertiary">
              Tell us what you like (and what not)
            </h3>
            <p id="step-description" className="text-[1.8rem] leading-[1.8]">
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>

          <div
            id="step-img-box"
            className="relative flex items-center justify-center md:w-2/4"
          >
            {/* Lingkaran besar */}
            <div className="absolute w-[60%] pb-[60%] bg-[#fdf2e9] rounded-full -z-10"></div>
            {/* Lingkaran kecil */}
            <div className="absolute w-[45%] pb-[45%] bg-[#fae5d3] rounded-full -z-10"></div>
            <img
              src="img/app/app-screen-1.png"
              id="step-img"
              alt="iPhone app
            preferences selection screen"
              className="w-[35%]"
            />
          </div>
        </div>

        {/*STEP 02 */}
        <div className="flex flex-col md:flex md:flex-row items-center gap-10 md:gap-0">
          <div
            id="step-img-box"
            className="relative flex items-center justify-center md:w-2/4"
          >
            {/* Lingkaran besar */}
            <div className="absolute w-[60%] pb-[60%] bg-[#fdf2e9] rounded-full -z-10"></div>
            {/* Lingkaran kecil */}
            <div className="absolute w-[45%] pb-[45%] bg-[#fae5d3] rounded-full -z-10"></div>
            <img
              src="img/app/app-screen-2.png"
              id="step-img"
              alt="iPhone app
            meal approving plan screen"
              className="w-[35%]"
            />
          </div>
          <div id="step-text-box" className="md:w-1/2 p-5">
            <p
              id="step-number"
              className="text-[8.6rem] font-semibold text-[#ddd] mb-[1.2rem]"
            >
              02
            </p>
            <h3 id="heading-tertiary" className="heading-tertiary">
              Approve your weekly meal plan
            </h3>
            <p id="step-description" className="text-[1.8rem] leading-[1.8]">
              Once per week, approve the meal plan generated for you by Omnifood
              AI. You can change ingredients, swap entire meals, or even add
              your own recipes.
            </p>
          </div>
        </div>

        {/* STEP 03  */}
        <div className="flex flex-col-reverse md:flex md:flex-row items-center gap-10 md:gap-0">
          <div id="step-text-box" className="md:w-1/2 p-5">
            <p
              id="step-number"
              className="text-[8.6rem] font-semibold text-[#ddd] mb-[1.2rem]"
            >
              03
            </p>
            <h3 id="heading-tertiary" className="heading-tertiary">
              Receive meals at convenient time
            </h3>
            <p id="step-description" className="text-[1.8rem] leading-[1.8]">
              Best chefs in town will cook your selected meal every day, and we
              will deliver it to your door whenever works best for you. You can
              change delivery schedule and address daily!
            </p>
          </div>
          <div
            id="step-img-box"
            className="relative flex items-center justify-center md:w-3/4"
          >
            {/* Lingkaran besar */}
            <div className="absolute w-[60%] pb-[60%] bg-[#fdf2e9] rounded-full -z-10"></div>
            {/* Lingkaran kecil */}
            <div className="absolute w-[45%] pb-[45%] bg-[#fae5d3] rounded-full -z-10"></div>
            <img
              src="img/app/app-screen-3.png"
              id="step-img"
              alt="iPhone app
            delivery screen"
              className="w-[35%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default How;
