/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true, // Necesario si estás utilizando el módulo de imágenes de Next.js
    },
    // basePath: '/REPO-NAME', // El nombre de tu repositorio (esto es importante para GitHub Pages)
  };
  
  module.exports = nextConfig;
  