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
  },
};
