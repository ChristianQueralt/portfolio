// next.config.ts
import type { NextConfig } from "next";

// Tipo mínimo para lo que tocamos
type WebpackCfg = {
  resolve?: {
    fallback?: Record<string, false | string>;
  };
};
type WebpackCtx = { isServer: boolean };

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config: WebpackCfg, { isServer }: WebpackCtx) => {
    // Asegura los objetos
    config.resolve ??= {};
    config.resolve.fallback ??= {};

    // Evita que el cliente intente resolver módulos de Node
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    // El tipo real es el de webpack, pero no lo necesitamos aquí
    return config as unknown as any;
  },
};

export default nextConfig;
