import React from "react";
import style from "./style";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hiden">
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          Navbar
        </div>
      </div>
    </div>
  );
};

export default App;
