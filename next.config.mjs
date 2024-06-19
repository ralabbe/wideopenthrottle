/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',
    images: {
        unoptimized: true,
    },
    env: {
        BASE_PATH: process.env.BASE_PATH,
    },
};

export default nextConfig;
