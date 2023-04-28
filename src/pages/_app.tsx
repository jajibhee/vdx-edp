import { Barlow } from 'next/font/google'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import { theme } from '@/theme'
import createEmotionCache from '@/createEmotionCache'
import { useEffect } from 'react';



const barlow = Barlow({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

const clientSideEmotionCache = createEmotionCache();


// Client-side cache, shared for the whole session of the user in the browser.
// const clientSideEmotionCache = createEmotionCache();

export default function App({ Component, pageProps }: AppProps, props: any) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const { emotionCache = clientSideEmotionCache } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <main className={barlow.className}>
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </CacheProvider>

  )
}

