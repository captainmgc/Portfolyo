import type { Metadata } from 'next'
import './globals.css'
import { Poppins, Orbitron } from 'next/font/google'
import MotionControls from '@/components/MotionControls'

const poppins = Poppins({ subsets: ['latin'], weight: ['300','400','600','700'], display: 'swap', variable: '--font-poppins' })
const orbitron = Orbitron({ subsets: ['latin'], weight: ['400','600','700'], display: 'swap', variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'Mikail Güven — Full Stack Developer',
  description: 'Modern web teknolojileri ile estetik ve güvenli çözümler üretiyorum.',
  metadataBase: new URL('http://localhost:3000'),
  themeColor: '#0ea5a4',
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Mikail Güven — Portfolio',
    description: 'Güneş Sistemi temalı etkileşimli portfolyo',
    images: ['/api/og'],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mikail Güven — Portfolio',
    description: 'Güneş Sistemi temalı etkileşimli portfolyo',
    images: ['/api/og']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mikail Güven',
    jobTitle: 'Full Stack Developer & Cyber Security Enthusiast',
    url: 'https://example.com',
    sameAs: [
      'https://github.com/TODO',
      'https://www.linkedin.com/in/TODO'
    ]
  }

  return (
    <html lang="tr" className={`${poppins.variable} ${orbitron.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <MotionControls />
        {children}
      </body>
    </html>
  )
}