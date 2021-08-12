import Image from "next/image";
import order from "../assets/hand1.jpeg";
import cc from "../assets/cc.jpg";
function HeroOrder() {
  return (
    <div className=" lg:grid lg:grid-cols-2 lg:mt-8">
      <div>
        <div className="relative h-[418px] lg:h-[627px] lg:w-[721px]">
          <Image src={order} layout="fill" objectFit="cover" />
        </div>
        <div className="text-center bg-blue-100">
          <h1 className="w-3/4 mx-auto text-2xl pt-5 font-semibold">
            Order and pick up. Easy as that.
          </h1>
          <h3 className="w-3/4 mx-auto pt-7 font-medium">
            Just open the app, order your favorites, and enjoy contactless pay.
            From there, choose whichever pickup method is best for you.
          </h3>
          <button className="border mt-10 mb-10 py-1.5 px-3 rounded-full font-medium text-sm border-gray-800">
            See pickup options
          </button>
        </div>
      </div>
      <div>
        <div className="relative h-[418px] lg:h-[627px] lg:w-[680px] lg:mx-10 mt-10 lg:mt-0">
          <Image src={cc} layout="fill" objectFit="cover" />
        </div>
        <div className="text-center bg-blue-100 lg:ml-10">
          <h1 className="w-3/4 mx-auto text-2xl pt-5 font-semibold">
            Earning 4,500 Bonus Stars is Super Starifying
          </h1>
          <h3 className="w-3/4 mx-auto pt-7 font-medium">
            With a{" "}
            <strong className="text-lg">
              $0 intro annual fee for your first year
            </strong>
            , earn more Stars and even more Rewards with the Starbucks® Rewards
            Visa® Card.
          </h3>
          <button className="border mt-10 mb-10 py-1.5 px-3 rounded-full font-medium text-sm border-gray-800">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroOrder;
