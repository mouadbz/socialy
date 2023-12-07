import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import Image from "next/image";
import React from "react";
import Hero from "./components/Hero";
import Testimonial from "../components/sections/Testimonial";
import FeaturesSection from "./components/FeaturesSection";
import Cta from "./components/Cta";
import Link from "next/link";

type Props = {};

function InstagramPage({}: Props) {
  return (
    <main className="mb-40">
      <Hero />
      <FeaturesSection />
      <Testimonial />
      <Cta />
      <div className="md:hidden block fixed bottom-3 w-full left-0 px-3 z-999 font-Inter  ">
        <div className="bg-[#18182D] rounded-2xl flex flex-col items-center py-5">
          <h3 className="text-white text-2xl font-semibold leading-[120%]">
            Boost your Instagram growth
          </h3>
          <Link
            href="/instagram/#home"
            className="outline-none px-6 py-2 h-11 rounded-full text-white mt-4 bg-primary"
          >
            Grow my Instagram account 🔥{" "}
          </Link>
        </div>
      </div>
    </main>
  );
}

export default InstagramPage;
