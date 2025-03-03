import { useState } from "react";
import "./App.css";

function App() {
  const [isGifVisible, setIsGifVisible] = useState(false);
  const toggleGif = () => setIsGifVisible(!isGifVisible);

  return (
    <>
      <img 
        src="images/Mask group (1).png" 
        alt="Ray of Sunshine" 
        className="sunshine-ray"
      />
      <img 
        src="images/subway_logo_white.png" 
        alt="Subway Logo" 
        className="subway-logo-top"
      />

      <h1 className="not-baked-text">
        <b>This site isn't baked yet...</b>
      </h1>

      <img 
        src="images/SubwayCookieBittenwHint.gif" 
        alt="Footlong Cookie Animation" 
        className="cookie-animation"
      />

      <h1 className="royal-text">
        <em>royal excellence loading...</em>
      </h1>

      <div className="button-group">
        <CustomButton 
          className="orderbtn" 
          text="Order Now" 
          link="https://www.subway.com/en-us" 
        />
        <button 
          className="friendSend" 
          onClick={toggleGif}
        >
          Send to a Friend
        </button>
      </div>

      {isGifVisible && (
      <img
      src="images/tickTock.gif"
      alt="Send to a Friend GIF"
      className="block mx-auto mt-4 w-60"
      />
      )}

      <img 
        src="images/britneyBroski.jpg" 
        alt="Britney Broski Thumbnail"
        className="britney-thumbnail"
      />

      <p className="temple-text">
        Your body is a temple.
      </p>

      <img 
        src="images/openSign.png" 
        alt="Open and close neon sign"
        className="open-sign"
      />

      <p className="temple-close-text">
        <em>However, the temple must <b>close.</b></em>
      </p>

      <img 
        src="images/Group 22.png" 
        alt="footlong cookie footer"
        className="footlong-footer"
      />

      <p className="cookie-alter-ego">
        <b>"What is your cookie alter ego?"</b>
      </p>

      <CustomButton 
        className="personality-quiz" 
        text="Personality Quiz" 
        link="https://opinionstage.com/page/bcc3eb1b-c3cc-4f67-b80d-09cc3db5a276"
      />

      <img 
        src="images/subway_logo_white.png" 
        alt="Subway Logo" 
        className="subway-logo-bottom"
      />

      <img
        src="images/Mask group.png"
        alt="Background Sparkle"
        className="footer-sparkle"
      />
    </>
  );
}

const CustomButton = ({ className, text, link }) => {
  return (
    <button
      className={className}
      onClick={() => (window.location.href = link)}
    >
      {text}
    </button>
  );
};

export default App;
