const AboutUs = () => {
    return (
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-green-800 mb-4">About Our Zoo</h2>
          <p className="text-lg  max-w-2xl mx-auto">
            Welcome to our zoo! We are dedicated to the conservation of wildlife and providing an educational experience for all visitors. Our mission is to protect endangered species and inspire people to care about nature.
          </p>
        </div>
  
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center">
            <h3 className="text-xl font-bold text-green-800">Our Vision</h3>
            <p className=" mt-2">To be a leading zoo in wildlife conservation and education.</p>
          </div>
  
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center">
            <h3 className="text-xl font-bold text-green-800">Our Mission</h3>
            <p className=" mt-2">Providing a safe habitat for animals and fostering awareness about biodiversity.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  