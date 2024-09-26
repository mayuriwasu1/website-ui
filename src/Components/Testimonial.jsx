import { useState } from "react";

const jobOpenings = [
  {
    id: 1,
    role: "Full-time designer",
    href: "#",
    description:
      "Quos sunt ad dolore ullam qui. Enim et quisquam dicta molestias. Corrupti quo voluptatum eligendi autem labore.",
    salary: "$75,000 USD",
    location: "San Francisco, CA",
    img: "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    role: "Laravel developer",
    href: "#",
    description:
      "Creation, ensuring your messages resonate worldwide. From concept to distribution, our platform serves as your strategic partner.",
    salary: "$125,000 USD",
    location: "San Francisco, CA",
    img: "/images/mask.png",
  },
  {
    id: 3,
    role: "React Native developer",
    href: "#",
    description:
      "Veniam ipsam nisi quas architecto eos non voluptatem in nemo. Est occaecati nihil omnis delectus illum est.",
    salary: "$105,000 USD",
    location: "San Francisco, CA",
    img: "https://images.unsplash.com/photo-1720743453691-268baa850b5e?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function Testimonial() {
  const [openIndex, setOpenIndex] = useState(1);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="bg-white mt-12 sm:mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="bg-white font-medium tracking-tight text-gray-900 sm:text-4xl">
          Our expertise and passion <br/> breath life into your narratives 
        </h2>
        <div className="block md:flex items-center gap-12">
          <div className="w-full sm:w-[484px] h-[50%] sm:h-auto">
            <img
              alt=""
              // width={484}
              // height={451}
              src={
                jobOpenings?.[openIndex]?.img ||
                "https://images.unsplash.com/photo-1719937206158-cad5e6775044?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              className="aspect-square sm:aspect-auto posterImage mt-16 aspect-[6/5]  bg-gray-50 object-cover lg:aspect-auto w-full h-[250px] sm:w-[484px] sm:h-[451px] transition-opacity duration-500"
            />
          </div>
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <h3 className="sr-only">Job openings</h3>
            <ul>
              {jobOpenings.map((item, index) => (
                <li
                  key={item.id}
                  className={`${
                    openIndex === index ? "openList py-8" : "py-5"
                  } list`}
                >
                  {openIndex === index ? (
                    <p className="itemNumber">0{index + 1}</p>
                  ) : (
                    <></>
                  )}
                  <h2
                    className={`${openIndex === index ? "text-2xl font-medium" : "text-gray-500 text-xl "} item`}
                    onClick={() => handleToggle(index)}
                  >
                    {item.role}
                  </h2>

                  <div
                    className={`content ${
                      openIndex === index ? "open text-base text-gray-600 mt-5 " : ""
                    } `}
                  >
                    {item.description}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  ); 
}
