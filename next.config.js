/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.imgur.com', 'surl.li'], // Allow images from surl.li
  },
  // output: 'export',  // Enable static export
  // api: {
  //   bodyParser: false, // Disable the default body parser for file uploads
  // },
};

module.exports = nextConfig;
