/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {
    images: {
        domains: ['cloudflare-ipfs.com', 'loremflickr.com'],
      },
}

module.exports = nextConfig
