"use client";

import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import TiktokIcon from "@/components/shared/icons/TiktokIcon";
import { PlatformType, platforms } from "@/config/platforms";
import React from "react";

const getIcon = (platform: PlatformType) => {
  switch (platform) {
    case "instagram":
      return InstagramIcon;
    case "tiktok":
      return TiktokIcon;

    default:
      return TiktokIcon;
  }
};

type Props = { platform: PlatformType };

const PlatformServiceForm = ({ platform }: Props) => {
  const Icon = getIcon(platform);
  return (
    <div className="md:max-w-[570px] w-full mx-auto md:mt-8 relative">
      <div className="z-10 relative">
        <form className="mt-12">
          <div className="relative flex items-center rounded-full border border-primary/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3">
            <div className="py-3 pl-3">
              <Icon className="fill-primary" />
            </div>
            <input
              aria-label="your email"
              autoComplete="email"
              placeholder={`Enter ${platform.toUpperCase()} channel name or URL`}
              className="w-full rounded-full bg-transparent p-2 placeholder-gray-600 outline-none dark:placeholder-white"
              type="email"
            />
            <div className="md:pr-1.5 lg:pr-0">
              <button
                type="submit"
                title="Start buying"
                className="relative ml-auto h-12 w-12 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6"
              >
                <span className="relative hidden w-max font-semibold text-white dark:text-gray-900 md:block">
                  {" "}
                  Grow my channel
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
      </div>
    </div>
  );
};

export default PlatformServiceForm;
