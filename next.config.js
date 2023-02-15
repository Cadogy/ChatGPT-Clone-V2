/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com']
  },
  experimental: {
    appDir: true,
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'url-loader',
      },
    });
    return config;
  },
}

module.exports = nextConfig
