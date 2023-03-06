module.exports = {
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.cjs$/,
        use: [
          options.defaultLoaders.babel,
        ],
      });
  
      return config;
    },
  };
  