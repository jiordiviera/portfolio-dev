/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'my.jd-devs.com',
                port: '',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'img.shields.io',
                port: '',
                pathname: '/**'
            },
        ],
    }
};

export default nextConfig;
