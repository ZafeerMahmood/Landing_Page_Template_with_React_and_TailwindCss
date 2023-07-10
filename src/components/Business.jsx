import { features } from "../constants";
import style, { layout } from "../style";
import { Button } from "./Button";



const FeatureCard = ({icon,title,content,index }) => (
  <div className={`flex flex-row p-6 rounded-3xl ${index!==features.length-1 ? "mb-6": "mb-0" } feature-card `}>
      <div className={`w-16 h-16 rounded-full ${style.flexCenter} bg-dimBlue `}>
        <img src={icon} alt="icon" className="w-2/4 h-2/4 object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-base leading-6 mb-1">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite text-base leading-6 mb-1">{content}</p>
      </div>
  </div>
)

FeatureCard.propTypes = {
  icon: " ",
  title: " ",
  content: " ",
  index: " "
}


export const Business = () => {
  return (
    <section className={`${layout.section}`} id="features">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${style.heading2}`}>
          You do the Business <br className="sm:block hidden" />
          we{"'"}ll handle the money.
        </h2>
        <p className={`${style.paragraph} max-w-md mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit,earning rewards and saving money. But with the
          hundreds of credit card on the market.
        </p>
        <Button styles="mt-10" text={"Get Started"}  />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
          <FeatureCard key={feature.id} {...feature} index={index}></FeatureCard>
        ))}
      </div>
    </section>
  );
};
