import { Configuration } from "webpack";

const nextConfig = {
  webpack: (config: Configuration) => {
    config.externals = [...(config.externals as any[] || []), 'keyv'];
    return config;
  },
}

export default nextConfig;