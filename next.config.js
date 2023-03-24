/** @type {import('next').NextConfig} */
const nextConfig = {
 reactStrictMode: true,
 images: {
  domains: ["image.tmdb.org", "rb.gy"],
 },
 env: {
  NEXT_PUBLIC_TMDB_API_KEY: process.env.NEXT_PUBLIC_TMDB_API_KEY,
 },
};

module.exports = nextConfig;
