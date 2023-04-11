import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import BottomBanner from "./components/BottomBanner";
import Popup from "./components/Popup";
import { useState } from "react";

function App() {
  const [buttonPopup, setButtonPopup] = useState(true);
  return (
    <div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
      <Header />
      <Body />
      <BottomBanner />
      <Footer />
    </div>
  );
}

export default App;
