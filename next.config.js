/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|jpeg)",
        locale: false,
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=864000, must-revalidate",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  images: {
    domains: ["i.ytimg.com", "cdn.hashnode.com", "wsrv.nl"],
  },
};

module.exports = nextConfig;
