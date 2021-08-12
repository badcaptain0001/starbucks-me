import Image from "next/image";
import summer from "../public/summergame.jpeg";
function Hero() {
  return (
    <div
      className="flex flex-col-reverse
     lg:grid lg:grid-cols-2 lg:mt-8"
    >
      <div className="flex py:14 lg:py-10 text-center items-center justify-center flex-col w-full bg-green-900 text-lg font-medium text-white">
        <h3 className="w-3/4 relative top-10 ">
          Your qualifying purchases have been earning you plays. Play the Summer
          Game for a chance to win cool prizes.*
        </h3>
        <button className="border my-14 py-1.5 px-3 rounded-full font-medium text-sm">
          Play Now !
        </button>
      </div>
      <div className="relative h-[418px] lg:h-[627px] lg:w-[721px] ">
        <Image src={summer} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Hero;
