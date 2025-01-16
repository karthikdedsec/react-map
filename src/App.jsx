import "./App.css";
import AbuDhabiMap from "./components/AbuDhabiMap";
import AbuImg from "./assets/abudhabi-map.png";
import AbuMap from "./assets/AEAZ.png";

function App() {
  return (
    <>
      <section className="map-container">
        <div className="abu-container">
          <AbuDhabiMap />
        </div>
        <img src={AbuMap} alt="" className="stock-image" />
      </section>
    </>
  );
}

export default App;
