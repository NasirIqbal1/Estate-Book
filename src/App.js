import "./App.css";
import BannerPoint from "./Component/BannerPoint";
import NavBanner from "./Component/NavBanner";
import Table from "./Component/Table";


function App() {
  return (
    <div className="App">
      <NavBanner />
      <BannerPoint />
      < Table/>
    </div>
  );
}

export default App;
