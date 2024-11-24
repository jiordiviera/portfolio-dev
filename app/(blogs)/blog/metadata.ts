import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Blog | Dev Jiordi',
    description: 'Discover our latest captivating and inspiring articles about web development.',
    openGraph: {
        title: 'Dev Jiordi\'s Blog',
        description: 'Explore the latest web development insights and tutorials.',
        images: [
            {
                url: 'https://avatars.githubusercontent.com/u/157500676?s=400&u=00a0ae84bfaa668d379a6965db132d29d3f82f2b&v=4',
                width: 400,
                height: 400,
                alt: 'Dev Jiordi',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Dev Jiordi\'s Blog',
        description: 'Discover the latest web development articles and tutorials.',
        images: ['https://avatars.githubusercontent.com/u/56254853'],
        creator: '@jiordi_kengne',
    },
}

