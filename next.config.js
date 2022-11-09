const { i18n } = require("./next-i18next.config");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    if (!dev) {
      return config;
    }
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/bootstrap-italia/dist/",
            to: path.join(__dirname, "./public/bootstrap-italia/dist"),
          },
        ],
      })
    );
    return config;
  },
};

module.exports = nextConfig;
