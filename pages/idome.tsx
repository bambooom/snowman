import type { NextPage } from 'next'
import Head from 'next/head'
import IdomeStyle from '../styles/Idome.module.css';

const IdomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Snow Man-3rd ALBUM「i DO ME｣ #挑め自分らしさに</title>
        <meta
          property="og:image"
          content="https://snowman-logo.vercel.app/og-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://snowman-logo.vercel.app/og-image.jpg"
        />
      </Head>
      <main className='idome-page main-container'>
        <div className={IdomeStyle.idome_word}></div>
        <div className='fixed top-0 left-0 w-full h-full bg-dark' style={{ height: 'calc(100vh - 140px)' }}>
          <div className={IdomeStyle.bg_object}></div>
          <div className={IdomeStyle.bg_text}></div>
        </div>
      </main>
    </>
  )
}

export default IdomePage
