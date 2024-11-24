import React from 'react';
import { ShoppingCart } from 'lucide-react';

interface ProductsProps {
  darkMode: boolean;
}

const products = [
  {
    id: 1,
    name: "KOMBUCHA CLÁSICA",
    description: "Bebida fermentada naturalmente, rica en probióticos y antioxidantes. Elaborada con té seleccionado y fermentación tradicional.",
    price: "$4.990",
    image: "/api/placeholder/400/300",
    category: "BEBIDAS"
  },
  {
    id: 2,
    name: "CHUCRUT ARTESANAL",
    description: "Repollo fermentado naturalmente, rico en probióticos y vitamina C. Preparado siguiendo técnicas tradicionales.",
    price: "$5.990",
    image: "/api/placeholder/400/300",
    category: "FERMENTADOS"
  },
  {
    id: 3,
    name: "PASTA DE AJO FERMENTADO",
    description: "Condimento natural fermentado, intenso sabor y propiedades probióticas. Perfecto para realzar tus comidas.",
    price: "$6.990",
    image: "/api/placeholder/400/300",
    category: "CONDIMENTOS"
  }
];

const Products: React.FC<ProductsProps> = ({ darkMode }) => {
  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4">PRODUCTOS DESTACADOS</h2>
        <p className="text-center mb-12 text-lg">
          Descubre nuestra selección de alimentos fermentados artesanales
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className={`${
                darkMode ? 'bg-gray-700' : 'bg-white'
              } rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300`}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm">
                  {product.category}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 text-sm`}>
                  {product.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-green-600">
                    {product.price}
                  </span>
                  <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    <ShoppingCart className="h-5 w-5" />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Ver más productos button */}
        <div className="text-center mt-12">
          <button className={`
            px-8 py-3 rounded-lg border-2 border-green-600
            ${darkMode 
              ? 'text-white hover:bg-green-600' 
              : 'text-green-600 hover:bg-green-600 hover:text-white'
            }
            transition duration-300
          `}>
            VER TODOS LOS PRODUCTOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;