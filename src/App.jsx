import "./App.css";
import AbuDhabiMap from "./components/AbuDhabiMap";

function App() {
  return (
    <>
      <section className="map-container">
        <img
          src="https://images.unsplash.com/photo-1603349995009-369a029c14a5?q=80&w=1786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="stock-image"
        />
        <AbuDhabiMap />
      </section>
    </>
  );
}

export default App;
