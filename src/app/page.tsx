import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import Cta from "../components/Cta";
import CompanyOverview from "../components/Company-Overview";

export default function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <Testimonials />
      <Cta />
    </>
  );
}
