import type { AppProps } from 'next/app'

import '../styles/main.css'
import '../styles/dropdown.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
