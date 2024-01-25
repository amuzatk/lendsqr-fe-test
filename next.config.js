module.exports = {
    images: {
      domains: ['i.pravatar.cc'],
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
  
      return config;
    },
  };
  