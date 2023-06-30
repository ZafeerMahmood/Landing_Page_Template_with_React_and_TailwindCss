import style from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hiden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        {/* NAVBAR  */}
        <div className={`${style.boxWidth}`}>
          Navbar
        </div>
        {/* NAVBAR  */}


        {/* MAIN  */}
        <div className={`bg-primary ${style.flexStart}`}>
          <div className={`${style.boxWidth}`}>
            hero
          </div>
        </div>

        <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
          <div className={`${style.boxWidth}`}>
            STATIC
            Busniness
            billing
            carddel
            Testimonials
            Clients
            CTA
            Footer
          </div>
        </div>
        {/* MAIN  */}
      </div>
    </div>
  );
};

export default App;
