/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static export for Azure Static Web Apps
  // This generates a fully static site that can be deployed to Azure Static Web Apps
  // without requiring a Node.js server runtime
  output: "export",

  // Disable image optimization for static export
  // Azure Static Web Apps doesn't support Next.js Image Optimization API
  // Images will be served as static assets instead
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
