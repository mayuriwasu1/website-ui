import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <>
      <div className="bg-white pt-18 sm:pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-8 sm:mt-0">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="mt-2 flex flex-wrap gap-y-0 sm:gap-y-4 text-2xl lg:text-8xl font-medium tracking-tight text-gray-900">
              <h2>WE ARE A </h2>
              <div className="flex">
                <div>GLOBAL</div>
                <div className="text-[#EE011C] mx-3 sm:mx-4">PRODUCTION</div>
              </div>
              <h2>AGENCY</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden bg-white mt-6 sm:mt-12 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-[65%_35%] justify-around items-center">
            <div>
              <p className="text-base sm:text-2xl leading-5 sm:leading-8 text-black font-regular sm:font-semibold text-[#111010]">
                Designed with the specific needs of large B2B enterprises in
                mind, <br /> our platform offers a comprehensive solution to
                simplify.
              </p>
              <div className="block sm:flex mt-10 gap-5 items-center">
                <div className="max-w-[350px] flex justify-center gap-x-6 rounded-full bg-[#EE011C] px-3 py-2 sm:py-4 w-full hover:bg-red-500 curser-pointer">
                  <button
                    type="submit"
                    className="text-base font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                  >
                    Get professional video services
                  </button>
                  <ArrowRightIcon className="h-6 w-6 text-white" />
                </div>
                <div className="relative flex items-center mt-6 sm:mt-0 justify-center sm:justify-auto">
                  <div className="z-40 h-12 w-12 bg-gray-100 rounded-full -mr-4">
                    <img alt="" src="/images/vinita.svg" />
                  </div>
                  <div className="z-30 h-12 w-12 bg-gray-100 rounded-full">
                    <img alt="" src="/images/milly.svg" />
                  </div>
                </div>
                <div className="text-center sm:text-auto">
                  <p className=" text-base font-medium text-[#111010]">Marin / Ayesha</p>
                  <p className="text-base text-gray-600">Global Services</p>
                </div>
              </div>
            </div>
            <div>
              <img
                alt=""
                src="/images/Mask.svg"
                className="w-full sm:w-[256px] sm:h-[138px] max-w-none ml-0 sm:ml-auto rounded-xl ring-1 ring-gray-400/10 bg-gray-100"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
