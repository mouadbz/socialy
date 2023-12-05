"use client";

import React, { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const FaqItemComponent = ({
  question,
  answer,
  isActive,
  onClick,
}: {
  question: string;
  answer: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <div>
      <dl className="faq mx-auto max-w-2xl">
        <dt className="text-lg">
          <button
            type="button"
            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
            aria-controls="faq-0"
            data-active="false"
            onClick={onClick}
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {question}
            </span>
            <span className="ml-6 flex h-7 items-center">
              <svg
                className={`arrow-down h-6 w-6 transform duration-300 ${
                  isActive ? "rotate-180" : "rotate-0"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </dt>
        <dd
          className={`faq-answer block overflow-hidden pr-12 duration-300 ease-in-out `}
          style={{
            maxHeight: isActive ? "100%" : "0",
          }}
        >
          <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
            {answer}
          </p>
        </dd>
      </dl>
    </div>
  );
};

const Faq = () => {
  const faqList = [
    {
      question: "01. Why should I buy your services?",
      answer:
        "The number of fans and likes and other metrics of your channel is one of the most common indicators of success and health of your channel. If you are going to boost your profile, you’ve got to do everything that you can to boost your numbers, because that is what your viewers will see first. s, as these are what you see first. This means producing the best content, following a sophisticated strategy, and even purchasing fans at the right time. That way you can ensure that people not only see you have great content but also notice that the social proof (likes, followers, engagement etc.) confirms the popularity of your account. Here at Tubekick, we have years of experience offering social media services to our customers. We only work with high-quality accounts that help to elevate the profile of your account and we aim to always offer these services at the best price possible. Last but not least, we always keep your accounts 100% confidential so no one will know that you have been using our services to boost your profile.",
    },
    {
      question: "dsd?",
      answer:
        " Lordsr adipisicing elit. Laborum quod pariatur possimus at fugit natus aspernatur molestiae. Velit, odio modi provident necessitatibus molestias qui voluptatibus similique magnam a nam rem!",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="my-32">
      <div className="mx-auto px-4 sm:px-12 xl:max-w-5xl xl:px-0">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800">
          {faqList.map(({ question, answer }, idx) => (
            <FaqItemComponent
              key={idx}
              question={question}
              answer={answer}
              isActive={activeIndex === idx}
              onClick={() => handleFaqClick(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
