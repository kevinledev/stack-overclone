const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/stackoverclone.tsx",
  output: {
    path: path.resolve(__dirname, "app", "assets", "javascripts"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", "*"],
  },
  module: {
    rules: [
      {
        test: /\.(jsx?|tsx?)$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env", "@babel/react", "@babel/preset-typescript"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
};
