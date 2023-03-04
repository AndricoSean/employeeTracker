/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};
module.exports = {
  env: {
    mongodb_url: "asfasdf",
    access_token_secret: `7978e18c7f6fe7c010437ed7675311d1b96a0675ae840156c71c01bd8be3ba9b`,
    refresh_token_secret: `5615fdcc8984ebae3f7cd542f5da56338dc59452d7d9669575c17b231ff1b538`,
  },
};

module.exports = nextConfig;
