import React from "react";

const Pricing = () => {
  return (
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
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
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
  );
};

export default Pricing;
