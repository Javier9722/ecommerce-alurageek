import React from "react";

const App = () => {
  return (
    // <div className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-xl overflow-hidden border border-red-300"></div>
    // <Lottie
    //   animationData={garden}
    //   loop={true}
    //   className="shrink-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-xl overflow-hidden border border-red-300"
    // />
    <lottie-player
      id="firstLottie"
      src="https://assets2.lottiefiles.com/packages/lf20_o6hQ8m.json"
      className="shrink-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-xl overflow-hidden border border-red-300"
    ></lottie-player>
  );
};

export default App;
