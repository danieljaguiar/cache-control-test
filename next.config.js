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
            value: "max-age=610, s-maxage=610",
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
