import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cairo } from 'next/font/google'
import './globals.css'

const cairo = Cairo({ subsets: ['arabic', 'latin'] })

export const metadata: Metadata = {
  title: 'كورس إدارة علاقات العملاء CRM - تدريب احترافي في مصر',
  description: 'كورس عملي 100% لتطبيق أشهر أنظمة الـ CRM وبناء مسارات المبيعات وأتمتة خدمة العملاء. ورشة عمل حضورية في القاهرة بتدريب شامل من متخصصين.',
  generator: 'v0.app',
  icons: {
    icon: '/favicon.ico',
    apple: '/og-image.png',
  },
  openGraph: {
    title: 'كورس CRM احترافي مع Joseph Ibrahim',
    description: 'تدريب عملي 100% في إدارة علاقات العملاء والأتمتة والمبيعات',
    url: 'https://crm-course.example.com',
    siteName: 'كورس CRM',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'كورس CRM احترافي',
        type: 'image/png',
      },
    ],
    type: 'website',
    locale: 'ar_EG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'كورس CRM احترافي مع Joseph Ibrahim',
    description: 'تدريب عملي 100% في إدارة علاقات العملاء',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="bg-background">
      <body className={`${cairo.className} antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
