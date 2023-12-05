import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import CustomLink from "@/components/shared/ui-kits/CustomLink";
import { siteMetadata } from "@/data/siteMetadata";
import { routes } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="relative astro-ESKEKC2M">
      <nav className="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent astro-ESKEKC2M">
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4 astro-ESKEKC2M">
            <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max astro-ESKEKC2M">
              <Link
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2 astro-ESKEKC2M"
              >
                <div
                  aria-hidden="true"
                  className="flex space-x-1 astro-ESKEKC2M"
                >
                  <div className="h-4 w-4 rounded-full bg-gray-900 dark:bg-white astro-ESKEKC2M" />
                  <div className="h-6 w-2 bg-primary astro-ESKEKC2M" />
                </div>
                <span className="text-2xl font-bold text-gray-900 dark:text-white astro-ESKEKC2M">
                  {siteMetadata.siteName}
                </span>
              </Link>
              <div className="relative flex max-h-10 items-center lg:hidden astro-ESKEKC2M">
                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative -mr-6 p-6 astro-ESKEKC2M toggled"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 astro-ESKEKC2M"
                  />
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 transition duration-300 dark:bg-gray-300 astro-ESKEKC2M"
                  />
                </button>
              </div>
            </div>
            {/* <div
              id="navLayer"
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 hidden astro-ESKEKC2M origin-top scale-y-100"
            /> */}
            <div
              id="navlinks"
              className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none astro-ESKEKC2M !lg:translate-y-0"
            >
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0 astro-ESKEKC2M">
                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm astro-ESKEKC2M">
                  {routes.map(({ label, route, icon: Icon }, idx) => (
                    <li className="astro-ESKEKC2M" key={idx}>
                      <Link
                        href={route}
                        className="flex items-center hover:text-primary transition dark:hover:text-white md:px-3 astro-ESKEKC2M"
                      >
                        <Icon className="h-5 me-1" />
                        <span className="astro-ESKEKC2M">{label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 lg:mt-0 astro-ESKEKC2M lg:border-l border-primary/25 lg:pl-6">
                <CustomLink text="Get Started" href="/" />
              </div>
              {/* <ThemeSwitcher /> */}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
