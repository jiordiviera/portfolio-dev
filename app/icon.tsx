import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'
import { Poppins } from 'next/font/google'

export const runtime = 'edge'

const poppins = Poppins({ subsets: ['latin'],weight:["900"] })

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'JV'

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
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
