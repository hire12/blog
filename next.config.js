/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['surl.li'], // Allow images from surl.li
  },
  // api: {
  //   bodyParser: false, // Disable the default body parser for file uploads
  // },
};

module.exports = nextConfig;
