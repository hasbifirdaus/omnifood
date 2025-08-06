"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

type TeamMember = {
  name: string;
  photo: string;
  role: string;
  bio: string;
};
type RandomUser = {
  name: { first: string; last: string };
  picture: { large: string };
};

const roles = [
  "Frontend Developer",
  "UI/UX Designer",
  "Backend Developer",
  "Project Manager",
  "Mobile Developer",
  "Marketing Strategist",
];

export default function TeamGrid() {
  const [team, setTeam] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeam = async () => {
      const res = await fetch("https://randomuser.me/api/?results=6");
      const data = await res.json();

      const members: TeamMember[] = data.results.map(
        (user: RandomUser, index: number) => ({
          name: `${user.name.first} ${user.name.last}`,
          photo: user.picture.large,
          role: roles[index % roles.length],
          bio: "Passionate about helping people live healthier lives with personalized nutrition plans.",
        })
      );

      setTeam(members);
    };

    fetchTeam();
  }, []);
  return (
    <>
      <section className="md:px-80 h-fit overflow-hidden bg-[#fae5d3] mx-auto py-20">
        <div className="max-w-8xl mx-auto px-3xl text-center">
          <div id="meals" className="container-box text-center mb-12">
            <span className="subheading">Meet our awesome team</span>
            <h2 className="heading-secondary">
              Meet the brilliant minds behind our mission who bring passion and
              expertise to every meal we craft
            </h2>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            observer={true}
            observeParents={true}
            modules={[Pagination, Autoplay]}
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white p-8 rounded-2xl shadow-md mx-3 flex flex-col items-center h-full">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-40 h-40 object-cover rounded-full mb-6"
                    loading="lazy"
                  />
                  <p className="font-semibold text-gray-900 text-xl">
                    {member.name}
                  </p>
                  <p className="text-xl text-gray-500">{member.role}</p>
                  <p className="text-gray-700 text-l text-center mt-4">
                    {member.bio}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="bg-white py-24 px-6 md:px-48 text-center">
        <div className=" mx-auto">
          <span className="subheading text-[#e67e22]">Inside Omnifood</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
            A Culture of Mission and Momentum
          </h2>

          <div className="grid gap-24 md:grid-cols-3 text-left items-center">
            {/* Reason 1 */}
            <div className="border border-gray-100 shadow-md rounded-2xl flex flex-col text-center items-center p-20 ">
              <h3 className="text-3xl font-semibold text-gray-800 mb-5">
                Purpose-Driven Mission
              </h3>
              <p className="text-gray-600 text-xl mb-2">
                Help millions of people eat healthier every day through
                AI-powered solutions that truly matter. We believe nutritious,
                personalized meals should be simple and accessible. Our tech
                empowers better food choices.
              </p>
            </div>

            {/* Reason 2 */}
            <div className="border border-gray-100 shadow-md rounded-2xl flex flex-col text-center items-center p-20 ">
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                Collaborative Culture
              </h3>
              <p className="text-gray-600 text-xl mb-2">
                Work with a passionate and diverse team that values creativity,
                openness, and continuous learning. Every voice matters-our team
                thrives through shared ideas, mutual support, and a drive to
                innovate together.
              </p>
            </div>

            {/* Reason 3 */}
            <div className="border border-gray-100 shadow-md rounded-2xl flex flex-col text-center items-center p-20 ">
              <h3 className="text-3xl font-semibold text-gray-800 mb-3">
                Expert-Led Innovation
              </h3>
              <p className="text-gray-600 text-xl mb-2">
                Our team includes industry leaders in nutrition, AI, and
                culinary arts dedicated to pushing boundaries. We combine
                scientific insight with cutting-edge tech to constantly improve
                the way the world approaches food.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
