// module.exports = {
//     pageDataCollectionTimeout: 120000,
//   };
  
//   module.exports = {
//     images: {
//       domains: ['cloudflare-ipfs.com'],
//     },
//     pageDataCollectionTimeout: 120000,
//   };


 // next.config.js
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
    // pageDataCollectionTimeoutMillis: 120000, // Use the correct option name
  };
  