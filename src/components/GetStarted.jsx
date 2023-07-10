import style from "../style";
import { arrowUp } from "../assets";
export const GetStarted = () => {
  return <div className={`${style.flexCenter} w-36 h-36 rounded-full bg-blue-gradient p-1 cursor-pointer `}>
    <div className={`${style.flexCenter} flex-col bg-primary h-full w-full rounded-full`}>
      <div className={`${style.flexCenter} flex-row `}>
        <p className="font-poppins font-medium text-lg leading-6 mr-2">
          <span className="text-gradient">
            Get
          </span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-6 h-6 object-contain" />
      </div>
      <p className="font-poppins font-medium text-lg leading-6">
          <span className="text-gradient">
            Started
          </span>
        </p>
    </div>
  </div>;
};
