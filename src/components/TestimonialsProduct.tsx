"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

type Testimonial = {
  name: string;
  title: string;
  text: string;
  image: string;
};

const sampleTitles = [
  "Wellness Coach",
  "Software Developer",
  "Sustainability Advocate",
  "Startup Founder",
  "Fitness Trainer",
  "Remote Worker",
];

const sampleTexts = [
  "Omnifood AI always picks the right meal for me. I feel healthier and never have to decide what to eat!",
  "Omnifood delivers fresh meals right on time, and I can adjust the schedule anytime. Super convenient!",
  "I love that all meals come in reusable containers. It's guilt-free and perfect for the environment.",
  "The meals are not just healthy, but genuinely delicious. Everything is fresh and organic. Worth every dollar.",
  "As a fitness trainer, I’m super picky with my meals. Omnifood hits the mark every time—balanced, tasty, and clean.",
  "I used to skip meals. Now Omnifood keeps me on track. It's like having a personal nutritionist in my pocket.",
];

const TestimonialsProduct = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch("https://randomuser.me/api/?results=6");
      const data = await res.json();

      const generated: Testimonial[] = data.results.map(
        (user: any, index: number) => ({
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          title: sampleTitles[index % sampleTitles.length],
          text: sampleTexts[index % sampleTexts.length],
        })
      );

      setTestimonials(generated);
    };

    fetchTestimonials();
  }, []);

  return (
    <section className="bg-gray-50 py-20" id="testimonials">
      <div className="max-w-8xl mx-auto flex flex-col text-center px-20">
        <div id="product-testimonials" className="container-box text-center">
          <span className="subheading">What Our Customers Say</span>
          <h2 className="heading-secondary">
            How Omnifood is making healthy eating effortless.
          </h2>
        </div>

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
                <div className="bg-white p-10 rounded-2xl shadow-md text-left h-full flex flex-col min-h-[150px] mx-5">
                  <div className="md:flex items-center gap-10 mt-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="w-30 h-30 rounded-full object-cover mb-8"
                    />
                    <div>
                      <p className="font-semibold text-gray-900 text-3xl">
                        {testimonial.name}
                      </p>
                      <p className="text-2xl text-gray-500">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-800 mt-4 text-2xl">
                    &quot;{testimonial.text}&quot;
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Tombol Navigasi */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 cursor-pointer text-white">
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
          <div className=" absolute top-1/2 right-0 transform -translate-y-1/2 z-10 cursor-pointer  text-white">
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
