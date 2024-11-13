import { ImageResponse } from 'next/og'
import { Poppins } from 'next/font/google'

export const runtime = 'edge'

// Image metadata
export const alt = 'About Jiordi'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'
const poppins = Poppins({ subsets: ['latin'],weight:["900"] })

// Image generation
export default async function Image() {
const title = 'JV'

   return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'linear-gradient(to bottom right, #4F46E5, #7C3AED)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
          }}
          className={poppins.className}
        >
          <div
            style={{
              fontSize: 200,
              background: 'white',
              width: 320,
              height: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              color: '#4F46E5',
              fontWeight: 700,
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 1200,
      }
    )
}
