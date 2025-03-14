import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ZooMap = () => {
  const zooCenter = [-6.302, 106.820]; // Koordinat kebun binatang (contoh)
  
  // Daftar lokasi hewan & fasilitas
  const locations = [
    { id: 1, name: "Kandang Singa", coords: [-6.301, 106.821] },
    { id: 2, name: "Kandang Jerapah", coords: [-6.303, 106.819] },
    { id: 3, name: "Kandang Panda", coords: [-6.302, 106.818] },
    { id: 4, name: "Restoran Safari", coords: [-6.300, 106.822] },
    { id: 5, name: "Toko Suvenir", coords: [-6.304, 106.820] },
  ];

  return (
    <div className="zoo-map-container">
      <h2 className="text-center text-xl font-bold mb-4">Peta Kebun Binatang</h2>
      <MapContainer center={zooCenter} zoom={16} style={{ height: "400px", width: "100%" }}>
        {/* Tile layer sebagai dasar peta */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {/* Marker untuk setiap lokasi di daftar */}
        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.coords}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ZooMap;
