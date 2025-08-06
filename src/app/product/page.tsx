"use client";

import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

export const testimonials = [
  {
    text: "Omnifood AI always picks the right meal for me. I feel healthier and never have to decide what to eat!",
    name: "Alicia Gomez",
    title: "Wellness Coach",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Omnifood delivers fresh meals right on time, and I can adjust the schedule anytime. Super convenient!",
    name: "Jason Lee",
    title: "Software Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "I love that all meals come in reusable containers. It's guilt-free and perfect for the environment.",
    name: "Maya Patel",
    title: "Sustainability Advocate",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    text: "The meals are not just healthy, but genuinely delicious. Everything is fresh and organic. Worth every dollar.",
    name: "Daniel Kim",
    title: "Startup Founder",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    text: "As a fitness trainer, I’m super picky with my meals. Omnifood hits the mark every time—balanced, tasty, and clean.",
    name: "Lauren Chen",
    title: "Fitness Trainer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    text: "I used to skip meals. Now Omnifood keeps me on track. It's like having a personal nutritionist in my pocket.",
    name: "Marcus Walker",
    title: "Remote Worker",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

export default function Page() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <main className="py-24 bg-gray-50">
      {/* Meal section */}
      <section
        id="section-meals"
        className="py-[6rem] md:py-[9.6rem] bg-gray-50"
      >
        <div id="meals" className="container-box text-center">
          <span className="subheading">Meals</span>
          <h2 className="heading-secondary">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>

        <div
          id="container"
          className="container-box grid md:grid-cols-3 gap-30 mb-[4.8rem] "
        >
          <div
            id="meal"
            className="rounded-[11px]
          overflow-hidden
          shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.075)]
          transition-all duration-400
          hover:-translate-y-[1.2rem]
          hover:shadow-[0_3.2rem_6.4rem_rgba(0,0,0,0.06)]"
          >
            <img
              src="img/meals/meal-1.jpg"
              id="meal-img"
              alt="Japanese Gyozas"
              className="w-full"
            />
            <div
              id="meal-content"
              className="pt-[3.2rem] pr-[4.8rem] pb-[4.8rem] pl-[4.8rem]"
            >
              <div id="meal-tags" className="mb-[1.2rem] flex gap-[0.4rem]">
                <span
                  id="tag-vegetarian"
                  className="inline-block px-[0.8rem] py-[0.4rem] text-[1.2rem] uppercase text-[#333] font-semibold rounded-full bg-[#51cf66]"
                >
                  Vegetarian
                </span>
              </div>
              <p
                id="meal-title"
                className="text-[2.4rem] text-[#333] font-semibold mb-[3.2rem]"
              >
                Japanese Gyozas
              </p>
              <ul
                id="meal-attributes"
                className="list-none flex flex-col gap-[2rem]"
              >
                <li
                  id="meal-attribute"
                  className="text-[1.8rem] flex items-center gap-[1.6rem]"
                >
                  {/* <ion-icon
                  id="meal-icon"
                  className="h-[2.4rem] w-[2.4rem] text-[#e67e22]"
                  name="flame-outline"
                  name="flame-outline"
                ></ion-icon> */}
                  <span>
                    <strong>650</strong> calories
                  </span>
                </li>
                <li
                  id="meal-attribute"
                  className="text-[1.8rem] flex items-center gap-[1.6rem]"
                >
                  {/* <ion-icon id="meal-icon" name="restaurant-outline"></ion-icon> */}
                  <span>
                    NutriScore &reg; <strong>74</strong>
                  </span>
                </li>
                <li
                  id="meal-attribute"
                  className="text-[1.8rem] flex items-center gap-[1.6rem]"
                >
                  {/* <ion-icon id="meal-icon" name="star-outline"></ion-icon> */}
                  <span>
                    <strong>4.9</strong> rating (537)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div
            id="meal"
            className="rounded-[11px]
          overflow-hidden
          shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.075)]
          transition-all duration-400
          hover:-translate-y-[1.2rem]
          hover:shadow-[0_3.2rem_6.4rem_rgba(0,0,0,0.06)]"
          >
            <img
              src="img/meals/meal-2.jpg"
              id="meal-img"
              alt="Avocado Salad"
              className="w-full"
            />
            <div
              id="meal-content"
              className="pt-[3.2rem] pr-[4.8rem] pb-[4.8rem] pl-[4.8rem]"
            >
              <div id="meal-tags" className="mb-[1.2rem] flex gap-[0.4rem]">
                <span
                  id="tag-vegan"
                  className="inline-block px-[0.8rem] py-[0.4rem] text-[1.2rem] uppercase text-[#333] font-semibold rounded-full bg-[#94d82d]"
                >
                  Vegan
                </span>
                <span
                  id="tag-paleo"
                  className="inline-block px-[0.8rem] py-[0.4rem] text-[1.2rem] uppercase text-[#333] font-semibold rounded-full bg-[#ffd43b]"
                >
                  Paleo
                </span>
              </div>
              <p
                id="meal-title"
                className="text-[2.4rem] text-[#333] font-semibold mb-[3.2rem]"
              >
                Avocado Salad
              </p>
              <ul
                id="meal-attributes"
                className="list-none flex flex-col gap-[2rem]"
              >
                <li
                  id="meal-attribute"
                  className="text-[1.8rem] flex items-center gap-[1.6rem]"
                >
                  {/* <ion-icon
                  id="meal-icon"
                  className="h-[2.4rem] w-[2.4rem] text-[#e67e22]"
                  name="flame-outline"
                ></ion-icon> */}
                  <span>
                    <strong>400</strong> calories
                  </span>
                </li>
                <li
                  id="meal-attribute"
                  className="text-[1.8rem] flex items-center gap-[1.6rem]"
                >
                  {/* <ion-icon id="meal-icon" name="restaurant-outline"></ion-icon> */}
                  <span>
                    NutriScore &reg; <strong>92</strong>
                  </span>
                </li>
                <li
                  id="meal-attribute"
                  className="text-[1.8rem] flex items-center gap-[1.6rem]"
                >
                  {/* <ion-icon id="meal-icon" name="star-outline"></ion-icon> */}
                  <span>
                    <strong>4.8</strong> rating (441)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div id="diets" className="text-center md:text-left">
            <h3 className="heading-tertiary">Works with any diet:</h3>
            <ul className="list">
              <li id="list-item" className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Vegetarian</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Vegan</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Pescatarian</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Gluten-free</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Lactose-free</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Keto</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Paleo</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Low FODMAP</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Kid-friendly</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="container all-recipes"
          className="container text-center text-[1.8rem]"
        >
          <a href="#" id="link" className="link ">
            See all recipes &rarr;
          </a>
        </div>
      </section>

      {/* How Section */}
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
                will create a 100% personalized weekly meal plan just for you.
                It makes sure you get all the nutrients and vitamins you need,
                no matter what diet you follow!
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
                Once per week, approve the meal plan generated for you by
                Omnifood AI. You can change ingredients, swap entire meals, or
                even add your own recipes.
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
                Best chefs in town will cook your selected meal every day, and
                we will deliver it to your door whenever works best for you. You
                can change delivery schedule and address daily!
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

      {/* Pricing Section */}
      <section id="section-pricing" className="py-[9.6rem]  bg-gray-50">
        <div className="container-box">
          <span className="subheading">Pricing</span>
          <h2 className="heading-secondary">
            Eating well without breaking the bank
          </h2>
        </div>

        <div className="container-box flex flex-col md:grid md:grid-cols-2 items-center mb-[4.8rem] gap-10 md:gap-40">
          <div
            id="pricing-plan--starter"
            className="rounded-[11px] w-[75%]  justify-self-end border-[2px] border-[#fdf2e9] p-[4.6rem]"
          >
            <header id="plan-header" className="text-center mb-[4.8rem]">
              <p
                id="plan-name"
                className="text-[#cf711f] font-semibold text-[2rem] uppercase tracking-[0.75px] mb-[3.2rem]"
              >
                Starter
              </p>
              <p
                id="plan-price"
                className="text-[6.2rem] font-semibold text-[#333] mb-[1.6rem]"
              >
                <span className="text-[3rem] font-medium mr-[0.8rem]">$</span>
                399
              </p>
              <p
                id="plan-text"
                className="text-[1.6rem] leading-[1.6] text-[#6f6f6f]"
              >
                per month. That&apos;s just $13 per meal!
              </p>
            </header>
            <ul className="list">
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>1 meal per day</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Order from 11am to 9pm</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="close-outline"></ion-icon> */}
              </li>
            </ul>
            <div id="plan-sing-up" className="text-center mt-[4.8rem]">
              <a href="#" id="btn btn--full" className=" btn btn--full">
                Start eating well
              </a>
            </div>
          </div>

          <div
            id="pricing-plan--complete"
            className="rounded-[11px] w-[75%] bg-[#fdf2e9] p-[4.8rem] relative overflow-hidden"
          >
            <header id="plan-header" className="text-center mb-[4.8rem]">
              <p
                id="plan-name"
                className="text-[#cf711f] font-semibold text-[2rem] uppercase tracking-[0.75px] mb-[3.2rem]"
              >
                Complete
              </p>
              <p
                id="plan-price"
                className="text-[6.2rem] font-semibold text-[#333] mb-[1.6rem]"
              >
                <span className="text-[3rem] font-medium mr-[0.8rem]">$</span>
                649
              </p>
              <p
                id="plan-text"
                className="text-[1.6rem] leading-[1.6] text-[#6f6f6f]"
              >
                per month. That&apos;s just $11 per meal!
              </p>
            </header>
            <ul className="list">
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>
                  <strong>2 meals</strong> per day
                </span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>
                  Order <strong>24/7</strong>
                </span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Delivery is free</span>
              </li>
              <li className="list-item">
                {/* <ion-icon id="list-icon" name="checkmark-outline"></ion-icon> */}
                <span>Get access to latest recipes</span>
              </li>
            </ul>
            <div id="plan-sing-up" className="text-center mt-[4.8rem]">
              <a href="#" className="btn btn--full">
                Start eating well
              </a>
            </div>
          </div>
        </div>

        <div className="container-box grid">
          <aside
            id="plan-details"
            className="text-center text-[1.6rem] leading-[1.6]"
          >
            Prices include all applicable taxes. You can cancel at any time.
            Both plans include the following:
          </aside>
        </div>

        <div
          id="container"
          className="container-box flex flex-col text-center  md:grid md:grid-cols-4 md:text-left mt-20 gap-20"
        >
          <div id="feature">
            {/* <ion-icon id="feature-icon" name="infinite-outline"></ion-icon> */}
            <p
              id="feature-title"
              className="text-[2.4rem] text-[#333] font-bold mb-[1.6rem]"
            >
              Never cook again!
            </p>
            <p id="feature-text" className="text-[1.8rem] leading-[1.8]">
              Our subscriptions cover 365 days per year, even including major
              holidays.
            </p>
          </div>
          <div id="feature">
            {/* <ion-icon id="feature-icon" name="nutrition-outline"></ion-icon> */}
            <p
              id="feature-title"
              className="text-[2.4rem] text-[#333] font-bold mb-[1.6rem]"
            >
              Local and organic
            </p>
            <p id="feature-text" className="text-[1.8rem] leading-[1.8]">
              Our cooks only use local, fresh, and organic products to prepare
              your meals.
            </p>
          </div>
          <div id="feature">
            {/* <ion-icon id="feature-icon" name="leaf-outline"></ion-icon> */}
            <p
              id="feature-title"
              className="text-[2.4rem] text-[#333] font-bold mb-[1.6rem]"
            >
              No waste
            </p>
            <p id="feature-text" className="text-[1.8rem] leading-[1.8]">
              All our partners only use reusable containers to package all your
              meals.
            </p>
          </div>
          <div id="feature">
            {/* <ion-icon id="feature-icon" name="pause-outline"></ion-icon> */}
            <p
              id="feature-title"
              className="text-[2.4rem] text-[#333] font-bold mb-[1.6rem]"
            >
              Pause anytime
            </p>
            <p id="feature-text" className="text-[1.8rem] leading-[1.8]">
              Going on vacation? Just pause your subscription, and we refund
              unused days.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20" id="testimonials">
        <div className="max-w-8xl mx-auto flex flex-col  text-center px-20">
          <div
            id="product-testimonials"
            className="container-box  text-center "
          >
            <span className="subheading">What Our Customers Say</span>
            <h2 className="heading-secondary">
              How Omnifood is making healthy eating effortless.
            </h2>
          </div>

          {/* Tombol Navigasi */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ delay: 3000 }}
              breakpoints={{
                540: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              onSwiper={(swiper) => {
                if (swiper.params.navigation && swiper.navigation) {
                  swiper.navigation.init();
                  swiper.navigation.update();
                }
              }}
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white p-10 rounded-2xl shadow-md text-left h-full flex flex-col min-h-[150px] mx-5 ">
                    <div className=" md:flex items-center gap-10 mt-4 ">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-25 h-25 rounded-full object-cover mb-8"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-3xl">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-800 mb-4 text-xl">
                      &quot;{testimonial.text}&quot;
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Tombol Next/Prev */}
            <div className="swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-white">
              <svg
                className="w-10 h-15 -ml-10 rounded-3xl  bg-[#e67e22]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer  text-white">
              <svg
                className="w-10 h-15 -mr-10 rounded-3xl bg-[#e67e22]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
