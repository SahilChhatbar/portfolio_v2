import type { Metadata, Viewport } from 'next'
import { Cinzel, Geist_Mono, Newsreader, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import Header from '@/components/layout/Header'
import Navigation from '@/components/layout/Navigation'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
})

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#f9f7f1',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'SAHIL K. CHHATBAR — Software Developer',
    template: '%s | SAHIL K. CHHATBAR',
  },
  description:
    'Portfolio of Sahil Chhatbar. Software Developer specializing in React.js, Next.js, TypeScript, and modern web application development.',
  keywords: [
    'Sahil Chhatbar',
    'Sahil K. Chhatbar',
    'Software Developer',
    'Frontend Developer',
    'Full-Stack Developer',
    'React.js Developer',
    'Next.js Portfolio',
    'TypeScript',
    'Redux',
    'TanStack Query',
    'Lamda Logs',
  ],
  authors: [{ name: 'Sahil Chhatbar', url: 'https://github.com/SahilChhatbar' }],
  creator: 'Sahil Chhatbar',
  publisher: 'Sahil Chhatbar',
  metadataBase: new URL('https://sahilchhatbar.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sahilchhatbar.dev',
    title: 'SAHIL K. CHHATBAR — Software Developer',
    description:
      'Portfolio showcasing projects, experience, skills, and web application development by Sahil Chhatbar.',
    siteName: 'Sahil Chhatbar Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAHIL K. CHHATBAR — Software Developer',
    description:
      'Portfolio showcasing projects, experience, skills, and web application development by Sahil Chhatbar.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${newsreader.variable} ${cinzel.variable} ${geistMono.variable}`}
    >
      <body
        suppressHydrationWarning
        className="bg-paper-bg text-ink-black selection:bg-ink-primary selection:text-paper-bg flex min-h-screen flex-col"
      >
        {/* Outer Broadsheet Paper Container */}
        <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-3 py-3 sm:px-6 sm:py-6 lg:px-8">
          {/* Header Area */}
          <Header />

          {/* Navigation Ribbon */}
          <Navigation />

          {/* Main Portfolio Content */}
          <main className="my-4 w-full flex-1">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
