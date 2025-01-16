import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import AbuImg from "../assets/AEAZ.png";

function SecondMap() {
  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2FydGhpa2thcDEyIiwiYSI6ImNtNXo1YzZpZzAwb20yanNkbXBrYm5zN3YifQ.X_Qx8Du790iVSQlMY6LDgg";

    // Initialize the Mapbox map
    const map = new mapboxgl.Map({
      container: "map", // ID of the section where the map will render
      style: "mapbox://styles/mapbox/streets-v11", // Map style
      center: [54.3773, 24.4539], // Coordinates for Abu Dhabi [longitude, latitude]
      zoom: 10, // Initial zoom level
    });
    // Add navigation controls
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Add the image overlay when the map loads
    map.on("load", () => {
      map.addSource("abuDhabiImage", {
        type: "image",
        url: AbuImg, // Path to your image
        coordinates: [
          [54.31, 24.5], // Replace these values with accurate coordinates
          [54.41, 24.49],
          [54.41, 24.43],
          [54.31, 24.43],
        ],
      });

      map.addLayer({
        id: "overlay",
        type: "raster",
        source: "abuDhabiImage",
        paint: {
          "raster-opacity": 0.5, // Adjust the opacity (0 = fully transparent, 1 = fully opaque)
        },
      });
    });

    return () => map.remove(); // Clean up the map instance on component unmount
  }, []);

  return <section id="map" className="map"></section>;
}

export default SecondMap;
