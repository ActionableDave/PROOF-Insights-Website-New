

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  devIndicators: false,
  allowedDevOrigins: [
    "*.macaly.dev",
    "*.macaly.app",
    "*.macaly-app.com",
    "*.macaly-user-data.dev",
  ],
  async redirects() {
    return [
      {
        source: '/methodologies/price-optimization',
        destination: '/solutions/innovation-growth/pricing',
        permanent: true,
      },
      {
        source: '/methodologies/price-laddering',
        destination: '/methodologies/gabor-granger',
        permanent: true,
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Only apply in development
    if (dev) {
      config.module.rules.unshift({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "macaly-tagger",
          },
        ],
        enforce: "pre", // Run before other loaders
      });
    }

    return config;
  },
};

module.exports = nextConfig;