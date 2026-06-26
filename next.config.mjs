/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // Itha pudhusa add pannanum
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
