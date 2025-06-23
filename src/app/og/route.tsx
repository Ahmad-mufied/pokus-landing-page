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
          backgroundImage: 'radial-gradient(circle at 25% 25%, #1a1a1a 0%, #000000 50%)',
          padding: '40px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
              fontWeight: 'bold',
              color: 'white',
            }}
          >
            P
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              letterSpacing: '-2px',
            }}
          >
            Pokus
          </div>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            lineHeight: '1.1',
            marginBottom: '20px',
            maxWidth: '800px',
          }}
        >
          Stop Procrastinating,
          <br />
          Start Focusing
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '28px',
            color: '#a0a0a0',
            textAlign: 'center',
            maxWidth: '600px',
            lineHeight: '1.4',
            marginBottom: '40px',
          }}
        >
          Transform your productivity with the Chrome extension that blocks distractions and helps you focus
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginTop: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#667eea',
              }}
            />
            <div
              style={{
                fontSize: '18px',
                color: '#e0e0e0',
                fontWeight: '500',
              }}
            >
              Pomodoro Timer
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#764ba2',
              }}
            />
            <div
              style={{
                fontSize: '18px',
                color: '#e0e0e0',
                fontWeight: '500',
              }}
            >
              Site Blocker
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#f093fb',
              }}
            />
            <div
              style={{
                fontSize: '18px',
                color: '#e0e0e0',
                fontWeight: '500',
              }}
            >
              Focus Mode
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
} 