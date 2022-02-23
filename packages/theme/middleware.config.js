module.exports = {
  integrations: {
    weldgalaxy: {
      location: '@vue-storefront/weldgalaxy-api/server',
      // location: '@weldgalaxy/api/server',
      configuration: {
        api: {
          url: 'http://localhost:7000' // URL of your eCommerce platform
        }
      }
    }
  }
};
