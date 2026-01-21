/** @type {import('next').NextConfig} */
const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH || ""
const normalizedBasePath =
  basePathEnv === "root" ||
  basePathEnv === "none" ||
  basePathEnv === "false" ||
  basePathEnv === "/"
    ? ""
    : basePathEnv
const assetPrefix = normalizedBasePath ? `${normalizedBasePath}/` : undefined

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: normalizedBasePath,
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
