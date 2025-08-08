/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      '@headlessui/react',
      '@heroicons/react',
      'framer-motion'
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

export default nextConfig