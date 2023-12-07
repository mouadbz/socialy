import Image from "next/image";
import React from "react";

type Props = {};

function FeaturesSection({}: Props) {
  const numbersList = [
    {
      number: "542 M",
      text: "FOLLOWERS",
    },
    {
      number: "54 K",
      text: "ACCOUNTS TRANSFORMED",
    },
    {
      number: "243 K",
      text: "VIDEOS PROMOTED",
    },
    {
      number: "542 M",
      text: "FOLLOWERS",
    },
  ];
  return (
    <div className="md:mb-20 md:pt-25 pt-14 px-4 md:px-0 relative mx-auto font-Inter mt-36">
      <Image
        alt=""
        src="/images/instagram-left.png"
        width={253}
        height={549}
        className="absolute hidden md:block left-0 top-0 z-0 md:-left-20 lg:left-0"
      />
      <Image
        alt=""
        src="/images/instagram-right.png"
        width={253}
        height={549}
        className="absolute right-0 top-0 hidden md:block z-0 md:-right-20 lg:right-0"
      />
      <div className="mx-auto md:w-3/5 z-10 relative">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          We help your <span className="text-primary">Instagram Explode</span>
        </h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          Experience unmatched growth with our premier Instagram acceleration
          service. With years of expertise, we transform accounts into
          influencers.
        </p>
      </div>
      <div className="mx-auto md:w-3/5 flex justify-center mt-6">
        <div className="flex [&>img]:h-10 [&>img]:w-10 [&>img]:rounded-full [&>img]:object-cover [&>img]:ring-4 [&>img]:ring-gray-100 dark:[&>img]:ring-gray-900 ">
          <Image
            src="/images/avatars/avatar.webp"
            alt="user avatar"
            width={400}
            height={400}
          />
          <Image
            src="/images/avatars/avatar-1.webp"
            alt="user avatar"
            width={200}
            height={200}
          />
          <Image
            src="/images/avatars/avatar-2.webp"
            alt="user avatar"
            width={200}
            height={200}
          />
          <Image
            src="/images/avatars/avatar-3.webp"
            alt="user avatar"
            width={200}
            height={200}
          />
          <Image
            src="/images/avatars/avatar-4.webp"
            alt="user avatar"
            width={200}
            height={200}
          />
        </div>
      </div>

      <div className="max-w-[769px] mx-auto md:gap-14 gap-y-20 flex flex-wrap md:grid grid-cols-2 md:grid-cols-4 md:mt-11 mt-4 md:w-4/5">
        {numbersList.map(({ number, text }, key) => (
          <div className="text-center md:w-auto w-1/2 order-2" key={key}>
            <p className="font-bold text-4xl pb-2.5">{number}</p>
            <p className="text-[#5F5F65] text-xl">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
