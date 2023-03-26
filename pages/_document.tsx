// https://nextjs.org/docs/advanced-features/custom-document
// A custom Document can update the <html> and <body> tags used to render a Page.
// This file is only rendered on the server, so event handlers like onClick cannot be used in _document.

import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Logo art from Snow Man"
          />
          <meta property="og:site_name" content="snowman-logo.vercel.app" />
          <meta
            property="og:description"
            content="Logo art from Snow Man"
          />
          <meta property="og:title" content="Snow Man Logo Gallery" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Snow Man Logo Gallery" />
          <meta
            name="twitter:description"
            content="Logo art from Snow Man"
          />
        </Head>
        <body className="bg-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
