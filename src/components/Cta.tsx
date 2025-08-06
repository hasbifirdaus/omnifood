import React from "react";

const Cta = () => {
  return (
    <section id="section-cta" className="pt-[4.8rem] pb-[12.8rem] bg-gray-50">
      <div className="container-box">
        <div
          id="cta"
          className="flex flex-col-reverse md:flex-row shadow-[0_2.4rem_4.8rem_rgba(0,0,0,0.15)] rounded-[11px] overflow-hidden bg-gradient-to-br from-[#eb984e] to-[#e67e22]"
        >
          <div
            id="cta-text-box "
            className="p-10 md:p-[4.8rem_6.4rem_6.4rem_6.4rem] text-[#45260a] md:flex-[2]"
          >
            <h2 className="text-[2.8rem] sm:text-[3.6rem] md:text-[4.4rem] font-bold leading-[1.2] text-gray-600 mb-10 md:mb-[9.6rem] tracking-[-0.5px]">
              Get your first meal for free!
            </h2>
            <p
              id="cta-text"
              className="text-[1.8rem] leading-[1.8] mb-10 md:mb-[4.8rem]"
            >
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form
              id="cta-form"
              name="sign-up"
              className="grid grid-cols-2 gap-x-[3.2rem] gap-y-[2.4rem]"
            >
              <div>
                <label
                  htmlFor="full-name"
                  className="block text-[1.6rem] font-medium mb-[1.2rem]"
                >
                  Full Name
                </label>
                <input
                  id="full-name"
                  type="text"
                  placeholder="Luckman"
                  name="full-name"
                  required
                  className="w-full p-[1.2rem] text-[1.8rem] bg-[#fdf2e9] text-inherit rounded-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-[0.8rem] focus:ring-[#fdf2e980]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-[1.6rem] font-medium mb-[1.2rem]"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Luckman@example.com"
                  name="email"
                  required
                  className="w-full p-[1.2rem] text-[1.8rem] bg-[#fdf2e9] text-inherit rounded-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-[0.8rem] focus:ring-[#fdf2e980]"
                />
              </div>

              <div className="col-span-2">
                <label
                  htmlFor="select-where"
                  className="block text-[1.6rem] font-medium mb-[1.2rem]"
                >
                  Where did you hear from us?
                </label>
                <select
                  id="select-where"
                  name="select-where"
                  required
                  className="w-full p-[1.2rem] text-[1.8rem] bg-[#fdf2e9] text-inherit rounded-[9px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] focus:outline-none focus:ring-[0.8rem] focus:ring-[#fdf2e980]"
                >
                  <option value="">Please choose one option:</option>
                  <option value="friends">Friends and family</option>
                  <option value="youtube">YouTube video</option>
                  <option value="podcast">Podcast</option>
                  <option value="ad">Facebook ad</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <button
                id="btn"
                className=" w-full col-span-2  text-[1.6rem] sm:text-[1.8rem] md:text-[2rem] font-semibold py-[1.6rem] rounded-[9px] transition-all bg-primary-dark text-primary-light  hover:bg-white hover:text-gray-500"
              >
                Sign up now
              </button>

              {/* <!-- <input type="checkbox" />
                <input type="number" /> --> */}
            </form>
          </div>
          <div
            id="cta-img-box"
            role="img"
            aria-label="Woman enjoying food"
            className="h-[30rem] md:h-auto md:min-h-[100%] bg-[linear-gradient(to_right_bottom,rgba(235,151,78,0.35),rgba(230,125,34,0.35)),url('/img/eating.jpg')] bg-cover bg-center md:flex-[1] "
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
