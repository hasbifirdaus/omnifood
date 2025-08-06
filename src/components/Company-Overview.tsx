export default function CompanyOverview() {
  return (
    <section
      className="py-[6rem] md:py-[9.6rem] bg-gray-50"
      id="company-overview"
    >
      <div id="company-overview" className="text-center md:container-box">
        <span className="subheading font-bold">Our Company</span>
        <h2 className="heading-secondary text-[4.4rem] leading-[1.2] mb-10 md:mb-[9.6rem]">
          Smart tech meets healthy eating
        </h2>
      </div>

      <div
        id="container"
        className="max-w-[120rem] px-[3.2rem] mx-auto grid gap-x-[6.4rem] gap-9 md:gap-y-[9.6rem] md:grid-cols-2 items-center"
      >
        {/*1 */}
        <div
          id="step-img-box"
          className="relative flex items-center justify-center"
        >
          <img
            src="img/overview/overview-1.jpg"
            id="step-img"
            alt="overviw company"
            className="w-4xl "
          />
        </div>
        <div id="step-text-box">
          <h3 id="heading-tertiary" className="heading-tertiary">
            Smarter Meals, Healthier You
          </h3>
          <p
            id="step-description"
            className=" text-2xl md:text-3xl  leading-[1.8] -translate-y-10 md:-translate-y-0 "
          >
            Omnifood is a cutting-edge AI-powered meal subscription service
            dedicated to helping people eat healthy, personalized meals every
            day-without the hassle. Founded in 2025, we're a team of
            nutritionists, chefs, and tech enthusiasts committed to
            revolutionizing how the world eats.
          </p>
        </div>
      </div>

      {/* 2  */}
      <div className="flex flex-col-reverse md:flex-row  max-w-[120rem] px-[3.2rem] mx-auto gap-x-[6.4rem] gap-9 md:gap-y-[9.6rem] items-center md:mt-20">
        <div id="step-text-box" className=" md:w-1/2">
          <h3 id="heading-tertiary" className="heading-tertiary">
            Driven by Innovation and Care
          </h3>
          <p
            id="step-description"
            className="text-2xl md:text-3xl -translate-y-10 md:-translate-y-0"
          >
            Our culture values innovation, sustainability, and well-being. From
            our chef-curated menus to our personalized recommendations, we make
            sure every bite is nutritious, delicious, and perfectly timed.
          </p>
        </div>
        <div
          id="step-img-box"
          className="relative flex items-center justify-center md:w-1/2"
        >
          <img
            src="img/overview/overview-2.jpg"
            id="step-img"
            alt="overview culture company"
            className="w-4xl "
          />
        </div>
      </div>
    </section>
  );
}
