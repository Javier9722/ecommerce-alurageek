import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef(); // initialize your ref
  }
  render() {
    return (
      <Player
        ref={this.player} // set the ref to your class instance
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets7.lottiefiles.com/packages/lf20_o6hQ8m.json"
        className="w-[300px] h-[300px] rounded-xl"
      ></Player>
    );
  }
}

export default App;
