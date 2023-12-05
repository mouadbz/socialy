import Image from "next/image";
import React from "react";

type Props = {};

function ClientSection({}: Props) {
  return (
    <div className="mt-8 text-center md:mt-32 lg:mt-20 xl:mt-16">
      <span className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">
        TRUSTED BY YOUR FAVORED TOP TECHS COMPANIES
      </span>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
        <Image
          className="h-8 w-auto lg:h-14"
          src="/images/clients/airbnb.svg"
          loading="lazy"
          alt="airbnb"
          width={100}
          height={100}
        />
        <Image
          className="h-6 w-auto lg:h-10"
          src="/images/clients/google.svg"
          loading="lazy"
          alt="bissell"
          width={100}
          height={100}
        />
        <Image
          className="h-6 w-auto lg:h-10"
          src="/images/clients/ge.svg"
          loading="lazy"
          alt="ge"
          width={100}
          height={100}
        />
        <Image
          className="h-6 w-auto lg:h-10"
          src="/images/clients/netflix.svg"
          loading="lazy"
          alt="lilly"
          width={100}
          height={100}
        />
        <Image
          className="h-8 w-auto lg:h-14"
          src="/images/clients/microsoft.svg"
          loading="lazy"
          alt="microsoft"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default ClientSection;
