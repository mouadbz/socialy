/* eslint-disable react/no-unescaped-entities */

import Approach from "@/app/components/sections/Approach";
import DevSection from "@/app/components/sections/DevSection";
import Hero from "@/app/components/sections/Hero";
import Testimonial from "./components/sections/Testimonial";
import Cta from "./components/sections/Cta";
import Faq from "./components/sections/Faq";

export default function Home() {
  return (
    <main>
      <Hero />
      <DevSection />
      {/* <Approach /> */}
      <Testimonial />
      <Cta />
      <Faq />
    </main>
  );
}
