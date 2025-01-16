import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";

function AbuDhabiMap() {
  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2FydGhpa2thcDEyIiwiYSI6ImNtNXo1YzZpZzAwb20yanNkbXBrYm5zN3YifQ.X_Qx8Du790iVSQlMY6LDgg";

    // Initialize the Mapbox map
    const map = new mapboxgl.Map({
      container: "abudabi-map", // ID of the section where the map will render
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [54.3773, 24.4539], // Coordinates for Abu Dhabi [longitude, latitude]
      zoom: 10, // Initial zoom level
    });

    return () => map.remove(); // Clean up the map instance on component unmount
  }, []);

  return <section id="abudabi-map" className="abudabi-map"></section>;
}

export default AbuDhabiMap;
