/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: 'nextuipro.nyc3.cdn.digitaloceanspaces.com',
                protocol: 'https',
            },
        ],
    },
};

export default nextConfig;
