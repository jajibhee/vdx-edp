/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {

    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'i.vendelux.com',
      },
    ],
  },
}

module.exports = nextConfig
