// @ts-check
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  /** @param { import("webpack").Configuration } config */
  webpack(config) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    config.experiments = { ...config.experiments, topLevelAwait: true };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config;
  },
};
// eslint-disable-next-line import/no-default-export
export default config;
