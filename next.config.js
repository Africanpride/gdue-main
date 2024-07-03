/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'via.placeholder.com',
        },
        {
          protocol: 'https',
          hostname: 'flagcdn.com',
        },
        {
          protocol: 'https',
          hostname: 'img.clerk.com',
          port: '',        
        },
      ],
    },
  }
  
  module.exports = nextConfig
  