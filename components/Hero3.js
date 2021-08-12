import Image from "next/image";
import hero3 from "../assets/hero3.jpg";
function Hero3() {
  return (
    <div
      className="flex flex-col-reverse
 lg:grid lg:grid-cols-2 lg:mt-8"
    >
      <div className="flex py:14 lg:py-10 text-center items-center justify-center flex-col w-full bg-red-50 text-lg font-medium text-gray-800">
        <h1 className="pt-10 text-4xl">HAPPY PLACE FOUND</h1>
        <h3 className="w-3/4 relative top-10 text-lg">
          Our Frappuccino® drinks were made for summer fun. Treat yourself to
          Mocha Cookie Crumble or Caramel Ribbon Crunch.
        </h3>
        <button className="border mt-20 mb-10 py-1.5 px-3 rounded-full font-medium text-sm border-gray-800">
          Order Frappuccino® drink
        </button>
      </div>
      <div className="relative h-[418px] lg:h-[627px] lg:w-[721px] ">
        <Image src={hero3} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Hero3;
