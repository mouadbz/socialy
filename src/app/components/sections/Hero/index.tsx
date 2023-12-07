"use client";

import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import { PlatformType, platforms } from "@/config/platforms";
import { siteMetadata } from "@/data/siteMetadata";
import Image from "next/image";
import React, { useState } from "react";
import PlatformServiceForm from "./PlatformServiceForm";

type Props = {};

const Hero = (props: Props) => {
  const [cuurentPlatform, setcuurentPlatform] =
    useState<PlatformType>("instagram");
  return (
    <section className="lg:px-0 px-5 relative bg-bottom dark:bg-[#090e1a]">
      <div className="text-center pt-28 pb-11 md:pb-25 max-w-[982px] w-full rounded-2xl mx-auto md:px-0 px-5">
        <h1 className="md:text-[50px] text-8 tracking-tight text-violet-blackcurrant md:mb-5 mb-2 font-bold">
          Watch your content go viral, fast!
        </h1>
        <p className="md:text-4.25 text-3.75 text-violet-blackcurrant font-normal md:mb-8 mb-4">
          Join thousands of channels, influencers and businesses working with{" "}
          <span className="font-medium text-primary">
            {siteMetadata.siteName}
          </span>
        </p>
        <div className="md:max-w-[540px] w-full mx-auto md:mb-12 md:mt-50px mt-10px">
          <div className="md:mx-0 -mx-3">
            <div className="flex md:mx-0 mx-8 slick-initialized justify-around">
              {platforms.map(({ name }, idx) => (
                <div key={idx}>
                  <button
                    className="cursor-pointer"
                    onClick={() => {
                      setcuurentPlatform(name);
                    }}
                  >
                    <div className="flex justify-center items-center mb-3 pt-5">
                      <div className="outline-none mx-2 shadow-xl rounded-2xl">
                        <Image
                          alt={name}
                          src={`/images/${name}-active.png`}
                          width={130}
                          height={130}
                          className={`${
                            cuurentPlatform !== name && "opacity-50"
                          }`}
                        />
                      </div>
                    </div>
                    <h3 className="capitalize font-medium text-black-russian xl:text-4.25 not-italic mb-1 md:mb-0 text-sm">
                      {name}
                    </h3>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="md:text-4.25 text-sm md:mx-0 mx-5 text-violet-blackcurrant font-normal mt-4 md:mt-14 opacity-60 mb-6">
          Insert your link or username to get started
        </p>
        <PlatformServiceForm platform={cuurentPlatform} />
      </div>
      <div className="absolute top-60 left-11 hidden lg:block">
        <Image
          alt="phone with graph"
          width={210}
          height={316}
          src="/images/right-hero-image.png"
        />
      </div>
      <div className="absolute top-64 right-11 hidden lg:block">
        <Image
          alt="phone with graph"
          width={210}
          height={316}
          src="/images/left-hero-image.png"
        />
      </div>
    </section>
  );
};

export default Hero;
