import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['surl.li'], // Allow images from surl.li
  },
  // api: {
  //   bodyParser: false, // Disable the default body parser for file uploads
  // },
};

export default nextConfig;
