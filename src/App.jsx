import { useState } from "react";
import "./App.css";

function App() {

  return (
    <div className="w-full h-screen p-5 flex flex-col items-center justify-center text-center">
      <img src="images/subway_logo_white.png" alt="Subway Logo" className="mb-5" />


      <h1 className="not-baked-text"><b>This site isn't baked yet...</b></h1>

      <img
        src="images/SubwayCookieBittenwHint.gif"
        alt="Footlong Cookie Animation"
      />

      <h1 className = "royal-text"><em>royal excellence loading...</em>.</h1>
      <h1 className="text-lg font-semibold mb-5">Subway - Agency Team 1</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <CustomButton
          className="orderbtn"
          text="Order Now"
          link="https://www.subway.com/en-us"
        />
        <CustomButton
          className="friendSend"
          text="Send to a Friend"
          link="https://www.subway.com/en-us"
        />
      </div>

      <p>Rest of website here!</p>
    </div>
  );
}

const CustomButton = ({ className, text, link }) => {
  return (
    <button
      className={`${className} px-6 py-3 rounded-md font-semibold text-white`}
      onClick={() => window.location.href = link}
    >
      {text}
    </button>
  );
};

export default App;
