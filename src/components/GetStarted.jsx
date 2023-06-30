import style from "../style";
import { arrowUp } from "../assets";
export const GetStarted = () => {
  return <div className={`${style.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer `}>
    <div className={`${style.flexCenter} flex-col bg-primary h-full w-full rounded-full`}>
      <div className={`${style.flexCenter} flex-row `}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
          <span className="text-gradient">
            Get
          </span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">
            Started
          </span>
        </p>
    </div>
  </div>;
};
