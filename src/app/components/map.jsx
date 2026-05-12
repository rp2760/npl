"use client";

import { useEffect, useState } from "react";

import "leaflet/dist/leaflet.css";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import L from "leaflet";

// Fix default marker issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

export default function Map() {
  const [position, setPosition] = useState(null);
  const [time, setTime] = useState("");

  // Live clock
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      setPosition([
        location.coords.latitude,
        location.coords.longitude,
      ]);
    });
  }, []);

  if (!position) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading Map...
      </div>
    );
  }

  return (
    <div className="h-screen w-full relative">
      {/* Time */}
      <div className="absolute top-5 left-5 z-[1000] bg-black text-white px-4 py-2 rounded-xl">
        {time}
      </div>

      <MapContainer
        center={position}
        zoom={15}
        scrollWheelZoom={true}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>You are here 📍</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}