//.babelrc.common.js
const presets = ["@babel/preset-react", "@babel/preset-env"];
const plugins = [];

module.exports = {
  presets,
  plugins,
};

// //.babelrc.client.js
// const config = require("./.babelrc.common.js");
// config.presets.push("@babel/preset-env");
// module.exports = config;

// //.babelrc.server.js
// const config = require("./.babelrc.server.js");
// config.plugins.push("@babel/plugin-transform-modules-commonjs");
// module.exports = config;
