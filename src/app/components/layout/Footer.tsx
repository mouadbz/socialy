import React from "react";
import Image from "next/image";
import { routes } from "@/routes";
import Link from "next/link";
import { siteMetadata } from "@/data/siteMetadata";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="bg-gradient-to-b from-transparent to-gray-100 py-12 dark:to-gray-900">
      <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
        <a
          href="#home"
          aria-label="logo"
          className="flex items-center justify-center space-x-2"
        >
          <div aria-hidden="true" className="flex flex-col space-y-0.5">
            <div className="h-0 w-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-gray-900 dark:border-b-white" />
            <div className="mx-auto h-1 w-4 rounded-full bg-primary" />
          </div>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            {siteMetadata.siteName}
          </span>
        </a>
        <ul
          role="list"
          className="mt-12 flex flex-wrap items-center justify-center gap-4 py-4 text-gray-600 dark:text-gray-400 sm:gap-8"
        >
          {routes.map(({ label, route }, idx) => (
            <li role="listitem" key={idx}>
              <Link
                href={route}
                className="duration-300 hover:text-primary dark:hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        {/* <div className="m-auto mt-4 flex w-max items-center justify-between space-x-4 text-gray-500">
          <a
            className="duration-300 hover:text-gray-600 dark:hover:text-white"
            href="https://twitter.com/@tailus_ui"
            title="twitter"
            target="blank"
            aria-label="twitter"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="m-auto h-5 w-5"
              viewBox="0 0 16 16"
            >
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
          </a>
          <a
            className="duration-300 hover:text-gray-600 dark:hover:text-white"
            href="#"
            title="facebook"
            target="blank"
            aria-label="facebook"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="m-auto w-5"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
        </div> */}
        <div className="mt-12 text-center">
          <span className="text-sm tracking-wide text-gray-500">
            Copyright © {siteMetadata.siteName} {new Date().getFullYear()} | All
            rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
