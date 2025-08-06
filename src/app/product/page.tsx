"use client";

import "swiper/css";
import "swiper/css/autoplay";
import Meal from "@/components/Meal";
import How from "@/components/How";
import Pricing from "@/components/Pricing";
import TestimonialsProduct from "@/components/TestimonialsProduct";

export default function Page() {
  return (
    <main className="py-24 bg-gray-50">
      <Meal />
      <How />
      <Pricing />
      <TestimonialsProduct />
    </main>
  );
}
