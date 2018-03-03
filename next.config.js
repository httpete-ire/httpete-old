module.exports = {
  webpack: (config, { dev }) => {
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'raw-loader',
    });
    return config;
  },
};
