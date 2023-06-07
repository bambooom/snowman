import Lottie from 'lottie-web';
import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'
import createSnow from '../utils/snowfall'
import Logo from '../components/Icons/Logo'
import homeStyle from '../styles/Home.module.css';

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
    createSnow(15, snowfall.current);
    Lottie.loadAnimation({
      container: document.querySelector('.idome-logo'),
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: '/idome.json'
    });
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
        <div className='max-w-2xl flex flex-wrap justify-center items-center'>
          <Link href="/logo" className={homeStyle.text_radient_animation}>LOGOS</Link>
        </div>
        <Logo className="mb-10" />
        {/* ===== sns list ===== */}
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
        {/* ===== sns list ===== */}
        {/* ===== some special site ===== */}
        <div>
          <Link href="/idome"><div className='idome-logo'></div></Link>
        </div>
        {/* ===== some special site ===== */}

        <div id="snowfall-container" ref={snowfall}></div>
      </main>
    </>
  )
}

export default Home
