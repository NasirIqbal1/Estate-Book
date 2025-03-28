import "./App.css";
import BannerPoint from "./Component/BannerPoint";
import NavBanner from "./Component/NavBanner";
import AboutUs from "./Component/AboutUs";

function App() {
  return (
    <div className="App">
      <NavBanner />
      <BannerPoint />
      <AboutUs />
    </div>
  );
}

export default App;
