import React from "react";
import Lottie from "lottie-react";
import garden from "./garden.json";

const App = () => {
  return (
    // <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-xl overflow-hidden border border-red-300"></div>
    <Lottie
      animationData={garden}
      loop={true}
      className="shrink-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-xl overflow-hidden border border-red-300"
    />
  );
};

export default App;
