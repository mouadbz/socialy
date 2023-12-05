import React from "react";

type Props = {};

const Customers = (props: Props) => {
  return (
    <div>
      <section className="overflow-x-hidden pt-32 sm:pt-40 md:pt-48 lg:pt-56">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="relative z-10 text-center md:mx-auto md:w-5/6 lg:w-4/6">
            <h1 className="relative text-center text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Working with technology leading
              <span className="relative">
                <svg
                  className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  viewBox="0 0 260 15.6"
                >
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n                                    .st0 {\n    fill: #957fef\n}\n                                ",
                    }}
                  />
                  <path
                    className="st0"
                    d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"
                  />
                  <path
                    className="st0"
                    d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
                  />
                  <path
                    className="st0"
                    d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"
                  />
                </svg>
                <span className="relative bg-gradient-to-r from-secondaryLight to-secondary bg-clip-text px-2 text-transparent">
                  companies.
                </span>
              </span>
            </h1>
            <p className="mt-6 text-gray-700 dark:text-gray-300">
              Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi
              esse aspernatur impedit nihil quisquam, voluptates placeat
              architecto adipisci id cum enim.
            </p>
          </div>
        </div>
      </section>
      <section className="my-16">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="text-gray-600 dark:text-gray-300">
            <div className="group relative mb-12 overflow-hidden rounded-3xl border border-gray-100 bg-white pr-8 pl-8 pt-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:pr-0">
              <a className="gap-6 lg:flex" href="/pages/story">
                <div className="relative gap-6 pb-6 sm:flex sm:pb-2 lg:block lg:w-1/3 lg:pb-8">
                  <div className="-mx-6 -mt-6 flex rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800 sm:-mr-0 sm:w-1/3 lg:mx-0 lg:mt-0 lg:w-auto lg:rounded-lg">
                    <img
                      className="m-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert"
                      src="/images/clients/airbnb.svg"
                      loading="lazy"
                      alt="airbnb"
                    />
                  </div>
                  <div className="mt-6 sm:mt-0 sm:w-2/3 sm:pb-6 lg:mt-6 lg:w-auto lg:pb-0">
                    <p className="mb-6 text-gray-600 dark:text-gray-400">
                      Sint libero voluptas veniam at reprehenderit, veritatis
                      harum et rerum.
                    </p>
                    <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                      <p className="mt-2 mb-8 text-gray-600 dark:text-gray-300">
                        Veniam sint non cumque quis tempore cupiditate. Sint
                        libero voluptas veniam at reprehenderit, veritatis harum
                        et rerum.
                      </p>
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="/images/avatars/avatar-2.webp"
                          alt="user avatar"
                          width={200}
                          height={200}
                          loading="lazy"
                        />
                        <div>
                          <h2 className="text-lg font-medium text-gray-700 dark:text-white">
                            Daniel Doe
                          </h2>
                          <p className="text-sm text-gray-500">Sales manager</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="-mx-6 rounded-t-2xl border-r border-t border-l border-gray-100 pr-2 pt-2 pl-2 dark:border-gray-700 lg:mx-0 lg:w-2/3 lg:rounded-tr-none lg:rounded-tl-2xl lg:border-r-0 lg:pr-0">
                  <img
                    className="rounded-t-xl lg:rounded-tl-xl lg:rounded-br-3xl lg:rounded-tr-none"
                    src="/images/work.webp"
                    alt="yves kalume talk"
                    loading="lazy"
                    width={2500}
                    height={1406}
                  />
                </div>
              </a>
            </div>
            <div className="mb-12 grid gap-6 lg:grid-cols-2">
              <a
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
                href="/pages/story"
              >
                <div className="relative gap-6 sm:flex">
                  <div className="-mx-6 -mt-6 flex rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-900/60 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 md:w-2/5 lg:w-1/3">
                    <img
                      className="m-auto w-auto sm:h-16 lg:h-12"
                      src="/images/clients/nuxt.svg"
                      loading="lazy"
                      alt="nuxtjs logo"
                    />
                  </div>
                  <div className="mt-6 space-y-6 sm:mt-0 sm:w-2/3 md:w-3/5 lg:w-2/3">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Increased sales by 360%
                      </h2>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Sint libero voluptas veniam at reprehenderit, veritatis
                        harum et rerum.
                      </p>
                      <div className="relative my-4 before:absolute before:inset-y-0 before:-left-0.5 before:z-[1] before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-gray-400 after:absolute after:inset-y-0 after:-right-0.5 after:z-[1] after:my-auto after:h-1 after:w-1 after:rounded-full after:bg-gray-400">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 m-auto h-px w-full border-t border-dashed dark:border-gray-600"
                        />
                        <div className="relative flex items-center justify-between pl-12 pr-6">
                          <div className="relative flex items-center before:absolute before:inset-y-0 before:-right-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-red-400 dark:bg-gray-800">
                            <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-sm tracking-wider text-red-900 dark:border-red-300/40 dark:bg-red-500/10 dark:text-red-300">
                              132k
                            </span>
                          </div>
                          <div className="relative flex items-center before:absolute before:inset-y-0 before:-left-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-green-400 dark:bg-gray-800">
                            <span className="rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-sm tracking-wider text-green-900 dark:border-green-300/40 dark:bg-green-500/10 dark:text-green-300">
                              396k
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Sint libero voluptas veniam at reprehenderit, veritatis
                        harum et rerum.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <a
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none"
                href="/pages/story"
              >
                <div className="relative gap-6 sm:flex">
                  <div className="-mx-6 -mt-6 flex rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-900/60 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 md:w-2/5 lg:w-1/3">
                    <img
                      className="m-auto w-auto sm:h-16 lg:h-12"
                      src="/images/clients/nuxt.svg"
                      loading="lazy"
                      alt="nuxtjs logo"
                    />
                  </div>
                  <div className="mt-6 space-y-6 sm:mt-0 sm:w-2/3 md:w-3/5 lg:w-2/3">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Increased sales by 360%
                      </h2>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        Sint libero voluptas veniam at reprehenderit, veritatis
                        harum et rerum.
                      </p>
                      <div className="relative my-4 before:absolute before:inset-y-0 before:-left-0.5 before:z-[1] before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-gray-400 after:absolute after:inset-y-0 after:-right-0.5 after:z-[1] after:my-auto after:h-1 after:w-1 after:rounded-full after:bg-gray-400">
                        <div
                          aria-hidden="true"
                          className="absolute inset-0 m-auto h-px w-full border-t border-dashed dark:border-gray-600"
                        />
                        <div className="relative flex items-center justify-between pl-12 pr-6">
                          <div className="relative flex items-center before:absolute before:inset-y-0 before:-right-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-red-400 dark:bg-gray-800">
                            <span className="rounded-full border border-red-100 bg-red-50 px-2.5 py-1 text-sm tracking-wider text-red-900 dark:border-red-300/40 dark:bg-red-500/10 dark:text-red-300">
                              132k
                            </span>
                          </div>
                          <div className="relative flex items-center before:absolute before:inset-y-0 before:-left-0.5 before:my-auto before:h-1 before:w-1 before:rounded-full before:bg-green-400 dark:bg-gray-800">
                            <span className="rounded-full border border-green-100 bg-green-50 px-2.5 py-1 text-sm tracking-wider text-green-900 dark:border-green-300/40 dark:bg-green-500/10 dark:text-green-300">
                              396k
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        Sint libero voluptas veniam at reprehenderit, veritatis
                        harum et rerum.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <a
                className="group relative row-start-1 rounded-3xl border border-gray-100 bg-white p-8 dark:border-gray-700 dark:bg-gray-800 sm:col-span-2 md:row-start-2 lg:col-span-1 lg:row-start-1"
                href="/pages/story"
              >
                <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80" />
                <div className="relative gap-6 sm:flex lg:block">
                  <div className="-mx-6 -mt-6 flex rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800 sm:mr-0 sm:-mb-6 sm:-ml-6 sm:-mt-6 sm:w-1/3 lg:-mx-6 lg:mb-0 lg:w-auto">
                    <img
                      className="m-auto w-auto dark:contrast-100 dark:grayscale dark:invert sm:h-16 lg:h-12"
                      src="/images/clients/lilly.png"
                      loading="lazy"
                      alt="lilly"
                    />
                  </div>
                  <div className="mt-6 space-y-6 sm:mt-0 sm:w-2/3 lg:mt-6 lg:w-auto">
                    <p className="text-gray-600 dark:text-gray-400">
                      Sint libero voluptas veniam at reprehenderit, veritatis
                      harum et rerum.
                    </p>
                    <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                      <p className="mt-2 mb-8 text-gray-600 dark:text-gray-300">
                        Veniam sint non cumque quis tempore cupiditate. Sint
                        libero voluptas veniam at reprehenderit, veritatis harum
                        et rerum.
                      </p>
                      <div className="flex gap-4">
                        <img
                          className="h-12 w-12 rounded-full"
                          src="/images/avatars/avatar-4.webp"
                          alt="user avatar"
                          width={200}
                          height={200}
                          loading="lazy"
                        />
                        <div>
                          <h2 className="text-lg font-medium text-gray-700 dark:text-white">
                            Randy Doe
                          </h2>
                          <p className="text-sm text-gray-500">Founder CEO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
              <div className="space-y-4">
                <div className="relative rounded-3xl border border-gray-100 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                  <div className="relative">
                    <div className="rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800">
                      <img
                        className="mx-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert"
                        src="/images/clients/microsoft.svg"
                        loading="lazy"
                        alt="microsoft"
                      />
                    </div>
                  </div>
                </div>
                <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                  <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80" />
                  <div className="relative">
                    <div className="-mx-6 -mt-6 rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800">
                      <img
                        className="mx-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert"
                        src="/images/clients/ge.svg"
                        loading="lazy"
                        alt="ge"
                      />
                    </div>
                    <p className="mb-3 mt-6 text-gray-600 dark:text-gray-400">
                      Sint libero voluptas veniam at reprehenderit, veritatis
                      harum et rerum.
                    </p>
                    <div className="flex items-end gap-4">
                      <a href="https://tailus.io">website.com</a>
                      <a
                        aria-label="got to website"
                        className="relative ml-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-100 before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 group-hover:before:scale-110 dark:before:border-gray-700 dark:before:bg-gray-800"
                        href="/pages/contact"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="relative h-4 w-4 transition duration-300 group-hover:-rotate-45"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none">
                  <div className="absolute inset-0 hidden scale-105 rounded-3xl bg-gradient-to-b from-transparent dark:block dark:to-gray-900/80" />
                  <div className="relative">
                    <div className="-mx-6 -mt-6 rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800">
                      <img
                        className="mx-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert"
                        src="/images/clients/airbnb.svg"
                        loading="lazy"
                        alt="airbnb"
                      />
                    </div>
                    <p className="mb-3 mt-6 text-gray-600 dark:text-gray-400">
                      Sint libero voluptas veniam at reprehenderit, veritatis
                      harum et rerum.
                    </p>
                    <div className="flex items-end gap-4">
                      <a href="https://tailus.io">website.com</a>
                      <a
                        aria-label="go to website"
                        className="relative ml-auto flex h-12 w-12 items-center justify-center before:absolute before:inset-0 before:rounded-full before:border before:border-gray-200 before:bg-gray-100 before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 group-hover:before:scale-110 dark:before:border-gray-700 dark:before:bg-gray-800"
                        href="/pages/contact"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="relative h-4 w-4 transition duration-300 group-hover:-rotate-45"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative rounded-3xl border border-gray-100 bg-white p-2 dark:border-gray-700 dark:bg-gray-800">
                  <div className="relative">
                    <div className="rounded-2xl border border-dashed bg-gray-100 p-10 dark:border-gray-700 dark:bg-gray-800">
                      <img
                        className="mx-auto h-12 w-auto dark:contrast-100 dark:grayscale dark:invert"
                        src="/images/clients/microsoft.svg"
                        loading="lazy"
                        alt="airbnb"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-32">
        <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
          <div className="relative mx-auto flex h-56 w-56 items-center justify-center">
            <div className="it absolute inset-0 flex flex-wrap opacity-40 blur-3xl dark:opacity-70">
              <div aria-hidden="true" className="h-1/2 w-1/2 bg-primary" />
              <div aria-hidden="true" className="h-1/2 w-1/2 bg-purple-500" />
              <div
                aria-hidden="true"
                className="h-1/2 w-1/2 rounded-bl-full bg-secondary"
              />
              <div
                aria-hidden="true"
                className="h-1/2 w-1/2 rounded-br-full bg-secondaryLight"
              />
            </div>
            <svg
              className="relative m-auto h-12 w-auto text-blue-900 dark:text-white"
              viewBox="0 0 290 270"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M184.589 48.5615L259.174 177.176C271.689 198.757 264.34 226.397 242.76 238.912C221.862 251.03 195.284 244.523 182.258 224.504L168.033 245.393C189.368 269.831 225.685 276.557 254.799 259.673C287.846 240.509 299.1 198.183 279.936 165.136L204.374 34.8366C201.937 30.6351 199.126 26.7859 196.008 23.3066L184.589 48.5615Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M184.19 92.696L108.622 222.992C96.1058 244.572 68.4656 251.92 46.8855 239.405C25.3055 226.889 17.9575 199.249 30.4733 177.668L106.042 47.3721C118.558 25.792 146.198 18.444 167.778 30.9599C189.358 43.4757 196.706 71.116 184.19 92.696ZM85.2807 35.3313C104.447 2.28524 146.773 -8.96694 179.819 10.1989C212.865 29.3647 224.117 71.6908 204.951 104.737L129.383 235.033C110.217 268.079 67.8908 279.331 34.8447 260.166C1.79866 241 -9.45348 198.674 9.71234 165.628L85.2807 35.3313Z"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M108.622 222.992L184.19 92.696C196.706 71.116 189.358 43.4757 167.778 30.9599C146.198 18.444 118.558 25.792 106.042 47.3721L30.4733 177.668C17.9575 199.248 25.3054 226.889 46.8855 239.405C68.4656 251.92 96.1058 244.572 108.622 222.992ZM179.819 10.1989C146.773 -8.96694 104.447 2.28524 85.2807 35.3313L9.71233 165.628C-9.4535 198.674 1.79865 241 34.8447 260.166C67.8907 279.331 110.217 268.079 129.383 235.033L204.951 104.737C224.117 71.6908 212.865 29.3647 179.819 10.1989Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="relative -mt-12">
            <h2 className="mb-8 text-4xl font-bold text-blue-900 dark:text-white md:text-6xl">
              Improve your
              <span className="relative">
                <svg
                  className="absolute inset-x-0 -bottom-1 w-full opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  id="Layer_1"
                  viewBox="0 0 260 15.6"
                >
                  <path
                    className="st0"
                    d="M206.8 7.3l-.1.3c.1-.2.2-.3.1-.3zM234.7 10h-.1c-.2.4-.1.3.1 0zM54.8 4.2l-.6-.4c.2.4.4.5.6.4zM17.1 5.1zM34.5 9.6l.1.3c0-.2 0-.3-.1-.3zM22.4 10.8c-.3-.1-.7-.1-1-.1.2.1.7.1 1 .1zM17.5 5c-.1.1-.2.1-.4.2.2-.1.3-.2.4-.2zM52.7 9.8l.5.9c-.1-.3-.3-.6-.5-.9zM19.5 11.6c-.2-.2-.4-.2-.6-.3 0 .2.3.3.6.3zM120.9 11.4c-.1.1-.2.2-.2.3.3-.1.3-.2.2-.3zM80.9 10.4h-.1s.1.1.2.1l-.1-.1zM92.6 10.4l-.2.2c.2-.1.2-.1.2-.2zM72.1 11.3c-.1.1-.3.2-.4.3l.4-.3z"
                  />
                  <path
                    className="st0"
                    d="M260 6c-1-.6-4.7-1.2-5.8.3-.2-.1.1-.3.2-.4-.9.2-2.2.1-3.6 0s-2.9-.2-4.2 0c-1 1.5-3.9-.6-4.8 1.4l.5-.4c.9.5-1.2 1.4-1.5 1.9-.8-1.2-.1-1-1-2l1.1.4-.3-1c-3.1 2.8-6.2-.9-8.2 1.1.1-.1.1-.3.2-.4-1.4-.5-2.3.8-3.3 1.2-.1-.5.6-.9 1.1-1.3-2.4-.3-6.4 1.2-9 .4-.9.7.4.9-.6 1.5-.8-.2-1.4-.7-.4-1.1-2.3-1.2-7.6 1-11.1-.2-1.8.8-.7 1.1-3.5 1.6.7-.5-.7-1.7 1-1.7l.2-.5c-2.8-.1-6.6-.3-8.1 1.2-.1-1.1-.5-.2-1.6-.8-.4.1 0 .2.2.2-1 .9-1.6-.1-2.3.1l.3-.2-2 .7c-.3-.2-.8-.4-.9-.7v.8c-1.1 0-.5-1-1.9-.8l.3.6c-.9-.4-2.2.4-2.4-.5 0-.2.1-.1.4-.1-1.3-1.2-3.5.3-5.1-.3l.4 1.3c-1.6.4-1-.3-.9-.7-1.1 0-1.3-.4-2.7-.6-.7.3-.4.5-.6.8l-1.5-.4 1-.7c-2.3 1.8-5.6-.4-7.2 1.2-.8-.4.8-.7.3-1-2.6-.9-6 1-8.2 0-3.6-1-7.8-.4-11.8-1.1l.1.3-2.9-.4c-.8.7-2.7.3-4 1.1.1-.3-.1-.7.2-.9-1.2.1-2.6.4-3.3-.1l.4-.3c-2.7-.3-6.4-.5-7.9.1-.9 0-.9-.6-1.1-1-1.6-.1-2.6.2-3.9.7-.3-.2-.7-.3-1-.6l-.6.8c-.6-.1-.1-.7-.6-.9-2.5.9-5.3-.1-7-.1l.2.4c-.7.3-2.1-.3-1.2-.7-3.4-.6-5.1 1.2-9.6.8-.6-1.5-4.1.3-4.8-1.4-1.9.4-3.2-.3-4.5.6 0-.2-.2-.2.1-.3-.8-.6-3.3-.2-5.3.2l-.1-.5c-.9 1.2-4.2.9-4.9 2-.2-.2.4-.5.7-.7-1-1.1-1.8.5-3.1.2.1-.3-.3-.6 0-.8-4.4-1.2-10.6.7-16.3-.1-1.6 0 .6 1.2-1.5 1.1-.6-.6 1-1.1-.3-1.4-.9.7-1.3.5-2.6.5.2-.4 0-.6.9-.9-.7-.5-3.1.9-4.5 0 .1.3-.2.5-.5.7-2.1 1-4.9-.9-5.1-.4 0 0-.7.2-.1.3-.8 0-1.9-.2-1.7-.7-.4.3-.8.8-1.4.8l.3-.6c-.4.1-.8.5-1.1.6l.6.4c-.9-.5-2.6.8-2.6-.4h.3l-1.7-.5c-.7.5-1.3 1-2.5.9-.5-1.3-2.9-.2-4.3-.3l.1-.4c-1.1.6-4 .4-3.5.6-1.1 0-2.6-.2-2-.6-.8.1-2.7.1-3.2.9l-1.8-1c-1 1.6-3.6-.5-3.6 1.2-1-.2-.8-.6-1.5-.9-1.4.9-2.8.8-4.2.7v-.2c-1.4-.1-3.1.8-5.1 1l-.5-1.2c-1 .2-1.3 1.2-2.3 1-.2-.2 0-.3.2-.3-1 .3-2.3.1-3.1-.2-1.5 1-2.7.7-3.9 1.8-1.3-1 1.7-.6.6-1.6-2.2-.4-4.4.4-6.7 1.1-.2-.2 0-.4.1-.7 0 0-1.2.9-2.2 1.8C.9 8.3 0 9.4.5 10c-.5.9-1.2 1.4.9 2 .6-.5 2.5-1.3 2.9-.4l.1-.9c2.6-.6.4 1.8 3.6 1.6l-.7-.3c.6-.1 1.1-.7 1.8-.5.2.2-.2.4-.5.6.9-.5 1.7-.9 2.6-1.4.1.5.1.8-.4 1.2 2.5-.2-.6-1.6 2.4-1.4.6.4-.2.6-.5.9 1.4.7 2.3-.1 3.8-.6.1.8-.9.7.3 1.2-.3-.4-.5-1.1.5-1.2-.4.8.7.4 1.6.5-.2-.3-.1-.6.2-.8.4-.1.8.1 1.4.1l-1.1-.7c1.5-.8 2.4.3 3.6.6-.1.1-.3.3-.5.3 1.2.3 2.5.9 4.1.1l-.3.1c2.9-.9-1-1.3 2.4-2.2 1.1.1-.4 2.6 2.1 1.6-1.3-.6 1.6-1.7 3.1-2L32.4 10c.6 0 1.6-.5 2-.3l-.1-.3c-.2-1.3 1.9.1 3-.7-1.3 1.8-1.4 1.5-1.6 3.2 1-1 2.2-1.9 4.1-1.8l-1.5 1.4c2.5.2 5.5-1.9 7.6-3-.5 1 .3 1.4-.6 2.2l2.4-.3-.7 1.1c1-1.2 2.1-.4 1.9-1.9-.3.2-.2.4-.7.3.1-.4.5-1.4 1.7-1.3.9.3-.5.6-.2 1 .8-.6.9.3 1.7-.1l-.8-.6c.6-.9 1.4-.1 2.2-.5-1 .4-.7.9-.3 1.4l-.1-.1c.8-.1 1.6-.7 2-.2l-.5 1.2.9-.9c.3.1.6.6 0 .8 2.8.7-.1-2.5 3.6-1.5 0 .5-.4.8-1.4.5-.2.7.1 1.1 1.1 1.4v.1c1.9 0 4.4 0 5.6-.8.4.3 0 .6-.4.9 2.1.4 2.8-.7 5 .1l-1-.4c1.4-.6 4-.8 5.3.1l-.4.3c1.3-.7 3.5.6 4 0-.6-.4 0-.6-.8-1l3.4-.7.2 1.2 1.8-.4c-.4-.5 2.4.4 2.5-.7 1 .4-.4.9-.8 1.4 1-.3 1.1.2 2.1-.5l1 1.1 2.6-.7c-.1.1 0 .2-.1.3 1.2-.9 3.1.6 4.6-.9-.1.1-.1.1-.1.2.9-.8 2.9-.2 3.7 0 1.4-.2.6-1 .6-1.4 3.9.4 2.7.3 6-.9 2 1.4-2.4 2.1.1 3 .4-.6 2.1-1.1 4.1-1.3 1.8.5 4.8.9 6.5 1.9l-.2-.9 2.6-.4-1.5 1.2c.4-.3 1.7-.8 2.6-1.2 2.7-.7 1.4 1.9 3.5.7.1.1.1.2.2.3.7-.6 2.4-.3 4.4-.5l-.7 1.1-1.3-.3c.7 1.1 2.1-.1 3.4 0 1.3-.3.7-1.3 1.4-1.6.5.1 1.2-.2 1.6.1 1.1.4.1 1.3-.3 1.8 1-1.1 1.4-.9 3.6-1.3.1.5-.1.8-.4.9.5-.1.9-.3 1.2-.8l.7.7c2.5 1 2.6-2 5.6-1.5-.8.6 2.6 0 3.5.7-1.1.1.4 1.6-.2 2.3 2.4.5 1-1.3 3-1.4l-.9 1.3c1.9-.5.5-.7 2.4-1.1-.5.4.8.4-.3.8 2.5.2 1.9.1 4.1.3l.2-1.3c.7-.1 1 .5 1.2.7-.3 0-.8-.1-.7.1.8 1.2 1.4-.6 2.4.5-.2-.4-.5-1 .4-1.1-.3.8 1.4.8 1.4 1.2-.6-.6 2-.2 2.1-1 1 .7-.4.6-.4 1.1.9-1 3.7 0 4.6-.6 0 .1.1.1.1.2 1.2-.6 3-.7 5.3-1.5l-.8.7c2.2.4 1.4-1.5 3.3-1.5-.4 1.1 3.1 0 2.2 1.2 1.1-.6 2.3-.8 3.1-1.7 1 .6-2.1 1.4-.6 1.8l1.6-.5.3.6c.1-.4 1.5-.4 1.4-.8.2.7.9 1.2.8 1.8 1-.2 2.4.5 3.3-.1l.1.3c1-1.3 3.1-.2 3.6-1.5l.6.7c1.5-.1 1.3-1.5 2-1.8.6 0 1.4-.2 2 0-2 .8 1 1.1 1.4 1.6.8 0 3.1 0 3.7-.7-1 .7-.4 1.2-2.1 1.3.9 1.3 2.6-.2 4.5-.1v.6c2.7-.4 2.8-1.5 4-2.5.3.8.1 1-.7 1.7 1.8.5 4.7-.1 6.7 0 .6.5.2.9-.5 1.1 2.1-.6 4.7.1 6-1.2-.5.5.9.3 1.6.6 0-.3.1-.6.2-.6 1.3-.6 4.1-1.1 5.6-.7l-.5.4c1.7.1 3-.5 4.3-.9 1.3-.4 2.6-.8 4.5-.4.7.3-.7 1.1.7 1 .7-.5.4-1.5 2.2-1.3l-.1.9 1.2-.9c-.7-.7-2.6-.4-1.3-1.2 1.6.8 1.3-.9 3.3 0-.4.1-1 .8-1.3 1.2 2 .4 3.4.1 4.8-.1 1.4-.3 2.8-.6 4.9-.2 2-.8 4.6-1.2 5.9-1.9 0 .9 0 1.7-.8 2.4 1.8 0 2.4-2.1 3.7-.9.7-1.3 4.7-1.2 5-3l2-.8z"
                  />
                  <path
                    className="st0"
                    d="M58.1 11.1c-1 0-1.9 0-2.3.2.2.2 2.3.6 2.3-.2zM208.2 13.3c-.1 0-.3.1-.4.1.1 0 .3 0 .4-.1zM216.3 12.9c-.1-.1-.2-.2-.4-.3 0 .3.1.5.4.3zM132.6 11.5zM178.5 13.7c.7-.4 1-.7 1-1-.4.1-.7.3-1 1zM163 12.6c-.1.1-.2.1-.3.2.3-.1.3-.2.3-.2zM130.2 12c.7-.4 1.6-.3 2.4-.5-.7.2-1.9-.3-2.4.5zM226.1 11.4l-.7.6.8-.4zM218.6 12c-.3-.1-1.7.3-1.3.6.4-.3.9-.5 1.3-.6zM189.6 11.4l-.3.6.7-.5z"
                  />
                </svg>
                <span className="relative px-2 text-blue-800 dark:text-indigo-200">
                  workflow
                </span>
              </span>
            </h2>
            <p className="mb-12 mt-6 text-gray-600 dark:text-gray-300 md:mx-auto md:w-5/6 lg:w-1/2">
              Saepe nulla ab nobis itaque corporis fuga illo doloribus sequi
              esse aspernatur impedit nihil quisquam, voluptates placeat
              architecto adipisci id cum enim.
            </p>
            <a
              className="relative mx-auto flex h-11 w-max items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition-transform before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight"
              href="/pages/contact"
            >
              <span className="relative text-base font-semibold text-white dark:text-gray-900">
                Get started
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Customers;
