import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { NextUIProvider } from '@nextui-org/system'
import { Toaster } from 'react-hot-toast'
import ReactQueryClientProvider from '@/providers/ReactQueryProvider'
import Header from './_components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryClientProvider>
          <NextUIProvider>
            <div className="h-full w-full">
              <Header />
              {children}
            </div>
            <Toaster position="top-right" />
          </NextUIProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  )
}
