import { Metadata } from "next"
import { About } from "./_components/About"

export const metadata: Metadata = {
   title: "About Jiordi Viera",
    description: "Portfolio of Jiordi Viera, a fullstack Laravel developer with a passion for web development and databases.",
  openGraph: {
     title: "About Jiordi Viera",
    description: "Portfolio of Jiordi Viera, a fullstack Laravel developer with a passion for web development and databases.",
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
     title: "About Jiordi Viera",
    description: "Portfolio of Jiordi Viera, a fullstack Laravel developer with a passion for web development and databases.",
    images: ['https://avatars.githubusercontent.com/u/157500676?s=400&u=00a0ae84bfaa668d379a6965db132d29d3f82f2b&v=4'],
    creator: '@jiordi_kengne',
  },
}

export default function Home() {
    return (
            <About/>
    )
}
