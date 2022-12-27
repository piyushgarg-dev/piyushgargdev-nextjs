/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com", "cdn.hashnode.com", "wsrv.nl"],
  },
};

module.exports = nextConfig;
