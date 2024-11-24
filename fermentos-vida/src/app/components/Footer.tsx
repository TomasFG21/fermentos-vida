import React from 'react';
import { Instagram, Facebook, Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Columna 1 - Sobre Nosotros */}
          <div>
            <h4 className="text-lg font-semibold mb-4">SOBRE NOSOTROS</h4>
            <img 
              src="/api/placeholder/150/150" 
              alt="Fermentos Vida Logo" 
              className="mb-4 h-16 w-auto"
            />
            <p className="text-gray-300 text-sm">
              Elaboramos alimentos fermentados artesanales, siguiendo técnicas tradicionales 
              y utilizando ingredientes de primera calidad.
            </p>
          </div>

          {/* Columna 2 - Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">ENLACES RÁPIDOS</h4>
            <ul className="space-y-2">
              {[
                'Inicio',
                'Productos',
                'Sobre Nosotros',
                'Blog',
                'Contacto'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition duration-300 text-sm flex items-center"
                  >
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 inline-block" />
                    {item.toUpperCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Información de Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4">CONTACTO</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-green-400" />
                <span>+56 9 XXXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-5 w-5 text-green-400" />
                <span>info@fermentosvida.cl</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-green-400" />
                <span>Santiago, Chile</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Clock className="h-5 w-5 text-green-400" />
                <span>Lun - Vie: 9:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Columna 4 - Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">NEWSLETTER</h4>
            <p className="text-gray-300 text-sm mb-4">
              Suscríbete para recibir noticias sobre nuevos productos y ofertas especiales.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="w-full px-4 py-2 rounded bg-green-700 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded transition duration-300"
              >
                SUSCRIBIRSE
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 pt-8 border-t border-green-700">
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="hover:text-green-400 transition duration-300"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="#" 
              className="hover:text-green-400 transition duration-300"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
            <p>© 2024 Fermentos Vida. Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition duration-300">Políticas de Privacidad</a>
              <a href="#" className="hover:text-white transition duration-300">Términos y Condiciones</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;