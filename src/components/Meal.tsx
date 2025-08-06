import React from "react";

const Meal = () => {
  return (
    <section id="section-meals" className="py-[6rem] md:py-[9.6rem] bg-gray-50">
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
  );
};

export default Meal;
