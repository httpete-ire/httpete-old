module.exports = {
  webpack: (config, { dev }) => {
    console.log(config.module.rules);
    config.module.rules.push({
      test: /\.svg$/,
      loader: 'raw-loader',
    });
    console.log(config.module.rules);
    return config;
  },
};
