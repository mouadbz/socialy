import CustomLink from "@/components/shared/ui-kits/CustomLink";
import Image from "next/image";
import React from "react";

type Props = {};

function DevSection({}: Props) {
  return (
    <section className="mt-32">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="space-y-6 md:flex lg:items-center lg:gap-6 lg:space-y-0">
          <div className="md:5/12 lg:w-6/12">
            <Image
              className="md:-ml-8"
              src="/images/go-viral.svg"
              alt="tailus stats and login components"
              width={1779}
              height={1592}
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
              Become an <span className="text-primary">Influencer</span>
            </h2>
            <p className="text-lg max-w-xl mt-2 leading-relaxed text-slate-500">
              We have done promotions for thousands of clients and in the past
              years and are one of the most reputable providers in the market.
              Make sure to check out our customer views.
            </p>
            <CustomLink href="/" text="Get Started" className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevSection;
