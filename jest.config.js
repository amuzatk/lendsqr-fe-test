module.exports = {
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
  };
// This configuration sets up Jest to use jsdom as the testing environment
// and allows Jest to handle CSS imports by mocking them using identity-obj-proxy.  