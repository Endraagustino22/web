import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaLocationDot } from "react-icons/fa6";

export default function LocationSection() {
    // Buat ikon kustom
    const customIcon = new L.Icon({
      iconUrl: "/maps-icon.png", // Path gambar ikon
      iconSize: [50, 50], // Ukuran ikon
      iconAnchor: [16, 32], // Posisi anchor (tengah-bawah)
      popupAnchor: [0, -32], // Posisi popup
    });

  return (
    <div className="relative w-full h-[80vh] flex flex-col sm:flex-row justify-end overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-0"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Peta & Alamat */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center lg:items-end justify-end h-full w-full p-6 lg:p-12">
        
        {/* Alamat */}
        <div className="relative z-60 w-full mx-5 lg:mx-10 sm:w-1/3 text-center lg:text-right sm:my-auto">
          <div className="flex items-center justify-center lg:justify-end flex-row gap-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-xl">
              Location
            </h2>
            <FaLocationDot className="text-red-500 w-6 h-6 lg:w-10 lg:h-10" />
          </div>
          <p className="font-bold text-white mt-2">
            Jl. Imam Bonjol No.207, Pendrikan Kidul, Kec. Semarang Tengah, Kota
            Semarang, Jawa Tengah 50131
          </p>

          <div className="mt-5 flex flex-col lg:flex-row lg:justify-end gap-4">
            <a
              href="https://maps.app.goo.gl/n1oz8a3D2WwXQUJg7"
              className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-md hover:bg-gray-100 transition"
            >
              Kunjungi
            </a>
          </div>
        </div>

        {/* Peta */}
        <MapContainer
          center={[-6.982519654098204, 110.40904986594362]}
          zoom={15}
          className="h-52 w-52 sm:w-[50vw] sm:h-[50vw] lg:w-80 lg:h-80 rounded-full brightness-75 my-5 mt-20 sm:my-auto"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            key={1}
            position={[-6.982519654098204, 110.40904986594362]}
            icon={customIcon}
          >
            <Popup>Endra Agustino.</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
