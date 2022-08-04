/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "www.notion.so",
      "lh3.googleusercontent.com",
      "www.rsupport.com",
      "s3.us-west-2.amazonaws.com",
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
