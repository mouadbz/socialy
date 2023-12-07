import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import Image from "next/image";
import React from "react";
import ClientSection from "./ClientSection";
import AnimatedTitle from "./AnimatedTitle";

type Props = {};

function Hero({}: Props) {
  return (
    <div
      className="relative overflow-hidden dark:bg-darker lg:overflow-auto"
      id="home"
    >
      <div className="absolute inset-x-0 top-32 lg:hidden">
        <div
          aria-hidden="true"
          className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-6xl"
        >
          <div className="h-60 bg-gradient-to-br from-primary to-purple-400 blur-3xl dark:from-blue-700" />
          <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600" />
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <div className="relative ml-auto pt-40 xl:pt-36">
          <div className=" md:flex md:items-center">
            <div className="text-center sm:px-12 md:px-0 md:text-left w-full md:w-3/5">
              <h1 className="text-5xl font-black dark:text-white md:text-6xl xl:text-7xl text-center md:text-left">
                I want more Instagram{" "}
                <AnimatedTitle
                  className="text-primary flex justify-center md:justify-start"
                  textList={["Likes", "Comments", "Followers"]}
                />
              </h1>

              <div>
                <p className="mt-8 text-lg text-gray-700 dark:text-gray-100">
                  Odio incidunt nam sit illum. Voluptas doloribus asperiores
                  quaerat aperiam. Quidem harum omnis beatae ipsum soluta!
                </p>
                <form className="mt-12">
                  <div className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3">
                    <div className="py-3 pl-3">
                      <InstagramIcon className="fill-primary" />
                    </div>
                    <input
                      aria-label="your email"
                      autoComplete="email"
                      placeholder="Insert your Instagram username"
                      className="w-full rounded-full bg-transparent p-2 placeholder-gray-600 outline-none dark:placeholder-white"
                      type="email"
                    />
                    <div className="md:pr-1.5 lg:pr-0">
                      <button
                        type="submit"
                        title="Start buying"
                        className="relative ml-auto h-12 w-12 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 sm:w-auto sm:px-6"
                      >
                        <span className="relative hidden w-max font-semibold text-white md:block">
                          {" "}
                          Get Started{" "}
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden"
                        >
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-12 hidden lg:block">
                  <span className="text-gray-700 dark:text-white">
                    From the most talented{" "}
                    <a
                      href="customers.html"
                      className="text-primary underline dark:text-primaryLight"
                    >
                      Team
                    </a>{" "}
                    !
                  </span>
                  <div className="mt-5 flex -space-x-1 [&>img]:h-10 [&>img]:w-10 [&>img]:rounded-full [&>img]:object-cover [&>img]:ring-4 [&>img]:ring-gray-100 dark:[&>img]:ring-gray-900">
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
                {/* <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                    <a
                      href="/register"
                      className="before:bg-primary astro-Z4ZYBUMP"
                    >
                      <span className="text-white astro-Z4ZYBUMP">
                        Get started
                      </span>
                    </a>
                    <a
                      href="#solution"
                      className="before:border before:border-transparent before:bg-primary/10 dark:before:border-gray-700 dark:before:bg-gray-800 astro-Z4ZYBUMP"
                    >
                      <span className="text-primary dark:text-white astro-Z4ZYBUMP">
                        Learn more
                      </span>
                    </a>
                  </div> */}
              </div>
            </div>
            <div className="absolute hidden lg:block -right-16">
              <div className="mr-0">
                <Image
                  className="h-full object-cover object-left"
                  src="/images/thumb-banner-instagram.png"
                  alt="app screenshot"
                  width={450}
                  height={450}
                />
              </div>
            </div>
          </div>
          <ClientSection />
        </div>
      </div>
    </div>
  );
}

export default Hero;
