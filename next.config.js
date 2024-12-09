/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  webpack: (config, { dev, isServer }) => {
    if (!dev) {
      config.watchOptions = {
        ignored: ['**/*'],
        poll: false,
        aggregateTimeout: 0,
        followSymlinks: false
      };
    }
    return config;
  },
  compress: false,
  poweredByHeader: false,
  generateEtags: false,
};

module.exports = nextConfig;
