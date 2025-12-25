/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Add this to prevent errors with the <Image /> component
  },
};

export default nextConfig;
