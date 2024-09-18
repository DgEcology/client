/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['i.pinimg.com', 'w.wallhaven.cc', 'api.eco.kostyazero.com'], // добавьте домены, с которых разрешено загружать изображения
    },
};

export default nextConfig;
