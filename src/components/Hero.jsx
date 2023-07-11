import style from "../style";
import { discount, robot } from "../assets";
import { GetStarted } from "./GetStarted";
export const Hero = () => {
  return (
    <section id="home" className={`flex flex-col md:flex-row ${style.paddingY}`} >
      <div className={`flex-1 ${style.flexStart} flex-col xl:px-0 sm:px-16 px-6`} >
        <div className="flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-lg mb-2">
          <img src={discount} alt="discount" className="h-8 w-8" />
          <p className={`${style.paragraph} ml-2`}>
            <span className="text-white">20 %</span> Discount for{" "}
            <span className="text-white">1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins ss:leading-[100.8px] leading-[75px] text-white font-semibold ss:text-7xl text-5xl">
            The Next <br className="sm:block hidden" />
            <span className="text-gradient"> Generation</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 m-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins w-full ss:leading-[100.8px] leading-[75px] text-white font-semibold ss:text-7xl text-5xl">
          Payment Method.
        </h1>
        <p className={`${style.paragraph} max-w-md mt-5`}>
          Our Team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. we examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={` flex-1 flex ${style.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="robot"
          className="w-full h-full relative z-20"
        />
        <div className="absolute z-0 w-2/5 h-2/6 top-0 pink__gradient"></div>
        <div className="absolute z-10 w-4/5 h-4/5 rounded-full buttom-0 white__gradient"></div>
        <div className="absolute z-0 w-2/4 h-2/4 right-20 buttom-0 blue__gradient"></div>
      </div>
      <div className={`block ss:hidden ${style.flexCenter}`}><GetStarted/></div>
    </section>
  );
};
