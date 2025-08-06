import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Hero */}
      <section className=" mx-auto pt-20 md:p-128  bg-gray-50 " id="hero-about">
        <div
          id="container"
          className="max-w-[120rem] p-[3.2rem] mx-auto grid gap-x-[9.4rem] gap-y-15 md:gap-y-[8.6rem] md:grid-cols-2 items-center"
        >
          <div
            id="step-img-box"
            className="relative flex items-center justify-center "
          >
            <Image
              src="/img/about/hero-about-2.jpg"
              id="step-img"
              alt="About Omnifood"
              width={290}
              height={440}
              className="w-l"
            />
          </div>
          <div id="step-text-box">
            <div id="hero-about" className="container-box -ml-9 md:-ml-14">
              <span className="subheading  md:ml-1.5 font-semibold">
                About Omnifood
              </span>
              <h2 className="heading-secondary text-[4.4rem] leading-[1.2] mb-16 ">
                Reshaping the future of eating
              </h2>
            </div>
            <p id="step-description" className="text-[1.8rem] leading-[1.8]">
              Omnifood makes healthy eating effortless by combining AI and
              nutrition science to deliver personalized, tasty meals that fit
              your lifestyle and goals. From a bold idea to a global solution,
              our team of experts ensures every meal supports your wellbeing
              anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}

      <section
        className="py-[6rem] md:py-[9.6rem] bg-[#fdf2e9] "
        id="story-about"
      >
        <div
          id="container"
          className="max-w-[120rem] px-[3.2rem] mx-auto grid gap-x-[6.4rem] gap-y-0 md:gap-y-[9.6rem] md:flex items-center"
        >
          <div id="step-text-box">
            <div className="container-box -ml-9 md:-ml-14">
              <span className="subheading  ml-1.5 font-semibold">
                Our Story
              </span>
              <h2 className="heading-secondary text-[4.4rem] leading-[1.2] mb-16 ">
                From a simple idea to a global movement
              </h2>
            </div>
            <p id="step-description" className="text-[1.8rem] leading-[1.8]">
              Omnifood was born in 2025 from the belief that eating healthy
              should be simple. A team of nutritionists, chefs, and tech experts
              united to build an AI-powered platform that delivers healthy,
              delicious, and perfectly timed meals every day of the year.
            </p>
          </div>

          {/* Our Team */}
          <section className="py-20 text-center">
            <div className="mx-auto grid items-center gap-10">
              {/* Team Member 1 */}

              <div className="bg-white p-14 rounded-xl shadow-md items-center md:flex justify-between  gap-15">
                <div className="md:w-2xl">
                  <Image
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Team Member"
                    width={125}
                    height={125}
                    className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-orange-600">
                    Lisa Tran
                  </h4>
                  <p className="text-gray-600">Chief Nutritionist</p>
                </div>
                <p className="text-gray-200 mt-3 leading-normal text-xl">
                  &quot;Lisa has over 10 years of experience designing
                  personalized nutrition plans. She ensures every meal is not
                  only incredibly delicious but also perfectly aligned with your
                  health goals and specific dietary needs.&quot;
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-white p-14 rounded-xl shadow-md md:flex justify-between items-center gap-15">
                <div className="md:w-2xl">
                  <Image
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="Team Member"
                    width={125}
                    height={125}
                    className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-orange-600">
                    David Kim
                  </h4>
                  <p className="text-gray-600">CTO & AI Specialist</p>
                </div>
                <p className="text-gray-200 mt-3 leading-normal text-xl">
                  &quot;David leads our technology strategy, building the AI
                  engine that powers Omnifood&apos;s personalized meal planning.
                  With a background in machine learning and nutrition science,
                  he ensures smart, efficient, and healthy
                  recommendations.&quot;
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-white p-14 rounded-xl shadow-md text-xl md:flex justify-between items-center gap-15">
                <div className="md:w-2xl">
                  <Image
                    src="https://randomuser.me/api/portraits/women/68.jpg"
                    alt="Team Member"
                    width={125}
                    height={125}
                    className="w-28 h-28 mx-auto rounded-full mb-4 object-cover"
                  />
                  <h4 className="text-xl font-semibold text-orange-600">
                    Sofia Ramos
                  </h4>
                  <p className="text-gray-600">Head of Culinary</p>
                </div>
                <p className="text-gray-200 mt-3 leading-normal  text-xl">
                  &quot;Sofia crafts the delicious and nutritious menus at
                  Omnifood. With years of experience as a professional chef and
                  a passion for wellness cuisine, she brings flavor, creativity,
                  and balance to every plate.&quot;
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
      {/*  Mission & Vision */}

      <section
        id="mission-vision"
        className="py-20 text-center flex flex-col items-center bg-gray-50"
      >
        <div
          id="text-box "
          className=" container-box flex flex-col items-center mb-10"
        >
          <span className="subheading font-semibold ">Our Purpose</span>
          <h2 className="heading-secondary text-[4.4rem] leading-[1.2] mb-16 ">
            Driven by a mission, guided by a vision
          </h2>
        </div>

        <div className="container-box grid md:grid-cols-2 mb-20 gap-20 md:gap-40  ">
          <div
            id="our-mission"
            className="rounded-[11px] border-2 border-gray-100 p-18 bg-white shadow-md"
          >
            <div className="flex justify-center mb-5">
              <Image
                src="img/about/mision.svg"
                alt="Our Mission"
                width={20}
                height={20}
                className="w-20 h-20"
              />
            </div>
            <h3 className="text-3xl font-bold text-orange-600 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg">
              To empower people to eat healthy with zero effort by leveraging
              cutting edge technology and personalized nutrition.
            </p>
          </div>
          <div
            id="our-vision"
            className="rounded-[11px] border-2 border-gray-100 p-18 bg-white shadow-md"
          >
            <div className="flex justify-center mb-5">
              <Image
                src="img/about/vision.svg"
                alt="Our Vision"
                width={20}
                height={20}
                className="w-20 h-20"
              />
            </div>

            <h3 className="text-3xl font-bold text-orange-600 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg">
              To become the world&apos;s most trusted platform for smart,
              sustainable, and personalized food experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}

      <section
        id="core-values"
        className="py-20 text-center flex flex-col items-center bg-[#fdf2e9]"
      >
        <div
          id="text-box "
          className=" container-box flex flex-col items-center mb-10"
        >
          <span className="subheading font-semibold "> Our Core Values</span>
          <h2 className="heading-secondary text-[4.4rem] leading-[1.2] mb-16 ">
            The principles that guide everything we do
          </h2>
        </div>

        <div className="container-box grid md:grid-cols-3 mb-20 gap-10  ">
          <div
            id="innovation"
            className="rounded-[11px] border-2 border-gray-100 p-18 bg-white shadow-md"
          >
            <h3 className="text-3xl font-bold text-orange-600 mb-8">
              Innovation
            </h3>
            <p className="text-gray-700 text-lg">
              We embrace technology to simplify healthy living, using AI and
              data insights to deliver personalized, convenient, and nutritious
              meals for all.
            </p>
          </div>
          <div
            id="sustainability"
            className="rounded-[11px] border-2 border-gray-100 p-18 bg-white shadow-md"
          >
            <h3 className="text-3xl font-bold text-orange-600 mb-8">
              Sustainability
            </h3>
            <p className="text-gray-700 text-lg">
              We prioritize the planet at every step, from sourcing ingredients
              responsibly to reducing food waste and minimizing our carbon
              footprint.
            </p>
          </div>
          <div
            id="well-being"
            className="rounded-[11px] border-2 border-gray-100 p-18 bg-white shadow-md"
          >
            <h3 className="text-3xl font-bold text-orange-600 mb-8">
              Well-being
            </h3>
            <p className="text-gray-700 text-lg">
              We care deeply about people&apos;s health and happiness, creating
              meals and experiences that support a balanced, nourishing
              lifestyle.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
