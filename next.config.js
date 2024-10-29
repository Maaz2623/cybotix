/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cloud.appwrite.io",
        port: "",
        pathname: "/v1/storage/buckets/671b7d480000a3616092/**",
      },
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: `/f/lli57a7u9y/**`,
      },
    ],
  },
};

export default nextConfig;
