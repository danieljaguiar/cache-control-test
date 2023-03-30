/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/next-cache",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=610, stale-while-revalidate",
          },
          {
            key: "Test-Type",
            value: "next",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
