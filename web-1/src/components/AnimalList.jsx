import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const animals = [
  { id: 1, name: "Lion", image: "/img/animals/lion.jpg", description: "The lion is the king of the jungle." },
  { id: 2, name: "Tiger", image: "/img/animals/tiger.jpg", description: "Tigers are the largest wild cats in the world." },
  { id: 3, name: "Elephant", image: "/img/animals/elephant.jpg", description: "Elephants have strong memory and intelligence." },
  { id: 4, name: "Giraffe", image: "/img/animals/giraffe.jpg", description: "Giraffes are the tallest land animals." },
];

const AnimalList = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 py-10 bg-[url('./white-paper-texture.jpg')] bg-cover bg-center">
      <h1
        className="col-span-full text-5xl font-extrabold text-center pt-8 text-white drop-shadow-xl"
        style={{
          textShadow: "2px 2px 0 #6D4C41, -2px -2px 0 #6D4C41, 2px -2px 0 #6D4C41, -2px 2px 0 #6D4C41",
        }}
      >
        Animal Gallery
      </h1>

      {animals.map((animal) => (
        <motion.div
          key={animal.id}
          className="p-2 bg-[#6D4C41] my-5 shadow-[2px_2px_10px_2px_rgba(128,128,128,1)] hover:scale-105 rounded-lg transition-all duration-300 transform cursor-pointer"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          onClick={() => setSelectedAnimal(animal)} // Set data saat diklik
        >
          <img src={animal.image} alt={animal.name} className="rounded-lg w-full h-30 sm:h-40 object-cover" />
          <h3 className="text-l font-bold mt-2 text-center text-white">{animal.name}</h3>
        </motion.div>
      ))}
      <h1 className="text-center col-span-full text-white"
      style={{
          textShadow: "1px 1px 0 #6D4C41, -1px -1px 0 #6D4C41, 1px -1px 0 #6D4C41, -1px 1px 0 #6D4C41",
        }}
      >Click the Image for More Details</h1>

      {/* Modal Deskripsi */}
      <AnimatePresence>
        {selectedAnimal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-opacity-50 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedAnimal(null)} // Tutup modal saat klik luar
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-2xl w-96 relative"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup jika diklik dalamnya
            >
              <h2 className="text-2xl font-bold text-gray-800">{selectedAnimal.name}</h2>
              <p className="text-gray-600 mt-2">{selectedAnimal.description}</p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                onClick={() => setSelectedAnimal(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AnimalList;
