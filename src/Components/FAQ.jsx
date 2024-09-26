import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

const faqs = [
  {
    question:
      "How do I sign up?",
    answer:
    <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit culpa maxime illo et explicabo rerum reiciendis blanditiis at sint, ipsam reprehenderit tempore vitae quidem corporis harum, assumenda architecto molestiae!
  </div>
  },
  {
    question:
      "What information do I need to provide during the sign-up process?",
    answer: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit culpa maxime illo et explicabo rerum reiciendis blanditiis at sint, ipsam reprehenderit tempore vitae quidem corporis harum, assumenda architecto molestiae!
      </div>
    ),
  },
  {
    question: "Is my information secure during the sign-up process?",
    answer: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit culpa maxime illo et explicabo rerum reiciendis blanditiis at sint, ipsam reprehenderit tempore vitae quidem corporis harum, assumenda architecto molestiae!
      </div>
    ),
  },
  {
    question: "Who can apply?",
    answer: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit culpa maxime illo et explicabo rerum reiciendis blanditiis at sint, ipsam reprehenderit tempore vitae quidem corporis harum, assumenda architecto molestiae!
      </div>
    ),
  },
  {
    question: "What are the terms and conditions for the collaboration?",
    answer: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit culpa maxime illo et explicabo rerum reiciendis blanditiis at sint, ipsam reprehenderit tempore vitae quidem corporis harum, assumenda architecto molestiae!
      </div>
    ),
  },
  {
    question: "What is the minimum duration of the contract?",
    answer: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima impedit culpa maxime illo et explicabo rerum reiciendis blanditiis at sint, ipsam reprehenderit tempore vitae quidem corporis harum, assumenda architecto molestiae!
      </div>
    ),
  }
];

export default function FAQ() {
  return (
    <div className="bg-white py-12 sm:py-24 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-white rounded-xl">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12">
                <div className="lg:col-span-5 pl-4 sm:pl-0">
                  <h2 className="text-2xl sm:text-5xl text-semibold leading-10 tracking-tight text-gray-900">
                    Frequently asked
                  </h2>
                  <h2 className="text-2xl sm:text-5xl text-semibold leading-10 tracking-tight text-gray-900 mt-0 sm:mt-4">
                    questions
                  </h2>
                </div>
                <div className="lg:col-span-7 lg:mt-0">
                  <dl className="space-y-6 px-4 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                      <Disclosure as="div" key={faq.question} className="">
                        {({ open }) => (
                          <>
                            <dt className="w-full">
                              <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 mt-3">
                                <span className="text-base sm:text-lg leading-7">
                                  {faq.question}
                                </span>
                                <span className="ml-6 flex h-7 items-center">
                                  {open ? (
                                    <ChevronUpIcon
                                      className="h-5 w-5 text-gray-600"
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <ChevronDownIcon
                                      className="h-5 w-5 text-gray-600"
                                      aria-hidden="true"
                                    />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </dt>
                            <Disclosure.Panel as="dd" className="mt-2 pr-12">
                              <div className="text-base sm:text-lg leading-7 text-gray-600">
                                {faq.answer}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
