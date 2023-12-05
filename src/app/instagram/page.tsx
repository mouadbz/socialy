import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Testimonial from "../components/sections/Testimonial";
import FeaturesSection from "./components/FeaturesSection";
import Cta from "./components/Cta";

type Props = {};

function InstagramPage({}: Props) {
  return (
    <main className="mb-40">
      <Hero />
      <FeaturesSection />
      <Testimonial />
      <Cta />
    </main>
  );
}

export default InstagramPage;
