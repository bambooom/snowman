import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import Logo from '../components/Icons/Logo'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Snow Man World</title>
        <meta
          property="og:image"
          content="https://snowman-logo.vercel.app/og-image.jpg"
        />
        <meta
          name="twitter:image"
          content="https://snowman-logo.vercel.app/og-image.jpg"
        />
      </Head>
      <main className="mx-auto max-w-[1960px] p-4 flex-1" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Logo className="mt-10"/>
      </main>
    </>
  )
}

export default Home
