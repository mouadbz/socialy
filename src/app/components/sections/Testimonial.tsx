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
              className="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
            >
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-serif">"</span>Sit amet consectetur
                adipisicing elit. Quaerat repellat perspiciatis excepturi est.
                Provident, omnis ut, sapiente veritatis cum deleniti repudiandae
                ad doloribus. <span className="font-serif">"</span>
              </p>
              <div className="flex items-center gap-3 text-left">
                <Image
                  className="h-12 w-12 rounded-full"
                  src="/images/avatars/avatar-3.webp"
                  alt="user avatar"
                  width={200}
                  height={200}
                />
                <div>
                  <h3 className="text-lg font-semibold leading-none text-gray-600 dark:text-gray-200">
                    Janet Doe
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    UX Designer
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
