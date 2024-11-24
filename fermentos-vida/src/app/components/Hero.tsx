import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const carouselItems = [
  {
    image: "/api/placeholder/1920/600",
    title: "FERMENTOS ARTESANALES",
    subtitle: "Descubre el poder de los alimentos vivos",
    cta: "Explorar Productos"
  },
  {
    image: "/api/placeholder/1920/600",
    title: "KOMBUCHA NATURAL",
    subtitle: "Bebida probiótica refrescante",
    cta: "Ver Kombuchas"
  },
  {
    image: "/api/placeholder/1920/600",
    title: "CHUCRUT TRADICIONAL",
    subtitle: "Rico en probióticos naturales",
    cta: "Conoce Más"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-[600px] overflow-hidden">
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">{item.title}</h1>
              <p className="text-xl mb-8">{item.subtitle}</p>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition transform hover:scale-105">
                {item.cta}
              </button>
            </div>
          </div>
        </div>
      ))}
      
      {/* Carousel Controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-white" />
      </button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;