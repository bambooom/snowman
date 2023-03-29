import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import createSnow from '../utils/snowfall'
import Logo from '../components/Icons/Logo'

const snsList = [
  {
    name: 'youtube',
    label: 'Snow Man',
    icon: '/sns/youtube.png',
    href: 'https://www.youtube.com/@J_SNOWMAN',
  },
  {
    name: 'twitter',
    label: 'Snow Man / MENT RECORDING',
    icon: '/sns/twitter.png',
    href: 'https://twitter.com/SN__20200122',
  },
  {
    name: 'instagram',
    label: 'Snow Man',
    icon: '/sns/instagram.png',
    href: 'https://www.instagram.com/snowman_official_j/',
  },
  {
    name: 'instagram',
    label: 'ラウール',
    icon: '/sns/instagram.png',
    href: 'https://www.instagram.com/raul.official_sn_j/',
  },
  {
    name: 'weibo',
    label: 'Snow Man',
    icon: '/sns/weibo.png',
    href: 'https://www.weibo.com/SnowManofficial',
  },
  {
    name: 'jnet',
    label: 'Snow Man',
    icon: '/sns/jnet-white.svg',
    href: 'https://www.johnnys-net.jp/page?id=artistTop&artist=43',
  },
];

const Home: NextPage = () => {
  const snowfall = useRef<HTMLDivElement>(null);
  useEffect(() => {
    createSnow(30, snowfall.current);
  });

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
      <main className="mx-auto max-w-[1960px] p-4 flex flex-col justify-center items-center" style={{ minHeight: 'calc(100vh - 140px)' }}>
        <Logo className="mb-10" />
        <div className="max-w-2xl flex flex-wrap justify-center items-center gap-4">
          {snsList.map((sns, index) => (
            <Link
              key={index}
              href={sns.href}
              className="flex items-center justify-center gap-2 p-2 rounded-md text-white opacity-70 hover:opacity-100"
            >
              <img className='w-16 h-16' src={sns.icon} alt={sns.label + ' ' + sns.name} />
              <span>{ sns.label }</span>
            </Link>
          ))}
        </div>
        <div id="snowfall-container" ref={snowfall}></div>
      </main>
    </>
  )
}

export default Home
