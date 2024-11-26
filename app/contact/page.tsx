import { Metadata } from 'next'
import { Contact } from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact | Jiordi Viera',
  description: 'Get in touch with Jiordi Viera for web development projects and collaborations.',
  openGraph: {
    title: 'Contact Jiordi Viera',
    description: 'Reach out to Jiordi Viera for your web development needs.',
    images: [
      {
        url: 'https://avatars.githubusercontent.com/u/157500676?s=400&u=00a0ae84bfaa668d379a6965db132d29d3f82f2b&v=4',
        width: 400,
        height: 400,
        alt: 'Jiordi Viera',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Jiordi Viera',
    description: 'Get in touch with Jiordi Viera for web development projects.',
    images: ['https://avatars.githubusercontent.com/u/56254853'],
    creator: '@jiordi_kengne',
  },
}
export default function ContactPage() {
  return <Contact />
}
