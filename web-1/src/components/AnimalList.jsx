import { motion } from "framer-motion";

const animals = [
  { id: 1, name: "Lion", image: "/images/lion.jpg" },
  { id: 2, name: "Tiger", image: "/images/tiger.jpg" },
  { id: 3, name: "Elephant", image: "/images/elephant.jpg" },
  { id: 4, name: "Giraffe", image: "/images/giraffe.jpg" },
];

const AnimalList = () => {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-[#A5D6A7] shadow-[0px_-10px_6px_-5px_rgba(0,0,0,1)]">
        <h1 className="col-span-full text-5xl font-extrabold text-center pt-8 text-[#6D4C41] "> Animal Galerry </h1>
      {animals.map((animal, index) => (
        <motion.div
          key={animal.id}
          className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow transform hover:scale-105 duration-300"
          initial={{ opacity: 0, x: -100 }} // Semua elemen muncul dari kiri
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut", delay: index * 0.2 }}
          viewport={{ once: false, amount: 0.2 }} // Animasi ulang saat masuk viewport
        >
          <img src={animal.image} alt={animal.name} className="rounded-lg w-full h-40 object-cover" />
          <h3 className="text-xl font-bold mt-2 text-center text-green-800">{animal.name}</h3>
        </motion.div>
      ))}
    </section>
  );
};

export default AnimalList;
