import Image from "next/image";
import React from "react";

type Props = {};

function FeaturesSection({}: Props) {
  return (
    <div className="md:mb-20 md:pt-25 pt-14 px-4 md:px-0 relative mx-auto font-Inter mt-36">
      <Image
        alt=""
        src="/images/instagram-left.png"
        width={253}
        height={549}
        className="absolute hidden md:block left-0 top-0"
      />
      <Image
        alt=""
        src="/images/instagram-right.png"
        width={253}
        height={549}
        className="absolute right-0 top-0 hidden md:block"
      />
      <div className="mx-auto md:w-3/5">
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

      <div className="max-w-[769px] mx-auto md:gap-14 gap-y-20 flex flex-wrap md:grid grid-cols-2 md:grid-cols-4 md:mt-11 mt-4">
        <div className="text-center md:w-auto w-1/2 order-2">
          <p className="font-bold text-5xl pb-2.5">54K</p>
          <p className="text-xl text-[#5F5F65] ">Accounts Transformed</p>
        </div>
        <div className="text-center md:w-auto w-1/2 order-3">
          <p className="font-bold text-5xl pb-2.5">243K</p>
          <p className="text-xl text-[#5F5F65] ">VIDEOS</p>
          <p className="text-xl text-[#5F5F65] whitespace-nowrap">PROMOTED</p>
        </div>
        <div className="text-center md:w-auto w-1/2 order-4">
          <p className="font-bold text-5xl pb-2.5">178M</p>
          <p className="text-xl text-[#5F5F65] ">LIKES</p>
          <p className="text-xl text-[#5F5F65] whitespace-nowrap">RECEIVED</p>
        </div>
        <div className="text-center md:w-auto w-1/2 order-1">
          <p className="font-bold text-5xl pb-2.5">542M</p>
          <p className="text-xl text-[#5F5F65] ">FOLLOWERS</p>
          <p className="text-xl text-[#5F5F65] whitespace-nowrap">
            AND COUNTING
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
