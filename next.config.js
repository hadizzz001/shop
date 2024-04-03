/** @type {import('next').NextConfig} */

 

const nextConfig = {
    reactStrictMode: false, 
    images: {
        domains: ['res.cloudinary.com'],
      },
      typescript: { 
        ignoreBuildErrors: true, 
      },
      experimental: { serverActions: true },
      
}

module.exports = nextConfig
