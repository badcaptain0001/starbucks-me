import Image from "next/image";
import staff from "../assets/staff.jpeg";
function Staff() {
  return (
    <div
      className="flex flex-col-reverse
     lg:grid lg:grid-cols-2 lg:mt-8"
    >
      <div className="relative h-[418px] lg:h-[627px] lg:w-[721px] ">
        <Image src={staff} layout="fill" objectFit="cover" />
      </div>
      <div className="flex py:14 lg:py-10 text-center items-center justify-center flex-col w-full bg-red-50 text-lg font-medium text-gray-800">
        <h1 className="pt-10 text-2xl font-bold">
          50 years of serving communities
        </h1>
        <h3 className="w-3/4 relative top-10 text-lg">
          50 years of serving communities From the beginning, Starbucks has been
          about more than just coffee. See how our partners (employees) and
          customers strengthen our local communities.
        </h3>
        <button className="border mt-20 mb-10 py-1.5 px-3 rounded-full font-medium text-sm border-gray-800">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Staff;
