import Image from "next/image";
import React from "react";

const testimonialsList = ["", "sa "];

type Props = {};

const Testimonial = (props: Props) => {
  return (
    <section className="mb-32 mt-36">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl xl:text-5xl">
            Trusted by leaders
          </h2>
          <p className="mx-auto mt-6 text-gray-700 dark:text-gray-300 md:w-3/4 lg:w-3/5">
            A growing team doesn't need to mean growing pains. Privacy, and the
            right tool for every step of your journey - Jira Software friction -
            company size.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonialsList.map(({}, idx) => (
            <div
              key={idx}
              className="space-y-6 rounded-xl border border-gray-100 bg-white p-3 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
            >
              <Image
                className="h-full w-full rounded-lg"
                src="/images/avatars/avatar-3.webp"
                alt="user avatar"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
