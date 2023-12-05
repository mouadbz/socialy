import CustomLink from "@/components/shared/ui-kits/CustomLink";
import Image from "next/image";
import React from "react";

type Props = {};

const Cta = (props: Props) => {
  return (
    <div className="grid sm:grid-cols-2 gap-10 mx-auto mt-24">
      <div className="relative">
        <div className="absolute hidden md:block w-96 h-96 bg-purple-100 rounded-full right-0 top-1/3" />
        <picture>
          <Image
            src="/images/grow.png"
            alt="Happy Team"
            className="rounded-xl w-full max-w-md mx-auto absolute"
            width={1270}
            height={1652}
          />
        </picture>
      </div>
      <div className="place-self-center">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-800 tracking-tight -mt-2">
          Our <span className="text-primary">Mission</span>
        </h2>
        <p className="text-lg max-w-xl mt-2 leading-relaxed text-slate-500">
          We're a multi-cultural team from around the world! We come from
          diverse backgrounds, bringing different personalities, experiences and
          skills to the job. This is what makes our team so special.
        </p>
        <ul className="grid mt-6 text-left gap-y-4">
          <li className="flex items-center gap-3 text-slate-800">
            <svg
              viewBox="0 0 256 256"
              className="w-5 h-5"
              astro-icon="ph:check-circle-fill"
            >
              <path
                fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"
              />
            </svg>
            <span className="text-slate-600">Intelligent Task Management</span>
          </li>
          <li className="flex items-center gap-3 text-slate-800">
            <svg
              viewBox="0 0 256 256"
              className="w-5 h-5"
              astro-icon="ph:check-circle-fill"
            >
              <path
                fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"
              />
            </svg>
            <span className="text-slate-600">Real-time Collaboration</span>
          </li>
          <li className="flex items-center gap-3 text-slate-800">
            <svg
              viewBox="0 0 256 256"
              className="w-5 h-5"
              astro-icon="ph:check-circle-fill"
            >
              <path
                fill="currentColor"
                d="M128 24a104 104 0 1 0 104 104A104.2 104.2 0 0 0 128 24zm49.5 85.8-58.6 56a8.1 8.1 0 0 1-5.6 2.2 7.7 7.7 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7 53.2-50.7a8 8 0 0 1 11 11.6z"
              />
            </svg>
            <span className="text-slate-600">Data Security &amp; Privacy</span>
          </li>
        </ul>
        <CustomLink text="Get started" href="/" className="mt-8" />
      </div>
    </div>
  );
};

export default Cta;
