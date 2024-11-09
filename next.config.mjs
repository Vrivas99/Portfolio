/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        turboMode: false,
    },
    output: 'export',
    distDir: 'out',
    images: {
        unoptimized: true,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};
export default nextConfig;