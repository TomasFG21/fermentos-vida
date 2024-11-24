import React from 'react';
import { Leaf, Heart, Apple, Sparkles } from 'lucide-react';

interface BenefitsProps {
  darkMode: boolean;
}

const benefits = [
  {
    icon: <Leaf className="h-12 w-12" />,
    title: "100% NATURAL",
    description: "Productos elaborados con ingredientes orgánicos seleccionados cuidadosamente para garantizar la máxima calidad.",
    color: "text-green-500"
  },
  {
    icon: <Heart className="h-12 w-12" />,
    title: "PROBIÓTICOS VIVOS",
    description: "Fermentos activos que contribuyen a mejorar tu sistema digestivo y fortalecer tu sistema inmunológico.",
    color: "text-red-500"
  },
  {
    icon: <Sparkles className="h-12 w-12" />,
    title: "PROCESO ARTESANAL",
    description: "Elaboración tradicional respetando los tiempos naturales de fermentación para obtener el mejor sabor.",
    color: "text-yellow-500"
  },
  {
    icon: <Apple className="h-12 w-12" />,
    title: "BENEFICIOS PARA TU SALUD",
    description: "Alimentos funcionales que aportan nutrientes esenciales y mejoran tu bienestar general.",
    color: "text-blue-500"
  }
];

const Benefits: React.FC<BenefitsProps> = ({ darkMode }) => {
  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">BENEFICIOS DE NUESTROS PRODUCTOS</h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Descubre por qué los alimentos fermentados son esenciales para tu bienestar
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`
                ${darkMode ? 'bg-gray-800' : 'bg-white'}
                p-6 rounded-xl shadow-lg
                transform hover:scale-105 transition duration-300
                ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}
              `}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className={`
                  ${benefit.color} 
                  p-3 rounded-full 
                  ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}
                `}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {benefit.description}
                </p>

                <div className={`
                  w-16 h-1 rounded
                  ${benefit.color.replace('text', 'bg')}
                  mt-4
                `} />
              </div>
            </div>
          ))}
        </div>

        {/* Sección adicional de estadísticas */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: "1000+", label: "CLIENTES SATISFECHOS" },
            { number: "15+", label: "VARIEDADES DE PRODUCTOS" },
            { number: "5+", label: "AÑOS DE EXPERIENCIA" },
            { number: "100%", label: "NATURAL Y ARTESANAL" }
          ].map((stat, index) => (
            <div key={index} className="group">
              <div className={`
                text-4xl font-bold mb-2 text-green-600
                group-hover:scale-110 transform transition duration-300
              `}>
                {stat.number}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;