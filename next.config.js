/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'upload-food-wills.s3.sa-east-1.amazonaws.com',
        },
      ]
    }
  }
  
  module.exports = nextConfig
  