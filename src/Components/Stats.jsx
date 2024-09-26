const stats = [
  { id: 1, name: "Brands partnered with", value: "60" },
  { id: 2, name: "brands content assets created", value: "3K" },
  { id: 3, name: "global partners and collaborators", value: "1K" },
  { id: 4, name: "cities and worldwide", value: "100" },
];

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <div class="relative w-48">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border border-t border-[#EE011C]"></div>
              </div>
              <div class="relative flex justify-end text-sm">
                <span class="bg-white px-2 text-lg text-[#EE011C]">WE ARE GLOBAL</span>
              </div>
            </div>
          </div>
          <dl className="mt-4 sm:mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col p-8">
                <dt className="text-lg font-semibold leading-6 text-gray-800 px-8 mt-4">
                  {stat.name}
                </dt>
                <dd className={`${stat.id == 1 ? "": "border-l"} order-first text-6xl sm:text-8xl font-medium tracking-tight text-gray-900`}>
                  {stat.value}
                  <span className="text-[#EE011C] ">+</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
