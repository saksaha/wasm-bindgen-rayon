const path = require("path");

module.exports = {
  mode: "development",
  devtool: "source-map",
  entry: {
    main: path.join(__dirname, "index.js"),
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
};
