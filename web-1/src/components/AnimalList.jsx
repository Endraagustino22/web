import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const animals = [
  { id: 1, name: "Lion", image: "/img/animals/lion.jpg", description: "The lion is the king of the jungle." },
  { id: 2, name: "Tiger", image: "/img/animals/tiger.jpg", description: "Tigers are the largest wild cats in the world." },
  { id: 3, name: "Elephant", image: "/img/animals/elephant.jpg", description: "Elephants have strong memory and intelligence." },
  { id: 4, name: "Giraffe", image: "/img/animals/giraffe.jpg", description: "Giraffes are the tallest land animals." },
  { id: 5, name: "Zebra", image: "/img/animals/zebra.jpg", description: "Zebras have unique black and white stripes." },
];

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 md:left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition z-10"
  >
    ◀
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 md:right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-600 transition z-10"
  >
    ▶
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Default: 3 gambar
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  responsive: [
    {
      breakpoint: 1024, // Untuk layar tablet besar
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768, // Untuk layar tablet kecil
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480, // Untuk layar HP
      settings: {
        slidesToShow: 1,
        arrows: false, // Sembunyikan arrow di HP agar tidak mengganggu tampilan
      },
    },
  ],
};

const AnimalCarousel = () => {
  return (
    <section className="px-4 py-10 bg-gradient-to-r from-gray-200 to-gray-300 h-fit bg-center overflow-x-hidden">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-700 drop-shadow-xl mb-6">
        Animal Gallery
      </h1>
      <Slider {...settings}>
        {animals.map((animal) => (
          <div key={animal.id} className="p-2 md:p-4">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden p-3">
              <img src={animal.image} alt={animal.name} className="w-full h-40 md:h-60 object-cover" />
              <div className="p-2 md:p-4 text-center">
                <h3 className="text-lg md:text-xl font-bold text-gray-800">{animal.name}</h3>
                <p className="text-gray-600 mt-1 md:mt-2">{animal.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default AnimalCarousel;
