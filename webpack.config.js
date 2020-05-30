const path = require("path");

module.exports = {
  entry: "./dist/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", "js"],
    modules: ["src", "node_modules"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  mode: "development",
};
