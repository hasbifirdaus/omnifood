import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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

const TestimonialsProduct = () => {
  return (
    <section className="bg-gray-50 py-20" id="testimonials">
      <div className="max-w-8xl mx-auto flex flex-col  text-center px-20">
        <div id="product-testimonials" className="container-box  text-center ">
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
  );
};

export default TestimonialsProduct;
