import { Barlow } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'


const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={barlow.className}>
      <Component {...pageProps} />
    </main>
  )
}