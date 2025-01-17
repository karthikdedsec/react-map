import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import AbuImg from "../assets/AEAZT.png"; // Path to your transparent PNG image

function ThirdPage() {
  useEffect(() => {
    // Set your Mapbox access token
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2FydGhpa2thcDEyIiwiYSI6ImNtNXo1YzZpZzAwb20yanNkbXBrYm5zN3YifQ.X_Qx8Du790iVSQlMY6LDgg";

    // Define the bounds of the image (top-left, top-right, bottom-right, bottom-left)
    const imageBounds = [
      [51.583, 26.056], // Top-left [longitude, latitude]
      [56.396, 26.056], // Top-right
      [56.396, 22.633], // Bottom-right
      [51.583, 22.633], // Bottom-left
    ];

    console.log("Image Bounds:", imageBounds);

    // Define the max bounds (southwest and northeast corners)
    const maxBounds = [
      imageBounds[3], // Southwest corner (bottom-left)
      imageBounds[1], // Northeast corner (top-right)
    ];

    console.log("Max Bounds:", maxBounds);

    // Initialize the Mapbox map
    const map = new mapboxgl.Map({
      container: "map", // ID of the section where the map will render
      style: "mapbox://styles/mapbox/streets-v11", // Use a valid base map style
      center: [54.3773, 24.4539], // Center the map on Abu Dhabi
      zoom: 10, // Initial zoom level
      maxBounds: maxBounds, // Restrict panning to the image bounds
    });

    // Add the transparent PNG image as an overlay
    map.on("load", () => {
      map.addSource("imageOverlay", {
        type: "image",
        url: AbuImg, // Path to your transparent PNG image
        coordinates: imageBounds,
      });

      map.addLayer({
        id: "image-layer",
        type: "raster",
        source: "imageOverlay",
        paint: {
          "raster-opacity": 1, // Fully opaque image (transparency handled by PNG itself)
        },
      });
    });

    return () => map.remove(); // Clean up on component unmount
  }, []);

  return (
    <section id="map" style={{ width: "100%", height: "100vh" }}></section>
  );
}

export default ThirdPage;
