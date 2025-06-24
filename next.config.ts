import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    devIndicators: false,

    images: {
        formats: ["image/webp"],
        minimumCacheTTL: 60,
    },
};

export default nextConfig;
