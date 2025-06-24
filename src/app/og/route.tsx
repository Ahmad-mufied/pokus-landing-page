import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
        }}
      >
        <img
          src="https://pokus-landing.netlify.app/logo-pokus-light.png"
          alt="Pokus Logo"
          width={256}
          height={256}
          style={{ margin: '0 auto', display: 'block' }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
} 