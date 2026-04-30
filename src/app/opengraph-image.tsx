import { ImageResponse } from 'next/og'
import { siteConfig } from '@/lib/data'

export const alt = siteConfig.name
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
          color: '#0f172a',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 32,
            fontSize: 28,
            opacity: 0.9,
            letterSpacing: '-0.02em',
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: '#6366f1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 700,
              color: 'white',
            }}
          >
            ♪
          </div>
          <span style={{ fontWeight: 700 }}>{siteConfig.name}</span>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.03em',
            maxWidth: 960,
          }}
        >
          {siteConfig.description}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            color: '#6366f1',
            letterSpacing: '-0.01em',
            fontWeight: 600,
          }}
        >
          {siteConfig.name}
        </div>
      </div>
    ),
    { ...size }
  )
}
