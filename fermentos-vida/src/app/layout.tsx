import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Fermentos Vida | Alimentos Fermentados Artesanales',
  description: 'Descubre nuestros alimentos fermentados artesanales: kombucha, chucrut y pasta de ajo. Productos naturales ricos en probióticos.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}