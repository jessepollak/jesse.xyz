/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
const assetPrefix = basePath ? `${basePath}/` : undefined

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
