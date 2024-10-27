import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: 'images.openfoodfacts.net' }],
  },
}

export default nextConfig
