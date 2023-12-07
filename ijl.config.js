const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  navigations: {
    "scorescout.main": "/scorescout",
  },
  features: {
    scorescout: {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    key: "value",
    // "score-scout.url": "http://31.31.198.23:8000",
    "score-scout.url": "http://localhost:8000"
  },
};
