import React from "react";
import Image from "next/image";
import { routes } from "@/routes";
import Link from "next/link";
import { siteMetadata } from "@/data/siteMetadata";
import InstagramIcon from "@/components/shared/icons/InstagramIcon";
import { socialMediaLinks } from "@/data/contactInfo";
import TiktokIcon from "@/components/shared/icons/TiktokIcon";

type Props = {};

function Footer({}: Props) {
  return (
    <footer className="border-t border-gray-100 pt-32 pb-8 dark:border-gray-800 bg-primary/40">
      <div>
        <div className="m-auto space-y-8 px-4 text-gray-600 dark:text-gray-400 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="grid grid-cols-8 gap-6 md:gap-0">
            <div className="col-span-8 md:col-span-2 lg:col-span-3">
              <div className="flex h-full items-center justify-between gap-6 border-b border-white py-6 dark:border-gray-800 md:flex-col md:items-start md:justify-between md:space-y-6 md:border-none md:py-0">
                <div>
                  <Link
                    href="/"
                    aria-label="logo"
                    className="flex items-center justify-center space-x-2"
                  >
                    <div
                      aria-hidden="true"
                      className="flex flex-col space-y-0.5"
                    >
                      <div className="h-0 w-0 border-l-[12px] border-r-[12px] border-b-[20px] border-transparent border-b-gray-900 dark:border-b-white" />
                      <div className="mx-auto h-1 w-4 rounded-full bg-primary" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      {siteMetadata.siteName}
                    </span>
                  </Link>
                </div>
                <div className="flex gap-6">
                  <a
                    href={socialMediaLinks.instagram}
                    target="blank"
                    aria-label="Instagram"
                    className="hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span className="sr-only">Instagram</span>
                    <InstagramIcon className="fill-current" />
                  </a>
                  <a
                    href={socialMediaLinks.instagram}
                    target="blank"
                    aria-label="Tiktok"
                    className="hover:text-primary dark:hover:text-primaryLight"
                  >
                    <span className="sr-only">Tiktok</span>
                    <TiktokIcon className="fill-current" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-8 md:col-span-6 lg:col-span-5">
              <div className="grid grid-cols-2 gap-6 pb-16 sm:grid-cols-3 md:pl-16">
                {/* <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    Company
                  </h2>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Customers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Enterprise
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Partners
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        Jobs
                      </a>
                    </li>
                  </ul>
                </div> */}
                <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    Products
                  </h2>
                  <ul className="mt-4 list-inside space-y-4">
                    {routes.map(({ label, route }, idx) => (
                      <li key={idx}>
                        <Link
                          href={route}
                          className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-base font-medium text-gray-800 dark:text-gray-200">
                    Ressources
                  </h2>
                  <ul className="mt-4 list-inside space-y-4">
                    <li>
                      <a
                        href="#"
                        className="text-sm duration-100 hover:text-primary dark:hover:text-white"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-between text-sm md:pl-16">
                <span>
                  © {siteMetadata.siteName} {new Date().getFullYear()}
                </span>

                <span>All right reserved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
