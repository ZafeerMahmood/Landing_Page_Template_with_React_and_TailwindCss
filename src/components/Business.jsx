import { features } from "../constants";
import style, { layout } from "../style";
import { Button } from "./Button";
export const Business = () => {
  return (
    <section className={`${layout.section}`} id="features">
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${style.heading2}`}>
          You do the Business <br className="sm:block hidden" />
          we{"'"}ll handle the money.
        </h2>
        <p className={`${style.paragraph} max-w-[460px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit,earning rewards and saving money. But with the
          hundreds of credit card on the market.
        </p>
        <Button styles="mt-10" text={"Get Started"} />
      </div>
    </section>
  );
};
