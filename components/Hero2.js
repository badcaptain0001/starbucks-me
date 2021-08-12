import Image from "next/image";
import hero2 from "../assets/hero2.jpg";
function Hero2() {
  return (
    <div
      className="flex flex-col-reverse
     lg:grid lg:grid-cols-2 lg:mt-8"
    >
      <div className="relative h-[418px] lg:h-[627px] lg:w-[721px] ">
        <Image src={hero2} layout="fill" objectFit="cover" />
      </div>
      <div className="flex py:14 lg:py-10 text-center items-center justify-center flex-col w-full bg-red-50 text-lg font-medium text-gray-800">
        <h1 className="pt-10 text-4xl">STARBUCKS REFRESHERS® BEVERAGES</h1>
        <h3 className="w-3/4 relative top-10 text-lg">
          Quench your summer thirst with vibrant Mango Dragonfruit, Strawberry
          Açaí and Kiwi Starfruit Starbucks Refreshers® beverages.
        </h3>
        <button className="border mt-20 mb-10 py-1.5 px-3 rounded-full font-medium text-sm border-gray-800">
          Order iced beverages
        </button>
      </div>
    </div>
  );
}

export default Hero2;
