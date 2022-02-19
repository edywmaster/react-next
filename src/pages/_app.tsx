import React from 'react'
import type { AppProps } from 'next/app'

import { globalCss } from '../../stitches.config'

const globalStyles = globalCss({
  html: {
    overflowX: 'hidden',
  },

  body: {
    margin: 0,
    backgroundColor: '$bgTheme',
  },

  'body, button': {
    fontFamily: '$untitled',
  },

  svg: { display: 'block' },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violet5',
  },
})

function App({ Component, pageProps }: AppProps) {
  globalStyles()

  return <Component {...pageProps} />
}

export default App
