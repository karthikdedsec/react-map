import React from "react";
import AbuDhabiMap from "../components/AbuDhabiMap";
import AbuMap from "../assets/AEAZ.png";

const Home = () => {
  return (
    <section className="map-container">
      <div className="abu-container">
        <AbuDhabiMap />
      </div>
      <img draggable={true} src={AbuMap} alt="" className="stock-image" />
    </section>
  );
};

export default Home;
