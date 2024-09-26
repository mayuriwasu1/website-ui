import { ArrowRightIcon } from "@heroicons/react/24/outline";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export default function Contact() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-24">
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg text-4xl sm:text-6xl">
                <h1>
                  LETS START SOMETHING{" "}
                  <p className="text-[#EE011C]">NEW</p> 
                  TOGETHER
                </h1>
              </div>
              <section className="py-4">
                <div className="mx-auto max-w-7xl px-6 lg:px-2">
                  <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-10 lg:border-l lg:pl-8">
                      <figure className="mt-10 flex flex-auto flex-col justify-between">
                      <img
                            alt=""
                            src="/images/milly.svg"
                            className="h-14 w-14 rounded-full bg-[#f0f2f7]"
                          />
                        <blockquote className="text-sm text-gray-500 mt-4">
                          <p>
                          All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.
                          </p>
                        </blockquote>
                        <figcaption className="mt-10 flex items-center gap-x-6">
                          <div className="text-base">
                            <div className="font-medium text-gray-800">
                              Milly Cyrus, Global Lead
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                    <div className="flex flex-col border-t border-gray-900/10 pt-0 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-6">
                      <figure className="mt-10 flex flex-auto flex-col justify-between">
                      <img
                            alt=""
                            src="/images/vinita.svg"
                            className="h-14 w-14 rounded-full bg-gray-50"
                          />
                        <blockquote className="text-sm text-gray-500 mt-4">
                          <p>
                          All-round advertising go to lady. Has a thing for stories: she calls this the side effect of a life lived with plot twists.
                          </p>
                        </blockquote>
                        <figcaption className="mt-10 flex items-center gap-x-6">

                          <div className="text-base">
                            <div className="font-medium text-gray-800">
                              Vinita Singh, Asst, Global Lead
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div>
              <div className="aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg px-3 lg:px-8 mt-6">
              <p className="mb-4 text-xl tracking-tight text-gray-900 sm:text-2xl">
              Give us few details and we’ll get in touch
                </p>
                <form className="">
                  <div className="space-y-6 sm:space-y-12">
                    <div className="">
                      <input
                        type="text"
                        placeholder="Name*"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-red-500 transition duration-300 bg-transparent pb-3"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Company name"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-red-500 transition duration-300 bg-transparent pb-3"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Email*"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-red-500 transition duration-300 bg-transparent pb-3"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Phone no*"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-red-500 transition duration-300 bg-transparent pb-3"
                      />
                    </div>
                    <div className="">
                      <input
                        type="text"
                        placeholder="Message*"
                        className="w-full border-b border-gray-400 focus:outline-none focus:border-red-500 transition duration-300 bg-transparent pb-3"
                      />
                    </div>
                  </div>
                  <a href="/" className="mt-6 flex justify-center gap-x-6 rounded-full bg-[#EE011C] px-3 py-2 sm:py-4 w-full hover:bg-red-500 curser-pointer">
                    <button
                      type="submit"
                      className="text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                    >
                      CONTACT US
                    </button>
                    <ArrowRightIcon className="h-6 w-6 text-white" />
                  </a>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
