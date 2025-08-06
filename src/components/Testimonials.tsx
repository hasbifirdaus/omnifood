import React from "react";

const Testimonials = () => {
  return (
    <section
      id="section-testimonials"
      className="bg-[#fdf2e9] grid lg:grid-cols-[55fr_45fr] items-center"
    >
      <div id="testimonials-container" className="p-11 md:p-[9.6rem]">
        <span className="subheading font-bold text-center md:text-left">
          Testimonials
        </span>
        <h2 className="heading-secondary mb-10 md:mb-20 text-center md:text-left">
          Once you try it, you can't go back
        </h2>

        <div
          id="testimonials"
          className="grid sm:grid-cols-2 gap-18 md:gap-y-[4.8rem] gap-x-[8rem]"
        >
          <figure id="testimonial" className="text-center md:text-left">
            <img
              id="testimonial-img"
              className="w-[6.4rem] rounded-full mb-[1.2rem] mx-auto md:mx-0"
              alt="Photo of customer Dave Bryson"
              src="img/customers/dave.jpg"
            />
            <blockquote
              id="testimonial-text"
              className="text-2xl md:text-3xl leading-relaxed mb-4"
            >
              Inexpensive, healthy and great-tasting meals, without even having
              to order manually! It feels truly magical.
            </blockquote>
            <p id="testimonial-name" className="text-xl text-gray-500">
              &mdash; Dave Bryson
            </p>
          </figure>

          <figure id="testimonial" className="text-center md:text-left">
            <img
              id="testimonial-img"
              className="w-[6.4rem] rounded-full mb-[1.2rem] mx-auto md:mx-0"
              alt="Photo of customer Ben Hadley"
              src="img/customers/ben.jpg"
            />
            <blockquote
              id="testimonial-text"
              className="text-2xl md:text-3xl leading-relaxed mb-4"
            >
              The AI algorithm is crazy good, it chooses the right meals for me
              every time. It's amazing not to worry about food anymore!
            </blockquote>
            <p id="testimonial-name" className="text-xl text-gray-500">
              &mdash; Ben Hadley
            </p>
          </figure>

          <figure id="testimonial" className="text-center md:text-left">
            <img
              id="testimonial-img"
              className="w-[6.4rem] rounded-full mb-[1.2rem] mx-auto md:mx-0"
              alt="Photo of customer Steve Miller"
              src="img/customers/steve.jpg"
            />
            <blockquote
              id="testimonial-text"
              className="text-xl md:text-3xl leading-relaxed mb-4"
            >
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p id="testimonial-name" className="text-xl text-gray-500">
              &mdash; Steve Miller
            </p>
          </figure>

          <figure id="testimonial " className="text-center md:text-left">
            <img
              id="testimonial-img"
              className="w-[6.4rem] rounded-full mb-[1.2rem] mx-auto md:mx-0"
              alt="Photo of customer Hannah Smith"
              src="img/customers/hannah.jpg"
            />
            <blockquote
              id="testimonial-text"
              className="text-xl md:text-3xl leading-relaxed mb-4"
            >
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p id="testimonial-name" className="text-2xl text-gray-500">
              &mdash; Hannah Smith
            </p>
          </figure>
        </div>
      </div>

      <div
        id="gallery"
        className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-3 gap-[1.6rem] p-[1.6rem]"
      >
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-1.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
          {/* <figcaption>Caption</figcaption>*/}
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-2.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-3.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-4.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-5.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-6.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-7.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-8.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-9.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-10.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-11.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
        <figure id="gallery-item" className="overflow-hidden">
          <img
            src="img/gallery/gallery-12.jpg"
            alt="Photo of beautifully
            arranged food"
            className="block w-full transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </figure>
      </div>
    </section>
  );
};

export default Testimonials;
