import style from "./style";
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Client, Cta, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hiden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        {/* NAVBAR  */}
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

        {/* NAVBAR  */}

        {/* MAIN  */}
        <div className={`bg-primary ${style.flexStart}`}>
          <div className={`${style.boxWidth}`}>
            <Hero />
          </div>
        </div>

        <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
          <div className={`${style.boxWidth}`}>
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Client />
            <Cta />
            <Footer />
          </div>
        </div>
        {/* MAIN  */}
    </div>
  );
};

export default App;
