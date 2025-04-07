import "./App.css";
import BannerPoint from "./Component/BannerPoint";
import NavBanner from "./Component/NavBanner";
import AboutUs from "./Component/AboutUs";
import MidPage from "./Component/MidPage";
import Officepage from "./Component/Officepage";
import Map from "./Component/Map";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <NavBanner />
      <BannerPoint />
      <AboutUs />
      <MidPage />
      <Officepage />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
