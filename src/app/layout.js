import { Noto_Sans_Georgian } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import AuthProvider from '@/components/session/AuthProvider'
import Head from 'next/head'
import SubscriptionCtx from '@/context/subscriptionCtx/SubscriptionCtx'
import AlertSystem from '@/components/alertSystem/AlertSystem'

const notoSansGeorgian = Noto_Sans_Georgian(
  {
    subsets: ['georgian', 'latin', 'latin-ext']
  }
)

export const metadata = {
  title: 'Flood Guard',
  description: 'Smart solutions for safety',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <SubscriptionCtx>
          <body className={notoSansGeorgian.className}>
            <Header />
            {children}

            <AlertSystem />
          </body>
        </SubscriptionCtx>
      </AuthProvider>
    </html>
  )
}
