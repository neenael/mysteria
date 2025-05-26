/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'u185091.test-handyhost.ru',
                port: '',
                pathname: '/api/wp-content/uploads/**',
            },
        ],
    },
};

export default nextConfig;