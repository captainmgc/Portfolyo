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
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0b1020, #050712)'
        }}
      >
        <div
          style={{
            fontSize: 64,
            color: 'white',
            fontFamily: 'sans-serif',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            padding: 40,
            border: '2px solid rgba(255,255,255,0.15)',
            borderRadius: 16
          }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="32" r="16" fill="#7c5cff" />
            <ellipse cx="32" cy="34" rx="26" ry="8" stroke="#aeb6cf" strokeWidth="2" />
          </svg>
          <div>
            <div style={{ fontWeight: 700 }}>Mikail Güven</div>
            <div style={{ fontSize: 28, color: '#aeb6cf' }}>Full Stack Developer</div>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}